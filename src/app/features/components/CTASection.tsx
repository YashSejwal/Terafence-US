"use client";

import { motion } from "framer-motion";
import { IconArrowRight, IconShieldLock, IconClock, IconArrowsMaximize, IconDeviceLaptop } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden bg-gradient-to-r from-[#2563EB] to-[#1E40AF] shadow-xl"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center rounded-full border border-[#60A5FA] bg-[#1D4ED8] px-3 py-1 text-sm text-white w-fit mb-6">
                <IconDeviceLaptop size={16} className="mr-2" />
                See It In Action
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl mb-6">
                Ready to protect your critical infrastructure?
              </h2>
              <p className="text-[#BFDBFE] text-lg mb-8 max-w-md leading-relaxed">
                Our security experts will guide you through how Terafence&rsquo;s data diode 
                technology can be tailored to your specific operational requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-[#2563EB] hover:bg-[#F9FAFB] px-6 py-6 rounded-lg font-medium">
                  Schedule a Consultation
                  <IconArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#60A5FA] text-slate-950hover:bg-[#1D4ED8] px-6 py-6 rounded-lg font-medium">
                  Download Technical Whitepaper
                </Button>
              </div>
            </div>
            
            <div className="relative bg-[#1D4ED8] flex items-center justify-center p-8 md:p-12 lg:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
              
              <div className="relative z-10 bg-[#2563EB]/20 backdrop-blur-sm rounded-xl p-6 border border-[#60A5FA]/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#2563EB]/20 backdrop-blur-sm rounded-lg p-5 border border-[#60A5FA]/30 flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-[#EFF6FF]/10 flex items-center justify-center mb-4">
                      <IconShieldLock size={28} className="text-white" />
                    </div>
                    <div className="font-medium text-white mb-2">Zero Risk</div>
                    <div className="text-sm text-[#BFDBFE]">Hardware-enforced protection against cyber threats</div>
                  </div>
                  
                  <div className="bg-[#2563EB]/20 backdrop-blur-sm rounded-lg p-5 border border-[#60A5FA]/30 flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-[#EFF6FF]/10 flex items-center justify-center mb-4">
                      <IconClock size={28} className="text-white" />
                    </div>
                    <div className="font-medium text-white mb-2">Zero Latency</div>
                    <div className="text-sm text-[#BFDBFE]">High-performance real-time data transfer</div>
                  </div>
                  
                  <div className="bg-[#2563EB]/20 backdrop-blur-sm rounded-lg p-5 border border-[#60A5FA]/30 flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-[#EFF6FF]/10 flex items-center justify-center mb-4">
                      <IconArrowsMaximize size={28} className="text-white" />
                    </div>
                    <div className="font-medium text-white mb-2">Zero Config</div>
                    <div className="text-sm text-[#BFDBFE]">Simple deployment with minimal setup required</div>
                  </div>
                  
                  <div className="bg-[#2563EB]/20 backdrop-blur-sm rounded-lg p-5 border border-[#60A5FA]/30 flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-[#EFF6FF]/10 flex items-center justify-center mb-4">
                      <IconDeviceLaptop size={28} className="text-white" />
                    </div>
                    <div className="font-medium text-white mb-2">Zero Compromise</div>
                    <div className="text-sm text-[#BFDBFE]">Security without sacrificing operational efficiency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}