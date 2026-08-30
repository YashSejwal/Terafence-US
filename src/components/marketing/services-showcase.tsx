"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Cloud,
  Monitor,
  Network,
  Shield,
  Link2,
  ArrowRight,
  ChevronRight,
  Zap,
} from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  highlights: string[];
  stat: { value: string; label: string };
  accentFrom: string;
  accentTo: string;
  bgLight: string;
  textAccent: string;
}

const services: ServiceItem[] = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Advisory & Consulting",
    slug: "/services/advisory",
    tagline: "Strategic Insight. Tangible Outcomes.",
    description:
      "Navigate complex IT landscapes with confidence — from data migration and workplace experience consulting to technology transformation and FinOps cost optimization.",
    highlights: [
      "Data Migration",
      "Workplace Experience",
      "Technology Transformation",
      "Cost Optimization",
    ],
    stat: { value: "200+", label: "Enterprises Advised" },
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
    bgLight: "bg-emerald-500/10",
    textAccent: "text-emerald-400",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Services",
    slug: "/services/cloud",
    tagline: "Scale Without Limits. Migrate Without Risk.",
    description:
      "Multi-cloud migration, infrastructure management, and FinOps optimization across AWS, Azure, and GCP — with security woven into every layer.",
    highlights: [
      "Cloud Migration",
      "IaaS & PaaS",
      "Cloud Security",
      "FinOps & Optimization",
    ],
    stat: { value: "99.99%", label: "Uptime SLA" },
    accentFrom: "from-sky-500",
    accentTo: "to-blue-500",
    bgLight: "bg-sky-500/10",
    textAccent: "text-sky-400",
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "Workplace Services",
    slug: "/services/workplace",
    tagline: "Empower Teams. Elevate Productivity.",
    description:
      "Digital workspace transformation — endpoint management, unified communications, AI-powered service desk, and zero-trust endpoint security for the modern workforce.",
    highlights: [
      "Digital Workspace",
      "UEM & Endpoints",
      "Unified Comms",
      "Service Desk",
    ],
    stat: { value: "40%", label: "Productivity Increase" },
    accentFrom: "from-violet-500",
    accentTo: "to-purple-500",
    bgLight: "bg-violet-500/10",
    textAccent: "text-violet-400",
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: "Network Services",
    slug: "/services/network",
    tagline: "Connect Everything. Secure Every Link.",
    description:
      "Enterprise and tactical network design — campus LAN, SD-WAN, data center fabrics, and military-grade encrypted communications for field operations.",
    highlights: [
      "Campus Networking",
      "SD-WAN & SASE",
      "DC Networking",
      "Tactical Networks",
    ],
    stat: { value: "500+", label: "Sites Deployed" },
    accentFrom: "from-amber-500",
    accentTo: "to-orange-500",
    bgLight: "bg-amber-500/10",
    textAccent: "text-amber-400",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Cybersecurity",
    slug: "/services/cybersecurity",
    tagline: "Defend. Detect. Respond. Recover.",
    description:
      "24/7 SOC operations, hardware data diode solutions, OT/ICS security, penetration testing, and threat intelligence — protecting India's most critical environments.",
    highlights: [
      "SOC Operations",
      "Data Diodes",
      "OT/ICS Security",
      "Threat Intelligence",
    ],
    stat: { value: "24/7", label: "SOC Operations" },
    accentFrom: "from-rose-500",
    accentTo: "to-red-500",
    bgLight: "bg-rose-500/10",
    textAccent: "text-rose-400",
  },
  {
    icon: <Link2 className="h-6 w-6" />,
    title: "Service Integration",
    slug: "/services/integration",
    tagline: "Unify. Orchestrate. Deliver.",
    description:
      "SIAM framework implementation, multi-vendor orchestration, unified ITSM processes, and automation-first service delivery across all IT towers.",
    highlights: [
      "SIAM Framework",
      "Process Integration",
      "Vendor Management",
      "Automation Center",
    ],
    stat: { value: "50+", label: "Vendors Integrated" },
    accentFrom: "from-teal-500",
    accentTo: "to-cyan-500",
    bgLight: "bg-teal-500/10",
    textAccent: "text-teal-400",
  },
];

const ServicesShowcase = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = services[activeIdx];

  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('/images/topo.svg')] opacity-[0.03]" />

      {/* Accent orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-5">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-gray-300">
              COMPREHENSIVE IT & SECURITY SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-5 leading-tight">
            More Than Security.{" "}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400">
              Complete IT Transformation.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From strategic advisory and cloud migration to network infrastructure
            and 24/7 cybersecurity operations — Terafence delivers end-to-end IT
            services for mission-critical enterprises.
          </p>
        </motion.div>

        {/* ── Tab pills ── */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {services.map((svc, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                  idx === activeIdx
                    ? `bg-gradient-to-r ${svc.accentFrom} ${svc.accentTo} text-white border-transparent shadow-lg scale-105`
                    : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {svc.icon}
                <span className="hidden sm:inline">{svc.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Active service detail ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
              {/* Left — main card */}
              <div className="lg:col-span-3 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${active.accentFrom} ${active.accentTo} text-white`}
                  >
                    {active.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {active.title}
                    </h3>
                    <p className={`text-sm font-medium ${active.textAccent}`}>
                      {active.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                  {active.description}
                </p>

                {/* Highlights chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {active.highlights.map((h, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${active.bgLight} ${active.textAccent} border border-white/5`}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link href={active.slug}>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${active.accentFrom} ${active.accentTo} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      Explore {active.title}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Right — stat + quick nav */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {/* Stat card */}
                <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center flex-1">
                  <div
                    className={`text-5xl sm:text-6xl font-bold bg-gradient-to-r ${active.accentFrom} ${active.accentTo} bg-clip-text text-transparent pb-1`}
                  >
                    {active.stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-2 font-medium">
                    {active.stat.label}
                  </div>
                </div>

                {/* Quick links to all services */}
                <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    All Services
                  </h4>
                  <div className="space-y-1.5">
                    {services.map((svc, idx) => (
                      <Link
                        key={idx}
                        href={svc.slug}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group ${
                          idx === activeIdx
                            ? `${svc.bgLight} ${svc.textAccent} font-semibold`
                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {svc.icon}
                          {svc.title}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesShowcase;