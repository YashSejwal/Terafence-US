"use client";

import { motion } from "framer-motion";
import { IconCheck, IconServer, IconCode, IconNetwork } from "@tabler/icons-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TechnicalSpecs() {
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
            Technical Specifications
          </h2>
          <p className="mt-4 text-[#4B5563] text-lg">
            Advanced technology designed for maximum security and performance in critical infrastructure environments.
          </p>
        </motion.div>

        <Tabs defaultValue="hardware" className="w-full">
          <TabsList className="flex w-full justify-center max-w-2xl mx-auto mb-12 bg-transparent">
            <TabsTrigger 
              value="hardware" 
              className="flex items-center gap-2 data-[state=active]:bg-[#2563EB] data-[state=active]:text-white px-5 py-3 rounded-lg"
            >
              <IconServer size={20} />
              <span>Hardware</span>
            </TabsTrigger>
            <TabsTrigger 
              value="software" 
              className="flex items-center gap-2 data-[state=active]:bg-[#2563EB] data-[state=active]:text-white px-5 py-3 rounded-lg"
            >
              <IconCode size={20} />
              <span>Software</span>
            </TabsTrigger>
            <TabsTrigger 
              value="connectivity" 
              className="flex items-center gap-2 data-[state=active]:bg-[#2563EB] data-[state=active]:text-white px-5 py-3 rounded-lg"
            >
              <IconNetwork size={20} />
              <span>Connectivity</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="hardware" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-xl p-8 border border-[#E5E7EB] shadow-sm">
                <h3 className="text-xl font-semibold text-[#111827] mb-6 pb-4 border-b border-[#E5E7EB]">Physical Specifications</h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Form Factor</span>
                      <span className="text-[#4B5563]">1U Rack-mountable chassis</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Dimensions</span>
                      <span className="text-[#4B5563]">438mm × 44mm × 292mm</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Weight</span>
                      <span className="text-[#4B5563]">4.5kg (9.9lbs)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Operating Temperature</span>
                      <span className="text-[#4B5563]">0°C to 40°C (32°F to 104°F)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Redundant Power</span>
                      <span className="text-[#4B5563]">Dual hot-swappable power supplies</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 border border-[#E5E7EB] shadow-sm">
                <h3 className="text-xl font-semibold text-[#111827] mb-6 pb-4 border-b border-[#E5E7EB]">Processing Capabilities</h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Throughput</span>
                      <span className="text-[#4B5563]">Up to 10 Gbps</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Latency</span>
                      <span className="text-[#4B5563]">Sub-millisecond processing time</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">FPGA</span>
                      <span className="text-[#4B5563]">Dedicated hardware processing units</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Memory</span>
                      <span className="text-[#4B5563]">16GB ECC RAM</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Storage</span>
                      <span className="text-[#4B5563]">256GB SSD for logging and configuration</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="software" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-xl p-8 border border-[#E5E7EB] shadow-sm">
                <h3 className="text-xl font-semibold text-[#111827] mb-6 pb-4 border-b border-[#E5E7EB]">Security Features</h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Non-Routable Protocol</span>
                      <span className="text-[#4B5563]">Proprietary data transmission format</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Content Filtering</span>
                      <span className="text-[#4B5563]">Granular data inspection and validation</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Audit Logging</span>
                      <span className="text-[#4B5563]">Comprehensive event monitoring and reporting</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Tamper Protection</span>
                      <span className="text-[#4B5563]">Hardware-level anti-tampering mechanisms</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Secure Boot</span>
                      <span className="text-[#4B5563]">Cryptographically verified firmware loading</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 border border-[#E5E7EB] shadow-sm">
                <h3 className="text-xl font-semibold text-[#111827] mb-6 pb-4 border-b border-[#E5E7EB]">Management & Configuration</h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Web Interface</span>
                      <span className="text-[#4B5563]">Secure HTML5-based management console</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">CLI Access</span>
                      <span className="text-[#4B5563]">Command-line configuration options</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Role-Based Access</span>
                      <span className="text-[#4B5563]">Granular administrative permissions</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">SNMP Support</span>
                      <span className="text-[#4B5563]">Integration with monitoring platforms</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Remote Updates</span>
                      <span className="text-[#4B5563]">Secure firmware upgrade mechanism</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="connectivity" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-xl p-8 border border-[#E5E7EB] shadow-sm">
                <h3 className="text-xl font-semibold text-[#111827] mb-6 pb-4 border-b border-[#E5E7EB]">Network Interfaces</h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Ethernet</span>
                      <span className="text-[#4B5563]">Multiple 1/10GbE copper/fiber options</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Serial</span>
                      <span className="text-[#4B5563]">RS-232/422/485 support for legacy systems</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">USB</span>
                      <span className="text-[#4B5563]">Secure isolated USB data transfer</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Management Port</span>
                      <span className="text-[#4B5563]">Dedicated interface for administration</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Console Port</span>
                      <span className="text-[#4B5563]">Out-of-band management capabilities</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 border border-[#E5E7EB] shadow-sm">
                <h3 className="text-xl font-semibold text-[#111827] mb-6 pb-4 border-b border-[#E5E7EB]">Protocol Support</h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Industrial Protocols</span>
                      <span className="text-[#4B5563]">Modbus, DNP3, OPC UA, IEC 61850</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">IT Protocols</span>
                      <span className="text-[#4B5563]">SMTP, FTP, SFTP, FTPS, HTTP/S</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Streaming</span>
                      <span className="text-[#4B5563]">MQTT, AMQP, Kafka support</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">Custom Protocols</span>
                      <span className="text-[#4B5563]">SDK for implementing proprietary formats</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DBEAFE] flex items-center justify-center mr-3 mt-0.5">
                      <IconCheck className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="block font-medium text-[#111827]">File Transfer</span>
                      <span className="text-[#4B5563]">Specialized secure file transport mechanisms</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-white rounded-xl p-8 border border-[#E5E7EB] shadow-sm text-center"
        >
          <h3 className="text-xl font-semibold text-[#111827] mb-3">Need more detailed specifications?</h3>
          <p className="text-[#4B5563] mb-6 max-w-2xl mx-auto">
            Our comprehensive technical documentation provides detailed information about all aspects of Terafence&#39;s data diode technology.
          </p>
          <button className="px-8 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg font-medium transition-colors inline-flex items-center">
            Download Technical Datasheet
          </button>
        </motion.div>
      </div>
    </section>
  );
}