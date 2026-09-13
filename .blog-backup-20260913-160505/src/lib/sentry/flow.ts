/**
 * Sentry — conversation engine
 *
 * A deterministic, node-based dialogue tree. No model calls, no cost,
 * no hallucination surface. Every answer is authored copy.
 *
 * To extend: add a node here. The widget renders whatever this returns.
 */

export type FieldKey = "name" | "email" | "company" | "phone" | "requirement";

export interface QuickReply {
  label: string;
  next: string;
  /** Optional tag recorded against the lead for routing/scoring. */
  tag?: string;
}

export interface FlowNode {
  id: string;
  /** Bot messages, rendered in sequence with a natural delay between each. */
  messages: string[];
  /** Tappable options. Omit when `capture` is set. */
  replies?: QuickReply[];
  /** Ask for a single lead field via free-text input. */
  capture?: {
    field: FieldKey;
    placeholder: string;
    /** Node to advance to once captured. */
    next: string;
    validate?: (value: string) => string | null;
    /** Allow the visitor to skip this field. */
    optional?: boolean;
  };
  /** Terminal node — triggers lead submission. */
  submit?: boolean;
}

/* ── validators ──────────────────────────────────────────────────── */

const FREE_EMAIL = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com",
  "aol.com", "icloud.com", "protonmail.com", "mail.com",
];

const validateEmail = (v: string): string | null => {
  const t = v.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t)) {
    return "That doesn't look like a valid email — mind checking it?";
  }
  const domain = t.split("@")[1];
  if (FREE_EMAIL.includes(domain)) {
    return "Could you share a work email? It helps us route your enquiry to the right engineer.";
  }
  return null;
};

const validateName = (v: string): string | null => {
  const t = v.trim();
  if (t.length < 2) return "Could you give me your full name?";
  if (t.length > 80) return "That's a little long — just your name is fine.";
  return null;
};

const validateRequirement = (v: string): string | null =>
  v.trim().length < 6 ? "Just a few more words — even a short phrase helps." : null;

/* ── flow ────────────────────────────────────────────────────────── */

