"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/marketing/navbar"
import Footer from "@/components/marketing/footer"
import { ArrowRight, ShieldCheck, Cog, LockKeyhole } from "lucide-react"

type TabContent = {
  title: string
  subtitle: string
  description: string
  image: string
  icon: React.ReactNode
  features: string[]
  cta: {
    text: string
    link: string
  }
}

const tabContents: Record<string, TabContent> = {
  "secure-it": {
    title: "Secure IT",
    subtitle: "Enterprise-grade IT Security",
    description: "Terafence's Secure IT solutions provide robust protection for your information technology infrastructure with our proprietary hardware-based network isolation technology. Our products create a secure, unidirectional gateway that physically prevents unauthorized access while allowing safe data flow.",
    image: "/images/secure-it.svg",
    icon: <ShieldCheck className="w-6 h-6" />,
    features: [
      "Hardware-based network isolation",
      "Zero-trust architecture implementation",
      "Unidirectional gateway technology",
      "Real-time threat monitoring",
      "Seamless integration with existing IT infrastructure"
    ],
    cta: {
      text: "Discover Secure IT",
      link: "/solutions/secure-it"
    }
  },
  "secure-ot": {
    title: "Secure OT",
    subtitle: "Operational Technology Protection",
    description: "Terafence's Secure OT solutions safeguard critical operational technology environments such as industrial control systems, SCADA networks, and IoT deployments. Our hardware-enforced security creates an air-gap equivalent that allows data visibility without exposure to cyber threats.",
    image: "/images/secure-ot.svg",
    icon: <Cog className="w-6 h-6" />,
    features: [
      "Industrial control system protection",
      "SCADA network security",
      "IoT device safeguarding",
      "Protocol-aware filtering",
      "Legacy system compatibility"
    ],
    cta: {
      text: "Explore Secure OT",
      link: "/solutions/secure-ot"
    }
  },
  "secure-cam": {
    title: "Secure CAM",
    subtitle: "Control Access & Monitoring",
    description: "Terafence's Secure CAM provides comprehensive control access and monitoring solutions for high-security environments. Our technology enables secure monitoring of video feeds, access control systems, and other critical security infrastructure while eliminating cyber attack vectors.",
    image: "/images/secure-cam.svg",
    icon: <LockKeyhole className="w-6 h-6" />,
    features: [
      "Secure video surveillance systems",
      "Access control protection",
      "Physical security integration",
      "Secure remote monitoring",
      "Tamper-proof logging and auditing"
    ],
    cta: {
      text: "Learn About Secure CAM",
      link: "/solutions/secure-cam"
    }
  },
}

export default function Solutions() {
  const [activeTab, setActiveTab] = useState("secure-it")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  }

  // Create a custom tabs component instead of using the UI library
  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-16 max-w-7xl">
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sky-600 font-semibold mb-2 tracking-wide">TERAFENCE SOLUTIONS</span>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-4">
            Industrial-Grade Cybersecurity
          </h1>
          <p className="text-slate-600 max-w-2xl text-center">
            Hardware-enforced network isolation solutions that protect your most critical IT, OT, and security infrastructure from cyber threats.
          </p>
        </motion.div>

        {/* Custom Tab Navigation */}
        <div className="relative mb-12 max-w-2xl mx-auto">
          {/* Tab Background with Indicator */}
          <div className="absolute inset-0 bg-white rounded-full shadow-md"></div>
          {/* Active Tab Indicator */}
          <motion.div 
            className="absolute h-full bg-gradient-to-r from-sky-500 to-sky-600 rounded-full shadow-lg"
            initial={false}
            animate={{ 
              left: `${Object.keys(tabContents).indexOf(activeTab) * (100 / Object.keys(tabContents).length)}%`,
              width: `${100 / Object.keys(tabContents).length}%`
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          
          {/* Tab Buttons */}
          <div className="relative flex justify-between p-1">
            {Object.keys(tabContents).map((tabKey) => (
              <button
                key={tabKey}
                className={`flex-1 py-3 px-4 z-10 font-medium text-center transition-colors duration-200 rounded-full ${
                  activeTab === tabKey ? "text-white" : "text-slate-700 hover:text-slate-900"
                }`}
                onClick={() => handleTabClick(tabKey)}
              >
                <div className="flex items-center justify-center">
                  <span className={`text-sm md:text-base ${activeTab === tabKey ? "" : "group-hover:text-slate-900"}`}>
                    {tabContents[tabKey].title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            {Object.keys(tabContents).map((tabKey) => (
              activeTab === tabKey && (
                <motion.div
                  key={tabKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="p-10 md:p-14 flex flex-col justify-center relative z-10">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 w-fit">
                          <div className="mr-2 bg-blue-100 p-2 rounded-full">
                            {tabContents[tabKey].icon}
                          </div>
                          <span>{tabContents[tabKey].subtitle}</span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">{tabContents[tabKey].title}</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed text-lg">{tabContents[tabKey].description}</p>
                        
                        <motion.ul 
                          className="space-y-4 mb-10"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {tabContents[tabKey].features.map((feature, index) => (
                            <motion.li 
                              key={index} 
                              className="flex items-start"
                              variants={itemVariants}
                            >
                              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                                <svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-slate-700 text-lg">{feature}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link
                            href={`mailto:info@terafence.in`}
                            className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
                          >
                            {tabContents[tabKey].cta.text}
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Link>
                          <Link
                            href={`mailto:info@terafence.in`}
                            className="flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors"
                          >
                            Contact Sales
                          </Link>
                        </div>
                      </div>
                      
                      <div className="relative h-full min-h-[400px] lg:min-h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-100 opacity-30 blur-3xl"></div>
                        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-red-100 opacity-20 blur-2xl"></div>
                        
                        <motion.div
                          className="absolute inset-0 w-full h-full flex items-center justify-center p-10"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <Image
                            src={tabContents[tabKey].image || "/images/gen1.svg"}
                            alt={tabContents[tabKey].title}
                            fill
                            className="object-contain p-6"
                            priority
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
        
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Ready to secure your critical infrastructure?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Talk to our security experts today to discover how Terafence&apos;s hardware-enforced security solutions can protect your organization.
          </p>
          <Link
            href={`mailto:info@terafence.in`}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-600 to-sky-700 text-white font-medium rounded-xl hover:from-sky-700 hover:to-sky-800 transition-all shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}