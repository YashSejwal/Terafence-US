"use client";

import { motion } from "framer-motion";
import { IconCheck, IconX, IconHelpCircle } from "@tabler/icons-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const comparisonItems = [
  {
    feature: "Hardware-Enforced Security",
    description: "Physical separation ensuring true one-way data flow that cannot be bypassed",
    terafence: true,
    softwareDiode: false,
    firewall: false,
    airbap: true,
  },
  {
    feature: "True One-Way Data Transfer",
    description: "Physically impossible for data to travel in the reverse direction",
    terafence: true,
    softwareDiode: false,
    firewall: false,
    airbap: true,
  },
  {
    feature: "Support for Multiple Protocols",
    description: "Ability to handle various industrial and IT protocols seamlessly",
    terafence: true,
    softwareDiode: true,
    firewall: true,
    airbap: false,
  },
  {
    feature: "Minimal Latency",
    description: "Data transfer with sub-millisecond processing time",
    terafence: true,
    softwareDiode: false,
    firewall: false,
    airbap: false,
  },
  {
    feature: "Non-Routable Protocol",
    description: "Custom protocol that cannot be exploited using traditional networking attacks",
    terafence: true,
    softwareDiode: false,
    firewall: false,
    airbap: true,
  },
  {
    feature: "Easy Integration",
    description: "Simple deployment with minimal changes to existing infrastructure",
    terafence: true,
    softwareDiode: true,
    firewall: true,
    airbap: false,
  },
  {
    feature: "Zero Attack Surface",
    description: "No exploitable interfaces or vulnerabilities exposed to threat actors",
    terafence: true,
    softwareDiode: false,
    firewall: false,
    airbap: true,
  },
  {
    feature: "Operational Visibility",
    description: "Maintains data flow necessary for monitoring and analytics",
    terafence: true,
    softwareDiode: true,
    firewall: true,
    airbap: false,
  },
];

export function ComparisonChart() {
  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827]">
            Comparison with Alternative Solutions
          </h2>
          <p className="mt-4 text-[#4B5563] text-lg">
            See how Terafence Data Diode technology delivers superior security without compromising performance.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <div className="min-w-[768px]">
            <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                    <th className="py-5 px-6 text-left text-[#111827] font-semibold">Feature</th>
                    <th className="py-5 px-6 text-center w-32">
                      <div className="flex flex-col items-center">
                        <span className="text-[#2563EB] font-semibold">Terafence</span>
                        <span className="text-xs text-[#6B7280] mt-1">Data Diode</span>
                      </div>
                    </th>
                    <th className="py-5 px-6 text-center w-32">
                      <div className="flex flex-col items-center">
                        <span className="text-[#374151] font-semibold">Software</span>
                        <span className="text-xs text-[#6B7280] mt-1">Data Diode</span>
                      </div>
                    </th>
                    <th className="py-5 px-6 text-center w-32">
                      <div className="flex flex-col items-center">
                        <span className="text-[#374151] font-semibold">Next-Gen</span>
                        <span className="text-xs text-[#6B7280] mt-1">Firewall</span>
                      </div>
                    </th>
                    <th className="py-5 px-6 text-center w-32">
                      <div className="flex flex-col items-center">
                        <span className="text-[#374151] font-semibold">Air-Gapped</span>
                        <span className="text-xs text-[#6B7280] mt-1">Network</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonItems.map((item, index) => (
                    <motion.tr 
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`border-b border-[#E5E7EB] ${index % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}`}
                    >
                      <td className="py-5 px-6">
                        <TooltipProvider>
                          <Tooltip delayDuration={300}>
                            <TooltipTrigger asChild>
                              <div className="flex items-center cursor-help">
                                <span className="text-[#111827] font-medium">{item.feature}</span>
                                <IconHelpCircle size={16} className="ml-2 text-[#9CA3AF]" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs bg-white border border-[#E5E7EB] p-3 rounded-lg shadow-lg text-[#4B5563]">
                              {item.description}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex justify-center">
                          {item.terafence ? (
                            <div className="rounded-full bg-[#DBEAFE] p-1.5">
                              <IconCheck className="h-5 w-5 text-[#2563EB]" />
                            </div>
                          ) : (
                            <div className="rounded-full bg-[#F3F4F6] p-1.5">
                              <IconX className="h-5 w-5 text-[#9CA3AF]" />
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex justify-center">
                          {item.softwareDiode ? (
                            <div className="rounded-full bg-[#F3F4F6] p-1.5">
                              <IconCheck className="h-5 w-5 text-[#4B5563]" />
                            </div>
                          ) : (
                            <div className="rounded-full bg-[#F3F4F6] p-1.5">
                              <IconX className="h-5 w-5 text-[#9CA3AF]" />
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex justify-center">
                          {item.firewall ? (
                            <div className="rounded-full bg-[#F3F4F6] p-1.5">
                              <IconCheck className="h-5 w-5 text-[#4B5563]" />
                            </div>
                          ) : (
                            <div className="rounded-full bg-[#F3F4F6] p-1.5">
                              <IconX className="h-5 w-5 text-[#9CA3AF]" />
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex justify-center">
                          {item.airbap ? (
                            <div className="rounded-full bg-[#F3F4F6] p-1.5">
                              <IconCheck className="h-5 w-5 text-[#4B5563]" />
                            </div>
                          ) : (
                            <div className="rounded-full bg-[#F3F4F6] p-1.5">
                              <IconX className="h-5 w-5 text-[#9CA3AF]" />
                            </div>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-center"
        >
          <p className="text-[#6B7280] text-sm">
            * Based on analysis of publicly available specifications and certified independent testing
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-8 p-8 bg-white rounded-xl border border-[#E5E7EB] shadow-sm"
        >
          <div>
            <h3 className="text-xl font-semibold text-[#111827] mb-2">Industry-Leading Security</h3>
            <p className="text-[#4B5563]">
              Compare Terafence&rsquo;s data diode technology with alternative solutions in a detailed technical analysis.
            </p>
          </div>
          <button className="whitespace-nowrap px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg font-medium transition-colors">
            Download Full Comparison
          </button>
        </motion.div>
      </div>
    </section>
  );
}