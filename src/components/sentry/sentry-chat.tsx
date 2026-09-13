"use client";

import { useState, useEffect, useRef, useCallback, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare, X, ArrowUp, Minus, ShieldCheck,
  RotateCcw, Check, AlertTriangle, Sparkles,
} from "lucide-react";
import {
  FLOW, matchIntent, FALLBACK_MESSAGE, FALLBACK_REPLIES,
  type QuickReply, type FieldKey,
} from "@/lib/sentry/flow";

/* ── palette ─────────────────────────────────────────────────────
   deep    #0C2A6B   header block
   mid     #2563EB   user bubbles, send, active
   bright  #4A8AE8   avatar, accents
   wash    #F4F8FF   conversation surface
   chip    #DCE9FD   quick reply fill
   ───────────────────────────────────────────────────────────── */

interface Message { id: string; role: "bot" | "user"; text: string; ts: number }
type LeadData = Partial<Record<FieldKey, string>> & { tags?: string[] };
type FlowCapture = NonNullable<(typeof FLOW)[string]["capture"]>;

const STORAGE_KEY = "tf-sentry-v3";
const NUDGE_DELAY = 14_000;
const TYPING_MIN = 400;
const TYPING_PER_CHAR = 10;
const TYPING_MAX = 1400;
const CAPTURE_STEPS: FieldKey[] = ["email", "name", "requirement"];

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i} className="font-semibold text-[#0C2A6B]">{p.slice(2, -2)}</strong>
        ) : <span key={i}>{p}</span>
      )}
    </>
  );
}

