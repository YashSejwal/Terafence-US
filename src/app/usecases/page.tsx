/* eslint-disable @next/next/no-img-element */
"use client"

import React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Zap, Database, Server, Cloud, Globe, Lock } from "lucide-react"
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import Wrapper from "@/components/global/wrapper";

const useCases = [
  {
    id: "overview",
    title: "Overview",
    shortTitle: "Overview",
    subtitle: "Explore all security use cases",
    description:
      "Our comprehensive cybersecurity solutions provide end-to-end protection for your critical infrastructure and sensitive data. We offer advanced threat detection, real-time monitoring, and rapid incident response to safeguard your organization against evolving cyber threats.",
    bulletPoints: [
      "Comprehensive security assessment and monitoring",
      "Advanced threat detection and prevention",
      "24/7 security operations center support",
      "Compliance with industry regulations and standards",
    ],
    icon: Shield,
    imagePath: "/images/usecases/overview.svg",
  },
  {
    id: "energy-management",
    title: "Energy Management",
    shortTitle: "Energy",
    subtitle: "Security solutions for power infrastructure",
    description:
      "Protect your electrical grid infrastructure with our specialized security solutions designed for the energy sector. Our technology secures SCADA systems, industrial control networks, and critical power management infrastructure against targeted attacks.",
    bulletPoints: [
      "SCADA system protection and monitoring",
      "Industrial control system security",
      "Grid infrastructure protection",
      "Regulatory compliance for energy sector",
    ],
    icon: Zap,
    imagePath: "/images/usecases/energy.svg",
  },
  {
    id: "petroleum-industry",
    title: "Petroleum Industry",
    shortTitle: "Petroleum",
    subtitle: "Protection for oil and gas infrastructure",
    description:
      "Secure your oil and gas operations with tailored cybersecurity solutions that protect refineries, pipelines, and distribution networks. Our specialized approach addresses the unique challenges of petroleum industry infrastructure.",
    bulletPoints: [
      "Refinery and pipeline security",
      "OT/IT convergence protection",
      "Supply chain security assurance",
      "Remote site monitoring and protection",
    ],
    icon: Database,
    imagePath: "/images/usecases/petroleum.svg",
  },
  {
    id: "mission-critical-systems",
    title: "Mission Critical Systems",
    shortTitle: "Critical",
    subtitle: "Solutions for high availability environments",
    description:
      "Ensure continuous operation of your mission-critical systems with our high-availability security solutions. We provide robust protection that maintains system integrity while ensuring maximum uptime for your most important IT and OT infrastructure.",
    bulletPoints: [
      "Zero-downtime security implementation",
      "Redundant security architecture",
      "Failover protection systems",
      "Critical infrastructure resilience",
    ],
    icon: Server,
    imagePath: "/images/usecases/critical.svg",
  },
  {
    id: "ot-data-transfer",
    title: "OT Data Transfer to SIEM",
    shortTitle: "OT Data",
    subtitle: "Safe operational data transfer",
    description:
      "Securely transfer operational technology data to your Security Information and Event Management (SIEM) systems with our specialized data transfer solutions. Maintain visibility across your entire infrastructure while keeping critical systems isolated.",
    bulletPoints: [
      "Secure OT to IT data transfer",
      "SIEM integration for comprehensive visibility",
      "Data integrity verification",
      "Anomaly detection across OT/IT boundaries",
    ],
    icon: Database,
    imagePath: "/images/usecases/otdata.svg",
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    shortTitle: "Cloud",
    subtitle: "Secure cloud connectivity solutions",
    description:
      "Enable secure cloud adoption with our comprehensive cloud security solutions. We provide secure connectivity, access controls, and continuous monitoring to protect your cloud infrastructure and ensure safe migration to cloud environments.",
    bulletPoints: [
      "Secure cloud migration pathways",
      "Cloud access security broker (CASB)",
      "Multi-cloud security management",
      "Cloud-native security controls",
    ],
    icon: Cloud,
    imagePath: "/images/usecases/cloud.svg",
  },
  {
    id: "defense-export",
    title: "Defense Export Programs",
    shortTitle: "Defense",
    subtitle: "Solutions for foreign military sales",
    description:
      "Support international defense programs with our specialized cybersecurity solutions for foreign military sales. We provide compliant, robust security measures that meet the stringent requirements of defense export programs.",
    bulletPoints: [
      "ITAR and EAR compliance assurance",
      "Secure international data transfer",
      "Cross-border security implementation",
      "Defense-grade encryption and protection",
    ],
    icon: Globe,
    imagePath: "/images/usecases/defense.svg",
  },
]

const heroCards = [
  {
    title: "Advanced Threat Protection",
    description: "Proactive defense against sophisticated cyber threats targeting critical infrastructure",
    icon: Shield,
  },
  {
    title: "Secure Data Transfer",
    description: "Encrypted channels for safe movement of sensitive operational data across networks",
    icon: Lock,
  },
  {
    title: "Compliance Assurance",
    description: "Meet regulatory requirements with comprehensive security controls and documentation",
    icon: Database,
  },
]

