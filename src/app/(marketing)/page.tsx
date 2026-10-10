"use client";

/**
 * Terafence USA — homepage
 *
 * Structure, layout and interactions mirror terafence.com (Israel),
 * rebranded to the US mark:
 *   olive  #c4c167 → navy  #293A92
 *   dark   #152533 → ink   #0B1230
 *   grey   #d8d9d7 → wash  #F5F6FD
 *   accents            → red   #F21A32
 *
 * Nav and footer come from (marketing)/layout.tsx — do NOT add them here.
 */

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── device icons over the city ─────────────────────────────────
   Positions are the Israel px values expressed against a
   1110 × 760 design box, so the whole cluster scales cleanly.
   line = connector height (%), skew = its lean (deg).
   ─────────────────────────────────────────────────────────── */
const DEVICES = [
  { n: 1,  top: 46.6, left: 11.8, s: 1.15, line: 20.5, skew: 9.0,  lx: 50 },
  { n: 2,  top: 34.2, left: 19.4, s: 1.15, line: 27.7, skew: 8.1,  lx: 50 },
  { n: 3,  top: 50.3, left: 34.8, s: 1.75, line: 12.2, skew: 5.1,  lx: 50 },
  { n: 4,  top: 68.9, left: 38.3, s: 1.75, line: 7.0,  skew: 2.1,  lx: 50 },
  { n: 5,  top: 11.6, left: 41.5, s: 1.60, line: 18.3, skew: 3.5,  lx: 40 },
  { n: 6,  top: 54.7, left: 48.6, s: 1.15, line: 18.3, skew: 3.5,  lx: 50 },
  { n: 7,  top: 14.6, left: 53.3, s: 1.15, line: 17.9, skew: 1.5,  lx: 50 },
  { n: 8,  top: 74.6, left: 54.1, s: 1.35, line: 10.4, skew: 3.5,  lx: 50 },
  { n: 9,  top: 46.9, left: 58.7, s: 1.60, line: 19.1, skew: -0.5, lx: 50 },
  { n: 10, top: 25.8, left: 61.8, s: 1.45, line: 2.9,  skew: -0.5, lx: 60 },
  { n: 11, top: 45.8, left: 74.1, s: 1.20, line: 36.6, skew: -3.2, lx: 50 },
  { n: 12, top: 23.5, left: 75.7, s: 1.20, line: 9.1,  skew: -1.2, lx: 50 },
  { n: 13, top: 36.4, left: 80.4, s: 1.45, line: 14.0, skew: -4.2, lx: 50 },
  { n: 14, top: 57.2, left: 90.0, s: 1.55, line: 14.7, skew: -6.2, lx: 40 },
  { n: 15, top: 25.7, left: 95.4, s: 1.55, line: 17.2, skew: -6.5, lx: 60 },
  { n: 16, top: 40.6, left: 97.5, s: 1.20, line: 13.5, skew: -2.5, lx: 40 },
];

/** city2.png is 981 × 859 — the icon coordinates above are % of that box. */
const CITY_W = 981;
const CITY_H = 859;
const ICON_W = 6.1;              // 60px / 981
const ICON_H_PCT = 5.2;          // ~45px / 859

const SECTORS = [
  { n: 1, title: ["Smart", "buildings"], body: "Offering an ingenious new way to keep cyber threats away from residential and commercial smart building IoT components such as CCTVs and critical building assets such as air-conditioning systems and elevators." },
  { n: 2, title: ["Factories"], body: "Protecting production lines, plant floor networks and industrial automation while process data continues flowing out to IT, analytics and compliance systems." },
  { n: 3, title: ["Business", "facilities"], body: "Securing corporate infrastructure — access control, environmental systems, building automation and campus networks — without disrupting operations." },
  { n: 4, title: ["Government", "& Defense"], body: "Hardware isolation for classified networks, defense installations and sovereign infrastructure where a software boundary is not sufficient assurance." },
  { n: 5, title: ["Healthcare", "& Hospitals"], body: "Shielding connected medical devices, imaging systems and clinical networks from network-borne attack without interfering with patient care workflows." },
  { n: 6, title: ["Hotels &", "Transportation"], body: "Protecting guest-facing systems, rail signalling, airport and port infrastructure where availability and passenger safety are inseparable." },
  { n: 7, title: ["Industrial", "Critical", "Systems"], body: "Completely isolating the ICS/OT environment from the outside world while maintaining the data from process sensors/actuators/PLCs to the outside world (IT/SOC/Command Center)." },
];

