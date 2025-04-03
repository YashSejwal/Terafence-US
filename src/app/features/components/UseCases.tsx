"use client";

import { motion } from "framer-motion";
import { IconBolt, IconBuildingFactory, IconGauge, IconGlobe, IconMicroscope, IconShieldLock } from "@tabler/icons-react";

const useCases = [
  {
    icon: <IconBolt className="h-8 w-8 text-[#2563EB]" />,
    title: "Energy & Utilities",
    description: "Secure SCADA systems and operational networks in power generation, transmission, and distribution facilities while allowing safe data flow to business intelligence systems.",
    examples: ["Power grid monitoring", "Smart meter data collection", "Remote substation management"],
    bgGradient: "from-[#DBEAFE] to-[#EFF6FF]"
  },
  {
    icon: <IconBuildingFactory className="h-8 w-8 text-[#2563EB]" />,
    title: "Manufacturing",
    description: "Protect industrial control systems while enabling production data analytics and remote monitoring capabilities with zero risk of cyber intrusion.",
    examples: ["Production line monitoring", "Quality control systems", "Supply chain integration"],
    bgGradient: "from-[#E0E7FF] to-[#EEF2FF]"
  },
  {
    icon: <IconGauge className="h-8 w-8 text-[#2563EB]" />,
    title: "Oil & Gas",
    description: "Maintain security of upstream, midstream, and downstream operations while enabling operational data visibility across distributed infrastructure.",
    examples: ["Pipeline monitoring", "Wellhead automation", "Refinery control systems"],
    bgGradient: "from-[#DBEAFE] to-[#EFF6FF]"
  },
  {
    icon: <IconGlobe className="h-8 w-8 text-[#2563EB]" />,
    title: "Defense & Government",
    description: "Ensure classified networks remain isolated while allowing controlled information sharing between different security domains and clearance levels.",
    examples: ["Cross-domain solutions", "Intelligence data transfer", "Secure command & control"],
    bgGradient: "from-[#E0E7FF] to-[#EEF2FF]"
  },
  {
    icon: <IconMicroscope className="h-8 w-8 text-[#2563EB]" />,
    title: "Healthcare & Research",
    description: "Protect sensitive medical systems and research networks while enabling secure data sharing with external partners and regulatory bodies.",
    examples: ["Medical device security", "Research data protection", "Regulatory compliance"],
    bgGradient: "from-[#DBEAFE] to-[#EFF6FF]"
  },
  {
    icon: <IconShieldLock className="h-8 w-8 text-[#2563EB]" />,
    title: "Financial Services",
    description: "Safeguard critical financial infrastructure from cyber threats while maintaining reliable data flow for transaction processing and regulatory reporting.",
    examples: ["Trading systems protection", "Payment processing security", "Core banking infrastructure"],
    bgGradient: "from-[#E0E7FF] to-[#EEF2FF]"
  }
];

export function UseCases() {
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
            Industry Use Cases
          </h2>
          <p className="mt-4 text-[#4B5563] text-lg">
            Terafence&lsquo;s data diode technology provides critical protection across various industries 
            with unique security challenges and regulatory requirements.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className={`h-full rounded-xl bg-gradient-to-br ${useCase.bgGradient} p-[1px] transition-all duration-300 group-hover:shadow-md`}>
                <div className="h-full rounded-[11px] bg-white p-8 flex flex-col">
                  <div className="flex items-start mb-5">
                    <div className="rounded-xl p-3 bg-[#F5F7FA] mr-4">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#111827] pt-2">{useCase.title}</h3>
                  </div>
                  
                  <p className="text-[#4B5563] mb-6 flex-grow">{useCase.description}</p>
                  
                  <div className="border-t border-[#E5E7EB] pt-5 mt-auto">
                    <h4 className="text-sm font-semibold text-[#111827] mb-3">Key Applications:</h4>
                    <ul className="space-y-2">
                      {useCase.examples.map((example, idx) => (
                        <li key={idx} className="text-[#4B5563] text-sm flex items-start">
                          <span className="mr-2 text-[#2563EB]">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}