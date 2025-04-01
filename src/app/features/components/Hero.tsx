/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { IconShieldLock, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#F5F7FA]">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid-pattern.svg')] opacity-[0.15]" />
      
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center rounded-full border border-[#E1E8F0] bg-[#EBF2FC] px-4 py-1.5 text-sm text-[#2563EB] font-medium w-fit mb-6">
              <IconShieldLock size={16} className="mr-2" />
              Enterprise-Grade Cybersecurity
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827] leading-[1.1]">
              Secure Your <span className="text-[#2563EB]">Critical Infrastructure</span>
            </h1>
            <p className="mt-6 text-[#4B5563] text-lg sm:text-xl max-w-xl leading-relaxed">
              Terafence&lsquo;s revolutionary data diode technology delivers uncompromising protection through hardware-enforced one-way data transfer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 py-7 rounded-lg text-base font-medium">
                Request a Demo
                <IconArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-[#D1D5DB] text-[#374151] hover:bg-[#F3F4F6] px-7 py-7 rounded-lg text-base font-medium">
                Download Technical Whitepaper
              </Button>
            </div>
            <div className="mt-10 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img 
                  src="/api/placeholder/32/32" 
                  alt="Avatar" 
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img 
                  src="/api/placeholder/32/32" 
                  alt="Avatar" 
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img 
                  src="/api/placeholder/32/32" 
                  alt="Avatar" 
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <p className="text-sm text-[#6B7280]">
                <span className="font-medium text-[#111827]">500+ organizations</span> trust Terafence
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative h-[450px] rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF]"
          >
            <div className="absolute top-0 left-0 right-0 h-14 bg-white backdrop-blur-md border-b border-[#E5E7EB] flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FCA5A5]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FCD34D]"></div>
                <div className="w-3 h-3 rounded-full bg-[#6EE7B7]"></div>
              </div>
              <div className="mx-auto px-16 py-1.5 rounded-md bg-[#F3F4F6] text-[#4B5563] text-xs font-medium">
                secure.terafence.com
              </div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center p-10 pt-20">
              <div className="relative w-full h-full rounded-xl border border-[#D1D9E6] bg-white shadow-lg overflow-hidden flex flex-col">
                <div className="h-12 bg-[#F9FAFB] border-b border-[#E5E7EB] flex items-center px-4">
                  <div className="h-2 w-16 bg-[#E5E7EB] rounded-full"></div>
                  <div className="ml-auto flex space-x-2">
                    <div className="h-6 w-6 rounded-md bg-[#EEF2FF] flex items-center justify-center">
                      <IconShieldLock size={14} className="text-[#4F46E5]" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-grow p-6 flex items-center justify-center">
                  <div className="relative flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-[#EEF2FF] border border-[#E0E7FF] flex items-center justify-center mb-6">
                      <IconShieldLock size={48} className="text-[#2563EB]" />
                    </div>
                    
                    <div className="relative w-[240px] flex justify-between items-center mb-8">
                      <div className="w-20 h-16 rounded-lg border border-[#E0E7FF] bg-[#F5F7FA] flex items-center justify-center">
                        <div className="w-12 h-1.5 bg-[#DBEAFE] rounded-full"></div>
                      </div>
                      
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "auto" }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                        className="h-0.5 relative bg-gradient-to-r from-[#2563EB] to-[#93C5FD] overflow-hidden flex-grow mx-4"
                      >
                        <motion.div 
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            ease: "linear"
                          }}
                          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-white to-transparent"
                        />
                      </motion.div>
                      
                      <div className="w-20 h-16 rounded-lg border border-[#E0E7FF] bg-[#F5F7FA] flex items-center justify-center relative overflow-hidden">
                        <div className="w-12 h-1.5 bg-[#DBEAFE] rounded-full"></div>
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1
                          }}
                          className="absolute inset-0 border-2 border-[#2563EB] rounded-lg"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center mt-2">
                      <p className="text-[#111827] font-medium">Secure One-Way Data Transfer</p>
                      <p className="text-[#6B7280] text-sm mt-1">Hardware-enforced protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}