/* ── scroll reveal (mirrors AOS fade-up) ──────────────────────── */
function Fade({
  children, delay = 0, className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, margin: "-120px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 34 }}
      animate={seen ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.1, delay, ease: [0.215, 0.61, 0.355, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ══ page ═════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <Hero />
      <IntroBand />
      <SameDevice />
      <Impenetrable />
      <Sectors />
      <GroundUp />
      <ClosingBand />
    </>
  );
}

/* ── hero ─────────────────────────────────────────────────────── */

function Hero() {
  return (
    <header className="relative overflow-hidden bg-[#0B1230]">
      <div className="relative min-h-[70vh] w-full sm:min-h-[44vw]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* legibility scrim — left-weighted so the film stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1230]/85 via-[#0B1230]/45 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <h1 className="font-semibold uppercase text-white [font-size:clamp(2.1rem,4.3vw,5.5rem)] [line-height:1.05]">
                Imagine<br />Uninterrupted<br />
                <span className="text-[#F21A32]">Isolation</span>
              </h1>
              <p className="mt-5 font-normal text-white/90 [font-size:clamp(1rem,1.563vw,1.875rem)] [line-height:1.25]">
                of every connected OT &amp; IoT device on the planet
              </p>
              <Link
                href="/technology"
                className="mt-9 inline-block rounded-[3px] bg-[#F21A32] px-9 py-4 text-[14px] font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-[#0B1230]"
              >
                See the Technology
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ── intro band (Israel's olive strip) ────────────────────────── */

function IntroBand() {
  return (
    <section className="bg-[#293A92] py-[70px] pb-[55px] text-white">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <Fade delay={0.6}>
          <p className="[font-size:clamp(1.15rem,1.9vw,1.8rem)] [line-height:1.35]">
            Our patent-protected solutions physically isolate OT and IoT devices
            while maintaining data flow and control uninterrupted.
          </p>
        </Fade>
      </div>
    </section>
  );
}

/* ── same device + city ───────────────────────────────────────── */

function SameDevice() {
  return (
    <section className="bg-[#F5F6FD] py-[70px] pb-[55px] text-[#464646]">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <Fade delay={0.15}>
            <h2 className="font-normal uppercase text-[#293A92] [font-size:clamp(2rem,3.4vw,3.9rem)] [line-height:1.12]">
              Same<br />Device,
            </h2>
            <p className="mt-3 font-light uppercase text-[#F21A32] [font-size:clamp(1.4rem,2.5vw,2.5rem)] [line-height:1.2]">
              Only isolated<br />by hardware.
            </p>
          </Fade>

          <Fade delay={0.65}>
            {/* the mark, drawn — white ">" + red "<" */}
            <svg viewBox="0 0 420 260" className="w-full" aria-label="Unidirectional flow">
              <path
                d="M120 28 L212 122 a12 12 0 0 1 0 16 L120 232 a26 26 0 0 1-38-36 L156 130 L82 64 a26 26 0 0 1 38-36 Z"
                fill="#FFFFFF"
              />
              <path
                d="M300 28 L208 122 a12 12 0 0 0 0 16 L300 232 a26 26 0 0 0 38-36 L264 130 L338 64 a26 26 0 0 0-38-36 Z"
                fill="#F21A32"
              />
            </svg>
          </Fade>
        </div>

        {/* city with floating devices */}
        <Fade className="mt-10">
          <div className="relative mx-auto w-full" style={{ aspectRatio: `${CITY_W} / ${CITY_H}` }}>
            <Image
              src="/images/home/city.png"
              alt="Connected city infrastructure"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 1110px"
              priority
            />

            {/* connector lines — siblings, measured against the container */}
            {DEVICES.map((d, i) => (
              <motion.span
                key={`l-${d.n}`}
                aria-hidden
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 0.85, scaleY: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.3 + 0.2, ease: "easeOut" }}
                className="absolute z-[1] w-px bg-white"
                style={{
                  top: `${d.top + ICON_H_PCT * d.s * 0.79}%`,
                  left: `${d.left + (ICON_W * d.s * d.lx) / 100}%`,
                  height: `${d.line}%`,
                  transform: `skew(${d.skew}deg)`,
                  transformOrigin: "top center",
                }}
              />
            ))}

            {DEVICES.map((d, i) => (
              <motion.div
                key={d.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1, delay: i * 0.3, ease: "easeOut" }}
                className="absolute z-[2]"
                style={{
                  top: `${d.top}%`,
                  left: `${d.left}%`,
                  width: `${ICON_W}%`,
                  transform: `scale(${d.s})`,
                  transformOrigin: "center top",
                }}
              >
                <Image
                  src={`/images/home/devices/${d.n}.png`}
                  alt=""
                  width={60}
                  height={60}
                  className="h-auto w-full"
                />
              </motion.div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ── impenetrable protection (dark band) ──────────────────────── */

function Impenetrable() {
  return (
    <section className="bg-[#0B1230] py-[100px]">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="grid gap-8 md:grid-cols-12">
          <Fade delay={0.1} className="md:col-span-4">
            <h3 className="font-normal uppercase text-[#F21A32] [font-size:clamp(1.7rem,2.6vw,2.5rem)] [line-height:1.38]">
              Impenetrable<br />protection<br />of IoT devices
            </h3>
          </Fade>

          <Fade delay={0.4} className="md:col-span-8">
            <div className="mt-[18px] border-l-[7px] border-[#F21A32] py-[25px] pl-[42px] pr-4 font-light text-[#D0D3D6] [font-size:clamp(0.95rem,1.1vw,1.1rem)] [line-height:1.65]">
              <p>
                Over the past decade, millions of susceptible IoT and IIoT
                products were compromised due to their inadequate protection
                from attacks. Terafence offers a novel hack-proof way to protect
                smart buildings, critical assets and cyber-physical systems from
                all types of cyber threats.
              </p>
            </div>
          </Fade>
        </div>

        <div className="grid md:grid-cols-12">
          <div className="md:col-span-4" />
          <Fade delay={0.3} className="md:col-span-8">
            <div className="pt-10 text-center md:pl-[80px] md:pt-[80px] md:text-left">
              <Link
                href="/solutions"
                className="inline-block rounded-[3px] bg-[#293A92] px-10 py-5 text-[15px] font-medium uppercase tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-[#0B1230] md:px-20"
              >
                Learn More
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* ── sectors — flip cards ─────────────────────────────────────── */

function Sectors() {
  return (
    <section className="bg-[#F5F6FD] py-[70px] pb-[55px]">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="grid gap-8 md:grid-cols-12">
          <Fade delay={0.1} className="md:col-span-4">
            <h3 className="font-normal uppercase text-[#464646] [font-size:clamp(1.7rem,2.6vw,2.5rem)] [line-height:1.38]">
              Everything<br />connected<br />can be hacked,
            </h3>
          </Fade>

          <Fade delay={0.6} className="md:col-span-8">
            <div className="border-l-[7px] border-[#F21A32] pl-8">
              <h2 className="font-normal uppercase text-[#293A92] [font-size:clamp(1.9rem,3.4vw,3.9rem)] [line-height:1.12]">
                IoT<br />Products<br />make it easy.
              </h2>
              <p className="mt-5 text-[#5A5F6B] [font-size:clamp(0.95rem,1.05vw,1.05rem)] [line-height:1.65]">
                As the race for monitoring and surveillance continues, the
                attack surface grows with every deployment. Terafence offers
                future-proof protection with no security-risk tradeoff for
                countless industries and applications.
              </p>
            </div>
          </Fade>
        </div>

        <div className="pt-[80px]">
          {[SECTORS.slice(0, 3), SECTORS.slice(3)].map((row, r) => (
            <div key={r} className="flex flex-wrap items-start justify-center">
              {row.map((s, i) => (
                <Fade key={s.n} delay={0.15 * (r * 3 + i + 1)}>
                  <div className="group m-[5px] h-[150px] w-[150px] [perspective:1000px] sm:m-[20px] sm:h-[237px] sm:w-[237px]">
                    <div className="relative h-full w-full rounded-full shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      {/* front */}
                      <div className="absolute inset-0 z-[2] overflow-hidden rounded-full [backface-visibility:hidden]">
                        <Image
                          src={`/images/home/sectors/${s.n}.png`}
                          alt={s.title.join(" ")}
                          fill
                          className="object-cover"
                          sizes="237px"
                        />
                        <span className="absolute inset-0 bg-[#293A92]/55" />
                        <span className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center uppercase text-white [font-size:15px] [line-height:20px] sm:[font-size:23px] sm:[line-height:33px]">
                          {s.title.map((t, k) => <span key={k} className="block">{t}</span>)}
                        </span>
                      </div>

                      {/* back */}
                      <div className="absolute inset-0 z-[1] rounded-full bg-[#293A92] text-left text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <p className="absolute left-1/2 top-1/2 w-[77%] -translate-x-1/2 -translate-y-1/2 border-l border-white pl-1 [font-size:8px] [line-height:11px] sm:border-l-2 sm:pl-[6px] sm:[font-size:13px] sm:[line-height:16px]">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── securing OT ──────────────────────────────────────────────── */

function GroundUp() {
  return (
    <section className="relative overflow-hidden bg-[#0B1230] py-[100px]">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-[1140px] px-5 sm:px-8">
        <Fade delay={0.1}>
          <div className="md:w-2/3">
            <h2 className="font-normal uppercase text-white [font-size:clamp(2rem,3.4vw,3.9rem)] [line-height:1.12]">
              Securing OT
            </h2>
            <h3 className="mt-2 font-light uppercase text-[#F21A32] [font-size:clamp(1.3rem,2.2vw,2.2rem)] [line-height:1.2]">
              From the ground up
            </h3>
            <p className="mt-7 font-light text-white/85 [font-size:clamp(0.95rem,1.15vw,1.15rem)] [line-height:1.7]">
              Terafence USA Inc. comprises seasoned professionals sharing a
              common goal — to make OT and IoT safe and secure from malicious
              attacks. Our proprietary TFence&trade; firmware/microchip solution
              for cyber-secure connectivity ensures total protection from
              tampering, enabling data outflow while completely blocking entry.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ── closing band (form parked until launch) ───────────────────── */

function ClosingBand() {
  return (
    <section className="bg-[#E6E8F2] py-[80px]">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F21A32]">
              Terafence USA Inc.
            </p>
            <h4 className="mt-3 font-normal uppercase text-[#1A2140] [font-size:clamp(1.6rem,2.6vw,2.4rem)] [line-height:1.2]">
              Talk to an engineer<br />about your environment
            </h4>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#4A5068]">
              Every deployment starts with topology, throughput and protocols.
              Our team will tell you honestly whether a hardware diode is the
              right fit — and what it would take to deploy one.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="mailto:info@terafence.us"
                className="inline-flex items-center justify-center rounded-[3px] bg-[#293A92] px-9 py-4 text-[14px] font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-[#F21A32]"
              >
                info@terafence.us
              </a>
              <a
                href="tel:+17325015974"
                className="inline-flex items-center justify-center rounded-[3px] border border-[#293A92] px-9 py-4 text-[14px] font-semibold uppercase tracking-wide text-[#293A92] transition-colors duration-200 hover:bg-[#293A92] hover:text-white"
              >
                +1 (732) 501-5974
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="border-l-[5px] border-[#F21A32] pl-6">
              <h5 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#1A2140]">
                USA Office
              </h5>
              <p className="mt-3 text-[15px] leading-relaxed text-[#4A5068]">
                12788 Royal Oaks Lane<br />
                Farmers Branch, TX 75234
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
