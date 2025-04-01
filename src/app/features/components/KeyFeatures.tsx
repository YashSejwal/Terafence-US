"use client";

import { motion } from "framer-motion";
import { IconShieldLock, IconArrowsDiagonal, IconClock, IconDeviceAnalytics, IconPuzzle, IconSettings } from "@tabler/icons-react";

const features = [
  {
    icon: <IconShieldLock className="h-10 w-10 text-[#2563EB]" />,
    title: "Hardware-Enforced Security",
    description: "Physical one-way data transfer that ensures absolute protection against malware, ransomware, and external cyber threats."
  },
  {
    icon: <IconArrowsDiagonal className="h-10 w-10 text-[#2563EB]" />,
    title: "Non-Routable Protocol",
    description: "Proprietary data transmission protocol that eliminates IP-based attack vectors and prevents network exposure."
  },
  {
    icon: <IconClock className="h-10 w-10 text-[#2563EB]" />,
    title: "Zero Latency",
    description: "High-performance data transfer with minimal latency, supporting real-time operations without compromising security."
  },
  {
    icon: <IconDeviceAnalytics className="h-10 w-10 text-[#2563EB]" />,
    title: "Minimal Attack Surface",
    description: "Purpose-built hardware with optimized firmware that dramatically reduces potential vulnerabilities."
  },
  {
    icon: <IconPuzzle className="h-10 w-10 text-[#2563EB]" />,
    title: "Seamless Integration",
    description: "Compatible with existing OT/IT systems, supporting multiple industrial protocols and legacy infrastructure."
  },
  {
    icon: <IconSettings className="h-10 w-10 text-[#2563EB]" />,
    title: "Regulatory Compliance",
    description: "Meets NERC CIP, IEC 62443, NIST 800-82, and other critical infrastructure protection standards and regulations."
  }
];

export function KeyFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827]">
            Unparalleled Security Features
          </h2>
          <p className="mt-4 text-[#4B5563] text-lg">
            Terafence&lsquo;s revolutionary data diode technology combines uncompromising security with 
            exceptional performance to safeguard critical infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col p-8 bg-white rounded-xl shadow-sm border border-[#E5E7EB] hover:shadow-md hover:border-[#DBEAFE] transition-all duration-300"
            >
              <div className="mb-5 rounded-xl w-16 h-16 flex items-center justify-center bg-[#EEF2FF]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mb-3">{feature.title}</h3>
              <p className="text-[#4B5563] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#E5E7EB]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-6 md:p-8"
          >
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl font-semibold text-[#111827] mb-2">Ready to see these features in action?</h3>
              <p className="text-[#4B5563]">Experience how Terafence can transform your security posture.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg font-medium transition-colors">
                Schedule a Demo
              </button>
              <button className="px-6 py-3 border border-[#D1D5DB] text-[#374151] hover:bg-[#F3F4F6] rounded-lg font-medium transition-colors">
                View Technical Specifications
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}