export default function UseCases() {
  const [activeTab, setActiveTab] = useState("overview")
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const tabsRef = useRef(null)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const handleTabClick = (id: string) => {
    setActiveTab(id)
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start", 
      inline: "nearest",
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const id of Object.keys(sectionRefs.current)) {
        const section = sectionRefs.current[id]
        if (!section) continue

        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveTab(id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar/>
      <div ref={containerRef} className="relative overflow-hidden w-full">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 z-50"
          style={{ width: progressWidth }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        <div className="container mx-auto px-4 pt-32 pb-20 text-center relative">
          <Wrapper>
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl -z-10"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            <motion.h1
              className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Use Cases
            </motion.h1>

            <motion.p
              className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Industry-leading security solutions tailored to your specific needs and challenges
            </motion.p>

            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-8"
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </Wrapper>
        </div>

        <div ref={tabsRef} className="sticky top-0 bg-white/90 backdrop-blur-xl z-40 border-b border-slate-200 shadow-lg">
          <Wrapper>
            <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2 justify-center">
              {useCases.map((useCase) => (
                <motion.button
                  key={useCase.id}
                  onClick={() => handleTabClick(useCase.id)}
                  className={`px-5 py-3 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                    activeTab === useCase.id
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-2">
                    {React.createElement(useCase.icon, { size: 16, className: activeTab === useCase.id ? "text-blue-200" : "text-blue-600" })}
                    <span>{useCase.shortTitle}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </Wrapper>
        </div>

        <div className="container mx-auto px-4 py-24">
          <Wrapper>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {heroCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  className="group"
                >
                  <Card className="h-full p-8 bg-white backdrop-blur-md border border-slate-200 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_65px_-12px_rgba(59,130,246,0.25)] transition-all duration-500">
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        className="p-5 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 mb-6 group-hover:text-blue-700 transition-colors duration-300"
                        whileHover={{
                          rotate: [0, 5, -5, 0],
                          scale: 1.1,
                          transition: { duration: 0.5 },
                        }}
                      >
                        {React.createElement(card.icon, { size: 32 })}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">{card.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{card.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Wrapper>
        </div>

        <div className="py-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              ref={(el) => {
                sectionRefs.current[useCase.id] = el;
              }}
              id={useCase.id}
              className="py-24 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {index % 2 === 0 && (
                <motion.div
                  className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl opacity-50 -z-10"
                  animate={{
                    x: [0, 20, 0],
                    y: [0, 30, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              )}

              {index % 2 === 1 && (
                <motion.div
                  className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl opacity-50 -z-10"
                  animate={{
                    x: [0, -20, 0],
                    y: [0, -30, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              )}

              <div className="container mx-auto px-4">
                <Wrapper>
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`flex flex-col ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } items-center gap-12 lg:gap-20`}
                  >
                    <div className="w-full lg:w-1/2 space-y-8">
                      <div>
                        <motion.div
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">{useCase.title}</h2>
                          <p className="text-xl text-blue-500 font-medium">{useCase.subtitle}</p>
                        </motion.div>
                      </div>

                      <motion.p
                        className="text-slate-700 leading-relaxed text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {useCase.description}
                      </motion.p>

                      <motion.ul
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {useCase.bulletPoints.map((point, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="flex-shrink-0 bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                              <span className="text-blue-600 text-sm">✓</span>
                            </div>
                            <span className="text-slate-700">{point}</span>
                          </motion.li>
                        ))}
                      </motion.ul>

                      <motion.div
                        className="flex flex-wrap gap-4 pt-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                      >
                        <a href="mailto:info@terafence.in">
                          <Button
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-xl text-base font-medium shadow-lg shadow-blue-900/20 hover:shadow-blue-700/30 transition-all duration-300"
                            size="lg"
                          >
                            Talk To An Expert
                          </Button>
                        </a>
                        <a href="mailto:info@terafence.in">
                          <Button
                            variant="outline"
                            className="border-blue-500 text-blue-600 hover:bg-blue-100 px-8 py-6 rounded-xl text-base font-medium transition-all duration-300"
                            size="lg"
                          >
                            Learn More
                          </Button>
                        </a>
                      </motion.div>
                    </div>

                    <motion.div
                      className="w-full lg:w-1/2"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
                    >
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                        <img
                          src={useCase.imagePath}
                          alt={useCase.title}
                          className="w-full h-auto object-cover"
                        />
   

                        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          {React.createElement(useCase.icon, { size: 24, className: "text-blue-600" })}
                        </div>

                        <div className="absolute bottom-4 left-4 rounded-lg px-4 py-2 bg-white/80 backdrop-blur-sm text-blue-600 text-sm font-medium">
                          {useCase.shortTitle} Solution
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </Wrapper>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}