export const FLOW: Record<string, FlowNode> = {
  /* ---------- entry ---------- */

  welcome: {
    id: "welcome",
    messages: [
      "Hi — I'm Sentry, Terafence's assistant.",
      "I can walk you through our hardware data diode technology, help you scope a deployment, or put you in front of an engineer.\n\nWhat brings you here?",
    ],
    replies: [
      { label: "Explore products", next: "products", tag: "product-interest" },
      { label: "I have a use case", next: "usecases", tag: "use-case" },
      { label: "Request a demo", next: "demo_intro", tag: "demo-request" },
      { label: "Technical question", next: "technical", tag: "technical" },
    ],
  },

  /* ---------- products ---------- */

  products: {
    id: "products",
    messages: [
      "Our hardware enforces one-way data flow at the physical layer — an FPGA-based diode, not software filtering. Traffic physically cannot travel back.",
      "Which fits what you're looking at?",
    ],
    replies: [
      { label: "TFG-BSG", next: "p_bsg", tag: "product:BSG" },
      { label: "TFG-1URP", next: "p_urp", tag: "product:1URP" },
      { label: "TFG-121", next: "p_121", tag: "product:121" },
      { label: "Not sure yet", next: "p_help", tag: "product:unsure" },
    ],
  },

  p_bsg: {
    id: "p_bsg",
    messages: [
      "**TFG-BSG** — our Basic Security Gateway. Built for protecting IP-connected devices and segments where you need telemetry out without exposing the source network to anything coming back.",
      "Commonly deployed in front of CCTV estates, industrial sensors, and monitoring infrastructure.",
      "Want the datasheet, or shall I connect you with an engineer to talk through fit?",
    ],
    replies: [
      { label: "Talk to an engineer", next: "capture_intro", tag: "product:BSG" },
      { label: "Other products", next: "products" },
      { label: "How it works", next: "technical" },
    ],
  },

  p_urp: {
    id: "p_urp",
    messages: [
      "**TFG-1URP** — rack-mounted unidirectional replication platform. Designed for higher-throughput environments where you're moving substantial data out of a protected zone continuously.",
      "Typical fits: SCADA historians, data centre egress, large-scale log and telemetry replication.",
      "Shall I have an engineer scope throughput and protocol support for your environment?",
    ],
    replies: [
      { label: "Yes, connect me", next: "capture_intro", tag: "product:1URP" },
      { label: "Other products", next: "products" },
      { label: "How it works", next: "technical" },
    ],
  },

  p_121: {
    id: "p_121",
    messages: [
      "**TFG-121** — point-to-point unidirectional gateway. The tightest deployment footprint of the range, for isolating a specific critical asset or link.",
      "Often used for single-PLC protection, isolated engineering workstations, and dedicated one-way links between defined endpoints.",
      "Want an engineer to confirm it suits your topology?",
    ],
    replies: [
      { label: "Yes, connect me", next: "capture_intro", tag: "product:121" },
      { label: "Other products", next: "products" },
      { label: "How it works", next: "technical" },
    ],
  },

  p_help: {
    id: "p_help",
    messages: [
      "No problem — the right unit depends mostly on throughput, protocols, and how many segments you're isolating.",
      "Rather than guess, our engineers can size it against your actual topology. It's a short conversation and there's no obligation.",
    ],
    replies: [
      { label: "Sounds good", next: "capture_intro", tag: "product:sizing" },
      { label: "Tell me about use cases", next: "usecases" },
    ],
  },

  /* ---------- use cases ---------- */

  usecases: {
    id: "usecases",
    messages: ["Which environment are you protecting?"],
    replies: [
      { label: "OT / ICS / SCADA", next: "u_ot", tag: "sector:OT" },
      { label: "CCTV / surveillance", next: "u_cctv", tag: "sector:CCTV" },
      { label: "Air-gapped network", next: "u_airgap", tag: "sector:air-gap" },
      { label: "Something else", next: "u_other", tag: "sector:other" },
    ],
  },

  u_ot: {
    id: "u_ot",
    messages: [
      "OT is where diodes earn their keep. You need process data flowing to your IT side for analytics and compliance — but nothing must ever reach the control network.",
      "Because our gateway enforces this in hardware, there's no firewall rule to misconfigure and no software vulnerability to exploit. The return path physically doesn't exist.",
      "We're deployed across energy, water treatment, pharmaceutical manufacturing, and transportation.",
    ],
    replies: [
      { label: "Discuss my environment", next: "capture_intro", tag: "sector:OT" },
      { label: "Which product fits?", next: "products" },
    ],
  },

  u_cctv: {
    id: "u_cctv",
    messages: [
      "IP cameras are a well-known soft entry point — often unpatched, widely deployed, and network-connected by definition.",
      "Placing a diode between the camera estate and your recording infrastructure means video flows out while the camera network stays unreachable from outside. Compromising a camera gets an attacker nowhere.",
    ],
    replies: [
      { label: "Discuss my deployment", next: "capture_intro", tag: "sector:CCTV" },
      { label: "Which product fits?", next: "products" },
    ],
  },

  u_airgap: {
    id: "u_airgap",
    messages: [
      "The practical problem with air gaps is that they're rarely absolute — patches, logs, and updates still need to cross, and that's usually where the gap quietly becomes a bridge.",
      "A hardware diode lets you move data across in one direction with the isolation guarantee intact. Common applications: secure patch distribution, one-way log export, and file transfer into or out of classified segments.",
    ],
    replies: [
      { label: "Discuss my requirement", next: "capture_intro", tag: "sector:air-gap" },
      { label: "Which product fits?", next: "products" },
    ],
  },

  u_other: {
    id: "u_other",
    messages: [
      "We've deployed across defense, government, financial services, healthcare, maritime, and critical manufacturing.",
      "Tell our team about your environment and they'll tell you honestly whether we're a fit.",
    ],
    replies: [{ label: "Continue", next: "capture_intro", tag: "sector:other" }],
  },

  /* ---------- technical ---------- */

  technical: {
    id: "technical",
    messages: ["What would you like to know?"],
    replies: [
      { label: "How does it work?", next: "t_how" },
      { label: "Protocols supported", next: "t_protocols" },
      { label: "Deployment & sizing", next: "t_deploy" },
      { label: "Compliance", next: "t_compliance" },
    ],
  },

  t_how: {
    id: "t_how",
    messages: [
      "The gateway is built on an FPGA that physically implements a one-way path. There is no logical return channel to disable, because the hardware doesn't provide one.",
      "This is the core distinction from a firewall. A firewall decides what to allow and can be misconfigured, bypassed, or exploited. A diode removes the decision entirely — the reverse path doesn't exist to be attacked.",
      "The full technical breakdown is on our Technology page, and our engineers can go deeper on architecture.",
    ],
    replies: [
      { label: "Talk to an engineer", next: "capture_intro", tag: "technical:architecture" },
      { label: "Other questions", next: "technical" },
    ],
  },

  t_protocols: {
    id: "t_protocols",
    messages: [
      "We handle the common industrial and IT protocols — including syslog, Modbus, OPC, file transfer, video streams, and database replication.",
      "Protocol support does vary by model and configuration, so rather than give you a list that might not match your setup, let me get an engineer to confirm against your exact requirements.",
    ],
    replies: [
      { label: "Yes, please", next: "capture_intro", tag: "technical:protocols" },
      { label: "Other questions", next: "technical" },
    ],
  },

  t_deploy: {
    id: "t_deploy",
    messages: [
      "Deployment is inline between the protected segment and the destination network. No agents, no changes to your endpoints.",
      "Sizing depends on throughput, protocol mix, and how many segments you're isolating — which is exactly the conversation our engineers have on a scoping call.",
    ],
    replies: [
      { label: "Schedule that call", next: "capture_intro", tag: "technical:deployment" },
      { label: "Other questions", next: "technical" },
    ],
  },

  t_compliance: {
    id: "t_compliance",
    messages: [
      "Our technology supports segmentation and isolation requirements found across critical infrastructure frameworks — NERC CIP, IEC 62443, and similar regimes.",
      "Compliance claims depend on your specific jurisdiction, sector, and audit scope, so I won't overstate it. Our team can speak to precisely what applies in your case.",
    ],
    replies: [
      { label: "Discuss compliance", next: "capture_intro", tag: "technical:compliance" },
      { label: "Other questions", next: "technical" },
    ],
  },

  /* ---------- demo ---------- */

  demo_intro: {
    id: "demo_intro",
    messages: [
      "Good — fastest way to see it in practice.",
      "Two quick details and our team will arrange it, usually within one business day.",
    ],
    replies: [{ label: "Let's do it", next: "capture_email", tag: "demo-request" }],
  },

  /* ---------- lead capture ---------- */

  capture_intro: {
    id: "capture_intro",
    messages: [
      "I'll get this to the right engineer — two quick questions.",
    ],
    replies: [{ label: "Go ahead", next: "capture_email" }],
  },

  capture_email: {
    id: "capture_email",
    messages: ["What's your work email?"],
    capture: {
      field: "email",
      placeholder: "you@company.com",
      next: "capture_name",
      validate: validateEmail,
    },
  },

  capture_name: {
    id: "capture_name",
    messages: ["And your name?"],
    capture: {
      field: "name",
      placeholder: "Your name",
      next: "capture_requirement",
      validate: validateName,
    },
  },

  capture_requirement: {
    id: "capture_requirement",
    messages: [
      "Anything specific you'd like them to prepare? Optional — skip if you'd rather just talk.",
    ],
    capture: {
      field: "requirement",
      placeholder: "What you're protecting…",
      next: "submitting",
      validate: validateRequirement,
      optional: true,
    },
  },

  submitting: {
    id: "submitting",
    messages: ["Sending that across…"],
    submit: true,
  },

  done: {
    id: "done",
    messages: [
      "Done — that's with our team.",
      "You'll hear from a Terafence engineer within one business day. If it's urgent, reach us directly at **info@terafence.in**.",
      "Anything else while you're here?",
    ],
    replies: [
      { label: "Explore products", next: "products" },
      { label: "Browse use cases", next: "usecases" },
      { label: "That's all, thanks", next: "closed" },
    ],
  },

  error: {
    id: "error",
    messages: [
      "Something went wrong sending that — apologies.",
      "Please email us directly at **info@terafence.in** and we'll pick it up straight away.",
    ],
    replies: [{ label: "Try again", next: "submitting" }],
  },

  closed: {
    id: "closed",
    messages: [
      "Thanks for stopping by. I'll be here in the corner if anything else comes up.",
    ],
    replies: [{ label: "Start over", next: "welcome" }],
  },
};