export default function SentryChat() {
  const [open, setOpen] = useState(false);
  const [minimised, setMinimised] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [replies, setReplies] = useState<QuickReply[]>([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [capture, setCapture] = useState<FlowCapture | null>(null);
  const [lead, setLead] = useState<LeadData>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [unread, setUnread] = useState(0);
  const [nudge, setNudge] = useState(false);
  const [started, setStarted] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => { timers.current.forEach(clearTimeout); }, []);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const s = JSON.parse(raw);
      if (Array.isArray(s.messages) && s.messages.length) {
        setMessages(s.messages); setReplies(s.replies ?? []);
        setLead(s.lead ?? {}); setStarted(true);
      }
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    if (!started) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ messages, replies, lead }));
    } catch { /* quota */ }
  }, [messages, replies, lead, started]);

  useEffect(() => {
    if (started || open) return;
    const t = setTimeout(() => setNudge(true), NUDGE_DELAY);
    return () => clearTimeout(t);
  }, [started, open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, replies, capture]);

  useEffect(() => {
    if (capture && open && !minimised) {
      const t = setTimeout(() => inputRef.current?.focus(), 240);
      return () => clearTimeout(t);
    }
  }, [capture, open, minimised]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* click outside → minimise (desktop only; mobile uses the scrim) */
  useEffect(() => {
    if (!open || minimised) return;
    const onDown = (e: PointerEvent) => {
      if (window.innerWidth < 640) return;
      const t = e.target as Node;
      if (panelRef.current?.contains(t)) return;
      if (launcherRef.current?.contains(t)) return;
      setMinimised(true);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open, minimised]);

  const push = useCallback((role: Message["role"], text: string) => {
    setMessages((m) => [...m, {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, role, text, ts: Date.now(),
    }]);
  }, []);

  const typeDelay = (t: string) =>
    Math.min(TYPING_MAX, Math.max(TYPING_MIN, t.length * TYPING_PER_CHAR));

  const submitLead = useCallback(async () => {
    setStatus("sending");
    try {
      const transcript = messages
        .map((m) => `${m.role === "bot" ? "Sentry" : "Visitor"}: ${m.text}`).join("\n");
      const res = await fetch("/api/sentry/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...lead, transcript,
          page: typeof window !== "undefined" ? window.location.pathname : "",
          referrer: typeof document !== "undefined" ? document.referrer : "",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent"); runNode("done");
    } catch { setStatus("error"); runNode("error"); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lead, messages]);

  const runNode = useCallback((id: string) => {
    const node = FLOW[id];
    if (!node) return;
    setReplies([]); setCapture(null);
    let elapsed = 0;
    node.messages.forEach((msg, i) => {
      const delay = typeDelay(msg);
      timers.current.push(setTimeout(() => setTyping(true), elapsed));
      elapsed += delay;
      timers.current.push(setTimeout(() => {
        setTyping(false); push("bot", msg);
        if (!open || minimised) setUnread((u) => u + 1);
        if (i === node.messages.length - 1) {
          if (node.capture) setCapture(node.capture);
          else if (node.replies) setReplies(node.replies);
          if (node.submit) void submitLead();
        }
      }, elapsed));
      elapsed += 120;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, minimised, push, submitLead]);

  const openChat = () => {
    setOpen(true); setMinimised(false); setNudge(false); setUnread(0);
    if (!started) {
      setStarted(true);
      timers.current.push(setTimeout(() => runNode("welcome"), 300));
    }
  };

  const pickReply = (r: QuickReply) => {
    push("user", r.label); setReplies([]);
    if (r.tag) setLead((l) => ({ ...l, tags: [...new Set([...(l.tags ?? []), r.tag!])] }));
    timers.current.push(setTimeout(() => runNode(r.next), 330));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;
    push("user", value); setInput("");

    if (capture) {
      if (capture.optional && /^(skip|no|none|n\/a)$/i.test(value)) {
        setCapture(null);
        timers.current.push(setTimeout(() => runNode(capture.next), 300));
        return;
      }
      const err = capture.validate?.(value);
      if (err) {
        timers.current.push(setTimeout(() => {
          setTyping(true);
          timers.current.push(setTimeout(() => { setTyping(false); push("bot", err); }, 480));
        }, 250));
        return;
      }
      setLead((l) => ({ ...l, [capture.field]: value }));
      setCapture(null);
      timers.current.push(setTimeout(() => runNode(capture.next), 300));
      return;
    }

    const match = matchIntent(value);
    if (match) {
      timers.current.push(setTimeout(() => runNode(match), 340));
    } else {
      timers.current.push(setTimeout(() => {
        setTyping(true);
        timers.current.push(setTimeout(() => {
          setTyping(false); push("bot", FALLBACK_MESSAGE); setReplies(FALLBACK_REPLIES);
        }, 600));
      }, 250));
    }
  };

  const reset = () => {
    timers.current.forEach(clearTimeout); timers.current = [];
    sessionStorage.removeItem(STORAGE_KEY);
    setMessages([]); setLead({}); setReplies([]); setCapture(null);
    setStatus("idle"); setInput("");
    timers.current.push(setTimeout(() => runNode("welcome"), 200));
  };

  const canType = !!capture || (!replies.length && !typing);
  const stepIndex = capture ? CAPTURE_STEPS.indexOf(capture.field) : -1;
  const inCapture = stepIndex >= 0;

  return (
    <>
      {/* ═══ launcher ═══ */}
      <AnimatePresence>
        {(!open || minimised) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 14 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            ref={launcherRef}
            className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[9998] flex items-end gap-3"
          >
            <AnimatePresence>
              {nudge && !open && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 14, scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className="relative mb-1 hidden sm:block"
                >
                  <button
                    onClick={openChat}
                    className="flex max-w-[264px] items-start gap-3 rounded-[20px] rounded-br-lg bg-[#0C2A6B] px-4 py-3.5 text-left shadow-xl shadow-[#0C2A6B]/25 transition hover:bg-[#123577]"
                  >
                    <span className="mt-px grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#4A8AE8]">
                      <Sparkles className="h-3.5 w-3.5 text-white" strokeWidth={2.4} />
                    </span>
                    <span>
                      <span className="block text-[13px] font-semibold leading-snug text-white">
                        Scoping a data diode deployment?
                      </span>
                      <span className="mt-1 block text-[12px] leading-snug text-[#9DBEF0]">
                        I can size it against your topology in a minute.
                      </span>
                    </span>
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setNudge(false); }}
                    aria-label="Dismiss"
                    className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-[#2563EB] text-white shadow-lg ring-2 ring-white transition hover:bg-[#1D4FD8]"
                  >
                    <X className="h-3 w-3" strokeWidth={2.6} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={openChat}
              aria-label="Open Sentry assistant"
              className="group relative grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#2563EB] shadow-xl shadow-[#2563EB]/40 transition-all duration-200 hover:bg-[#1D4FD8] hover:shadow-2xl hover:shadow-[#2563EB]/50 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#93B8F5] active:scale-95"
            >
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[#2563EB] opacity-40 animate-halo" />
              <MessageSquare className="relative h-6 w-6 text-white" strokeWidth={2} />
              <span className="absolute bottom-3 right-3 h-2 w-2 rounded-full bg-[#34D399] ring-2 ring-[#2563EB]" />
              {unread > 0 && (
                <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-[20px] place-items-center rounded-full bg-[#0C2A6B] px-1 text-[10px] font-bold text-white ring-2 ring-white">
                  {unread > 9 ? "9+" : unread}
                </span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ panel ═══ */}
      <AnimatePresence>
        {open && !minimised && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[9998] bg-[#061530]/55 backdrop-blur-sm sm:hidden"
            />

            <motion.div
              ref={panelRef}
              role="dialog"
              aria-label="Sentry assistant"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 360, damping: 32 }}
              className="fixed z-[9999] flex flex-col overflow-hidden bg-white
                         inset-x-0 bottom-0 top-12 rounded-t-[26px]
                         sm:inset-auto sm:bottom-7 sm:right-7 sm:top-auto
                         sm:h-[min(672px,calc(100vh-7rem))] sm:w-[400px]
                         sm:rounded-[24px] sm:shadow-[0_28px_70px_-14px_rgba(12,42,107,0.45)]"
            >
              {/* ── header ── */}
              <header className="relative shrink-0 bg-[#0C2A6B] px-5 pb-5 pt-5">
                <div className="flex items-start gap-3.5">
                  <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#4A8AE8] shadow-lg shadow-[#061530]/30">
                    <ShieldCheck className="h-[22px] w-[22px] text-white" strokeWidth={2.2} />
                    <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-[#34D399] ring-[2.5px] ring-[#0C2A6B]" />
                  </div>

                  <div className="min-w-0 flex-1 pt-0.5">
                    <p className="text-[17px] font-semibold leading-tight tracking-tight text-white">
                      Sentry
                    </p>
                    <p className="mt-0.5 text-[12.5px] leading-tight text-[#9DBEF0]">
                      Terafence assistant · Replies instantly
                    </p>
                  </div>

                  <div className="-mr-1.5 -mt-1 flex items-center gap-0.5">
                    <button onClick={reset} aria-label="Restart"
                      className="grid h-8 w-8 place-items-center rounded-full text-[#7BA4E4] transition hover:bg-white/10 hover:text-white">
                      <RotateCcw className="h-[15px] w-[15px]" />
                    </button>
                    <button onClick={() => setMinimised(true)} aria-label="Minimise"
                      className="hidden h-8 w-8 place-items-center rounded-full text-[#7BA4E4] transition hover:bg-white/10 hover:text-white sm:grid">
                      <Minus className="h-4 w-4" />
                    </button>
                    <button onClick={() => setOpen(false)} aria-label="Close"
                      className="grid h-8 w-8 place-items-center rounded-full text-[#7BA4E4] transition hover:bg-white/10 hover:text-white">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {inCapture && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 flex items-center gap-3">
                        <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#7BA4E4]">
                          {stepIndex + 1} / {CAPTURE_STEPS.length}
                        </span>
                        <span className="flex flex-1 gap-1.5">
                          {CAPTURE_STEPS.map((s, i) => (
                            <span key={s}
                              className={`h-[3px] flex-1 rounded-full transition-colors duration-300 ${
                                i <= stepIndex ? "bg-[#4A8AE8]" : "bg-white/15"}`} />
                          ))}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </header>

              {/* ── transcript ── */}
              <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-[#F4F8FF] px-4 py-5">
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
                  >
                    {m.role === "user" ? (
                      <div className="max-w-[84%] whitespace-pre-line rounded-[18px] rounded-br-[6px] bg-[#2563EB] px-4 py-2.5 text-[13.5px] font-medium leading-relaxed text-white shadow-md shadow-[#2563EB]/25">
                        {m.text}
                      </div>
                    ) : (
                      <div className="max-w-[88%] whitespace-pre-line rounded-[18px] rounded-bl-[6px] bg-white px-4 py-2.5 text-[13.5px] leading-relaxed text-[#3F4A5F] shadow-[0_1px_3px_rgba(12,42,107,0.08)]">
                        <RichText text={m.text} />
                      </div>
                    )}
                  </motion.div>
                ))}

                {typing && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                    <div className="flex items-center gap-1.5 rounded-[18px] rounded-bl-[6px] bg-white px-4 py-3 shadow-[0_1px_3px_rgba(12,42,107,0.08)]">
                      {[0, 1, 2].map((i) => (
                        <span key={i} className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#4A8AE8]"
                          style={{ animationDelay: `${i * 150}ms`, animationDuration: "1s" }} />
                      ))}
                    </div>
                  </motion.div>
                )}

                <AnimatePresence>
                  {status === "sending" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center pt-1">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-semibold text-[#3F4A5F] shadow-sm">
                        <span className="h-2.5 w-2.5 animate-spin rounded-full border-[1.5px] border-[#DCE9FD] border-t-[#2563EB]" />
                        Sending
                      </span>
                    </motion.div>
                  )}
                  {status === "sent" && (
                    <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-center pt-1">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCFCE7] px-3.5 py-1.5 text-[11px] font-bold text-[#166534]">
                        <Check className="h-3 w-3" strokeWidth={3} /> Sent to our team
                      </span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-center pt-1">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FEE2E2] px-3.5 py-1.5 text-[11px] font-bold text-[#991B1B]">
                        <AlertTriangle className="h-3 w-3" strokeWidth={2.5} /> Delivery failed
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* quick replies — pills */}
                <AnimatePresence>
                  {replies.length > 0 && !typing && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-wrap gap-2 pt-1.5"
                    >
                      {replies.map((r, i) => (
                        <motion.button
                          key={r.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05, duration: 0.18 }}
                          onClick={() => pickReply(r)}
                          className="rounded-full bg-[#DCE9FD] px-4 py-2 text-[12.5px] font-semibold text-[#0C2A6B] transition-all duration-150 hover:bg-[#2563EB] hover:text-white hover:shadow-md hover:shadow-[#2563EB]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 active:scale-95"
                        >
                          {r.label}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ── composer ── */}
              <form onSubmit={onSubmit} className="shrink-0 bg-white px-4 pb-4 pt-3">
                <div className="flex items-center gap-2 rounded-full bg-[#F4F8FF] py-1.5 pl-4 pr-1.5 ring-1 ring-[#DCE9FD] transition-all duration-150 focus-within:ring-2 focus-within:ring-[#2563EB]">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={!canType}
                    maxLength={500}
                    aria-label="Message"
                    placeholder={
                      capture ? capture.placeholder
                        : canType ? "Ask about products or deployment…"
                        : "Choose an option above"
                    }
                    className="min-w-0 flex-1 bg-transparent py-1.5 text-[13.5px] text-[#0C2A6B] placeholder:text-[#94A9C9] focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || !canType}
                    aria-label="Send"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#2563EB] text-white transition-all duration-150 hover:bg-[#1D4FD8] hover:shadow-md hover:shadow-[#2563EB]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 disabled:bg-[#DCE9FD] disabled:text-[#94A9C9] disabled:shadow-none active:scale-90"
                  >
                    <ArrowUp className="h-4 w-4" strokeWidth={2.6} />
                  </button>
                </div>

                <div className="mt-2.5 flex items-center justify-between px-2">
                  {capture?.optional ? (
                    <button type="button" onClick={() => setInput("skip")}
                      className="text-[11.5px] font-semibold text-[#94A9C9] transition hover:text-[#2563EB]">
                      Skip
                    </button>
                  ) : <span />}
                  <p className="flex items-center gap-1 text-[10.5px] font-semibold text-[#94A9C9]">
                    <ShieldCheck className="h-3 w-3" strokeWidth={2.4} />
                    Secured by Terafence
                  </p>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes halo {
          0%   { transform: scale(1);    opacity: 0.4; }
          70%,100% { transform: scale(1.65); opacity: 0; }
        }
        .animate-halo { animation: halo 2.6s cubic-bezier(0,0,0.2,1) infinite; }
        @media (prefers-reduced-motion: reduce) { .animate-halo { animation: none; } }
      `}</style>
    </>
  );
}
