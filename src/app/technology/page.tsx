"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent} from "@/components/ui/tabs"
import {
  ArrowRight,
  Shield,
  Zap,
  Lock,
  CheckCircle,
  Cpu,
  Network,
  ShieldCheck,
  Gauge,
  FileCheck,
  Layers,
  CircuitBoard,
  Grid,
} from "lucide-react"
import { content } from "./content"
import Navbar from "@/components/marketing/navbar"
import Footer from "@/components/marketing/footer"
import Wrapper from "@/components/global/wrapper"

export default function Home() {
  const [, setActiveSection] = useState("hero")
  const heroRef = useRef<HTMLDivElement>(null)
  const techRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const comparisonRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useScroll()

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    const sections = [
      { ref: heroRef, id: "hero" },
      { ref: techRef, id: "tech" },
      { ref: featuresRef, id: "features" },
      { ref: comparisonRef, id: "comparison" },
      { ref: ctaRef, id: "cta" },
    ]

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar/>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <section id="hero" ref={heroRef} className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-1/2 h-2/3 bg-indigo-50/80 rounded-bl-[200px] backdrop-blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50/50 rounded-tr-[150px] backdrop-blur-2xl"></div>
            <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-blue-200/20 to-indigo-100/30 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-sky-100/30 to-blue-50/20 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 py-20">
            <Wrapper>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-block mb-6"
                  >
                    <span className="bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 py-2 px-4 rounded-full text-sm font-medium tracking-wide border border-indigo-100/50 shadow-sm">
                      FPGA-Based Security
                    </span>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-5xl pb-4 md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-blue-600 to-sky-500"
                  >
                    {content.hero.headline}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-light"
                  >
                    {content.hero.subheading}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap gap-5"
                  >
                    <Button
                      size="lg"
                      onClick={() => scrollToSection(techRef)}
                      className="px-8 py-7 text-lg rounded-full bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 hover:from-indigo-700 hover:via-blue-700 hover:to-sky-600 shadow-lg hover:shadow-blue-300/50 transition-all duration-300 font-medium"
                    >
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => scrollToSection(ctaRef)}
                      className="px-8 py-7 text-lg rounded-full border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition-all duration-300 font-medium"
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative"
                >
                  <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-200/50 border border-indigo-100/50 backdrop-blur-sm">
                    <Image
                      src="/images/fpga.svg?height=600&width=1200"
                      alt="FPGA-Based Data Diode Technology"
                      width={1200}
                      height={600}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-blue-900/50 to-transparent flex items-end">
                      <div className="p-10 text-white">
                        <h3 className="text-2xl font-bold mb-3">Hardware-Enforced Security</h3>
                        <p className="text-base max-w-2xl font-light opacity-90">
                          Our FPGA-based data diode technology ensures 100% unidirectional data flow, making it physically
                          impossible for data to travel in the reverse direction.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-100/50 to-blue-100/30 rounded-full blur-3xl z-0"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-100/50 to-indigo-100/30 rounded-full blur-3xl z-0"></div>

                  <div className="absolute inset-0 z-20 opacity-10 pointer-events-none mix-blend-overlay flex items-center justify-center">
                    <CircuitBoard className="w-full h-full" />
                  </div>
                </motion.div>
              </div>
            </Wrapper>
          </div>
        </section>

        <section id="tech" ref={techRef} className="py-24 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white"></div>
          <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-indigo-50/50 rounded-l-[200px] -z-10 backdrop-blur-xl"></div>

          <div className="container mx-auto px-6">
            <Wrapper>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center mb-12"
              >
                <h1 className="text-4xl pb-2 md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-blue-600 to-sky-500">
                  {content.technology.title}
                </h1>
                <p className="text-xl text-slate-600 font-light">{content.technology.description}</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl font-bold mb-8 text-slate-800">{content.technology.subtitle}</h3>
                  <p className="text-slate-600 mb-10 text-lg font-light leading-relaxed">{content.technology.content}</p>

                  <div className="space-y-10">
                    {content.technology.points.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="mr-6 mt-1 bg-gradient-to-br from-indigo-100 to-blue-50 p-4 rounded-2xl shadow-sm">
                          {index === 0 && <Shield className="h-6 w-6 text-indigo-600" />}
                          {index === 1 && <Lock className="h-6 w-6 text-indigo-600" />}
                          {index === 2 && <Zap className="h-6 w-6 text-indigo-600" />}
                        </div>
                        <div>
                          <h4 className="font-bold text-xl mb-3 text-slate-800">{point.title}</h4>
                          <p className="text-slate-600 font-light">{point.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl shadow-xl p-10 border border-indigo-100/50 relative z-10 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-8 text-slate-800">Data Flow Architecture</h3>
                    <div className="relative h-80 mb-10">
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <Image
                          src="/images/fpga.svg?height=400&width=600"
                          alt="FPGA Data Flow Architecture"
                          width={600}
                          height={400}
                          className="max-w-full max-h-full rounded-2xl shadow-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      {[
                        { color: "bg-emerald-400", label: "Secure Zone (Source)" },
                        { color: "bg-indigo-500", label: "FPGA Hardware Barrier" },
                        { color: "bg-rose-500", label: "Protected Zone (Destination)" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                          className="flex items-center"
                        >
                          <div className={`w-4 h-4 rounded-full ${item.color} mr-4 shadow-sm`}></div>
                          <span className="text-base font-medium text-slate-700">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute -z-10 -top-10 -right-10 w-80 h-80 bg-gradient-to-br from-indigo-100/40 to-blue-100/20 rounded-full blur-3xl"></div>
                  <div className="absolute -z-10 -bottom-10 -left-10 w-80 h-80 bg-gradient-to-tr from-blue-100/40 to-indigo-100/20 rounded-full blur-3xl"></div>
                </motion.div>
              </div>
            </Wrapper>
          </div>
        </section>

        <section id="features" ref={featuresRef} className="py-24 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-slate-50"></div>
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5 flex items-center justify-center">
            <Grid className="w-full h-full" />
          </div>

          <div className="container mx-auto px-6">
            <Wrapper>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center mb-24"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-blue-600 to-sky-500">
                  {content.features.title}
                </h2>
                <p className="text-xl text-slate-600 font-light">{content.features.description}</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.features.items.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border border-indigo-100/30 bg-gradient-to-br from-white to-slate-50 overflow-hidden rounded-3xl">
                      <CardContent className="p-10 relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100/30 to-blue-100/20 rounded-full -translate-x-10 -translate-y-10 opacity-30"></div>
                        <div className="mb-8 p-4 bg-gradient-to-br from-indigo-100 to-blue-50 rounded-2xl inline-block relative z-10 shadow-sm">
                          {index === 0 && <Network className="h-8 w-8 text-indigo-600" />}
                          {index === 1 && <ShieldCheck className="h-8 w-8 text-indigo-600" />}
                          {index === 2 && <Gauge className="h-8 w-8 text-indigo-600" />}
                          {index === 3 && <Cpu className="h-8 w-8 text-indigo-600" />}
                          {index === 4 && <FileCheck className="h-8 w-8 text-indigo-600" />}
                          {index === 5 && <Layers className="h-8 w-8 text-indigo-600" />}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 relative z-10 text-slate-800">{feature.title}</h3>
                        <p className="text-slate-600 relative z-10 font-light">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </Wrapper>
          </div>
        </section>

        <section
          id="comparison"
          ref={comparisonRef}
          className="py-24 md:py-36 bg-gradient-to-br from-indigo-800 via-blue-800 to-sky-800 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 opacity-10 flex items-center justify-center">
            <CircuitBoard className="w-full h-full text-white" />
          </div>

          <div className="container mx-auto px-6">
            <Wrapper>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center mb-20"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{content.comparison.title}</h2>
                <p className="text-xl opacity-90 font-light">{content.comparison.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="overflow-x-auto"
              >
                <div className="min-w-[800px]">
                  <Tabs defaultValue="features" className="w-full">
                    <TabsContent value="features">
                      <div className="grid md:grid-cols-2 gap-8">
                        {content.comparison.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-indigo-900/30 rounded-3xl p-10 backdrop-blur-sm border border-indigo-700/30 hover:shadow-xl hover:shadow-indigo-900/10 transition-all duration-300"
                          >
                            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                            <p className="mb-8 opacity-90 font-light">{feature.description}</p>
                            <ul className="space-y-5">
                              {feature.points.map((point, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle className="h-5 w-5 mr-3 text-sky-300 shrink-0 mt-0.5" />
                                  <span className="font-light">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </motion.div>
            </Wrapper>
          </div>
        </section>

        <section id="cta" ref={ctaRef} className="py-24 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-indigo-50/50 rounded-tl-[200px] -z-10 backdrop-blur-xl"></div>

          <div className="container mx-auto px-6">
            <Wrapper>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-blue-600 to-sky-500">
                  {content.cta.title}
                </h2>
                <p className="text-xl text-slate-600 mb-16 font-light">{content.cta.description}</p>

                <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
                  {content.cta.cards.map((card, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <Card className="bg-white border border-indigo-100/30 shadow-xl hover:shadow-2xl hover:shadow-indigo-200/50 transition-all duration-300 rounded-3xl">
                        <CardContent className="p-10 text-center">
                          {index === 0 ? (
                            <div className="bg-gradient-to-br from-indigo-100 to-blue-50 p-5 rounded-2xl inline-block mb-8">
                              <Cpu className="h-16 w-16 text-indigo-600" />
                            </div>
                          ) : (
                            <div className="bg-gradient-to-br from-indigo-100 to-blue-50 p-5 rounded-2xl inline-block mb-8">
                              <Shield className="h-16 w-16 text-indigo-600" />
                            </div>
                          )}
                          <h3 className="text-2xl font-bold mb-4 text-slate-800">{card.title}</h3>
                          <p className="text-slate-600 mb-10 font-light">{card.description}</p>
                          <Button
                            variant={index === 0 ? "default" : "outline"}
                            onClick={() => window.location.href = card.link}
                            className={
                              index === 0
                                ? "w-full py-6 rounded-full bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 hover:from-indigo-700 hover:via-blue-700 hover:to-sky-600 shadow-lg hover:shadow-indigo-300/50 transition-all duration-300 text-base font-medium"
                                : "w-full py-6 rounded-full border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition-all duration-300 text-base font-medium"
                            }
                          >
                            {card.buttonText}
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-20 p-10 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl max-w-3xl mx-auto border border-indigo-100/50 shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">Stay Updated</h3>
                  <p className="text-slate-600 mb-8 font-light">
                    Subscribe to our newsletter for the latest updates on cybersecurity and data diode technology.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex h-14 w-full rounded-full border border-indigo-200 bg-white px-6 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
                    />
                    <Button className="h-14 px-8 rounded-full bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 hover:from-indigo-700 hover:via-blue-700 hover:to-sky-600 shadow-lg hover:shadow-indigo-300/50 transition-all duration-300 text-base font-medium">
                      Subscribe
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </Wrapper>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}