/* ── keyword routing for typed input ─────────────────────────────── */

const INTENTS: Array<{ patterns: RegExp; node: string }> = [
  { patterns: /\b(demo|trial|poc|proof of concept|evaluate)\b/i, node: "demo_intro" },
  { patterns: /\b(price|pricing|cost|quote|budget|licen[sc]e)\b/i, node: "capture_intro" },
  { patterns: /\b(bsg|basic security gateway)\b/i, node: "p_bsg" },
  { patterns: /\b(1urp|urp|rack)\b/i, node: "p_urp" },
  { patterns: /\b(121|point.to.point)\b/i, node: "p_121" },
  { patterns: /\b(ot|ics|scada|plc|industrial|control system)\b/i, node: "u_ot" },
  { patterns: /\b(cctv|camera|surveillance|video|nvr)\b/i, node: "u_cctv" },
  { patterns: /\b(air.?gap|isolated|classified|patch)\b/i, node: "u_airgap" },
  { patterns: /\b(protocol|modbus|opc|syslog|支持)\b/i, node: "t_protocols" },
  { patterns: /\b(complian|nerc|cip|62443|audit|regulat)\b/i, node: "t_compliance" },
  { patterns: /\b(how does|how it works|architect|fpga|explain)\b/i, node: "t_how" },
  { patterns: /\b(deploy|install|sizing|throughput|bandwidth)\b/i, node: "t_deploy" },
  { patterns: /\b(contact|speak|talk|call|engineer|sales|human)\b/i, node: "capture_intro" },
  { patterns: /\b(product|solution|hardware|device|diode)\b/i, node: "products" },
  { patterns: /\b(use case|application|sector|industry)\b/i, node: "usecases" },
];

/** Route free-text to the closest node. Returns null when nothing matches. */
export function matchIntent(input: string): string | null {
  for (const { patterns, node } of INTENTS) {
    if (patterns.test(input)) return node;
  }
  return null;
}

export const FALLBACK_MESSAGE =
  "I want to make sure you get an accurate answer rather than a guess. Let me point you in the right direction —";

export const FALLBACK_REPLIES: QuickReply[] = [
  { label: "Explore products", next: "products" },
  { label: "Browse use cases", next: "usecases" },
  { label: "Talk to an engineer", next: "capture_intro" },
];
