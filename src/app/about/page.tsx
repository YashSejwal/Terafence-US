"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Lock,
  Send,
  Search,
  Globe,
  Camera, 
  Server, 
  Activity,
  Heart,
  Shield,
  Cloud,
  FileDigit,
  Box,
  AlertTriangle,
  FileJson,
  Flag,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import Link from "next/link";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="flex flex-col min-h-screen bg-slate-50 overflow-hidden">
        <SolutionsHero />
        <CybersecurityPhilosophy />
        <IndiaPresence />
        <SolutionsGrid />
        <TerafencePlatform />
      </main>
      <Footer />
    </div>
  );
}

function SolutionsHero() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
      <div className="absolute right-0 top-0 h-64 w-64 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute left-0 bottom-0 h-64 w-64 bg-blue-400 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 bg-blue-800/30 backdrop-blur-sm rounded-full border border-blue-400/20 text-blue-200 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Unidirectional Security Gateway
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Protecting the US&apos;s <br />
              <span className="text-yellow-300">Critical Infrastructure</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-lg">
              Cutting-edge cybersecurity solutions designed for mission-critical
              environments in the modern threat landscape.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/solutions" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-400 to-amber-500 text-blue-900 px-6 py-3 rounded-full font-bold text-base shadow-lg hover:shadow-yellow-400/30 transition duration-300 flex items-center"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
              </Link>
              <Link href="/solutions" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-700/30 text-white border border-blue-400/30 backdrop-blur-sm px-6 py-3 rounded-full font-bold text-base hover:bg-blue-600/40 transition duration-300"
                >
                  Know More
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative h-[400px] w-full"
          >
            <div className="absolute inset-0 bg-blue-600/20 backdrop-blur-md rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 backdrop-blur-md rounded-2xl"></div>
            <div className="h-full w-full relative flex items-center justify-center">
              <Image
                src="/images/about/info.svg"
                alt="Cybersecurity Infographic"
                fill
                className="object-contain p-6"
                priority
              />
              <div className="absolute top-4 right-4 p-2 bg-blue-500/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 p-1 bg-yellow-500/30 rounded-full animate-pulse delay-300"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CybersecurityPhilosophy() {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/dot-pattern.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full text-blue-600 font-medium text-sm">
            OUR CYBERSECURITY PHILOSOPHY
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Ensure data flows only one way.  <br /> Protect every device.
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Terafence&apos;s solutions ensure security and our technology
              protects critical infrastructure by securing data transfer and
              device access at all levels.
            </p>
          </div>

          <div className="pt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link href="/solutions" passHref>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-bold text-base shadow-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 flex items-center">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IndiaPresence() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  const locations = [
    { id: "Dallas, Texas", name: "Dallas, Texas", x: 50, y: 69 },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/topo.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-3 py-1 bg-indigo-50 rounded-full text-indigo-600 font-medium text-sm mb-3">
            STRATEGIC LOCATIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Presence in the United States
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Terafence India provides cutting-edge cybersecurity solutions across
            the nation, with a focus on protecting the United State&apos;s critical
            infrastructure.
          </p>
        </motion.div>

        <div className="relative w-full h-[500px] overflow-hidden">
          <div className="absolute top-8 right-8 w-24 h-24 bg-blue-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-8 left-8 w-24 h-24 bg-indigo-400/10 rounded-full blur-xl"></div>

          <Image
            src="/images/about/map.svg"
            alt="Map of India"
            fill
            className="object-contain p-6"
          />

          {locations.map((location) => (
            <div key={location.id}>
              <motion.div
                className="absolute cursor-pointer"
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                }}
                onMouseEnter={() => setActiveLocation(location.id)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                <div className="relative">
                  <div className="w-5 h-5 bg-blue-600 rounded-full z-10 relative cursor-pointer"></div>
                  <div className="absolute -inset-1 bg-rose-400 rounded-full opacity-50 animate-ping"></div>
                </div>
              </motion.div>

              <AnimatePresence>
                {activeLocation === location.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    className="absolute bg-white px-4 py-2 rounded-lg shadow-lg z-5 border border-blue-100"
                    style={{
                      left: `${location.x}%`,
                      top: `${location.y - 6}%`,
                      transform: "translate(-100%, -100%)",
                    }}
                  >
                    <p className="text-blue-700 font-bold whitespace-nowrap">
                      {location.name}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsGrid() {
  const solutions = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "SecureOT",
      description:
        "Physically isolates OT systems like SCADA, HMI, and PLCs, ensuring they remain inaccessible to unauthorized entities while maintaining necessary data flow.",
    },
    {
      icon: <Camera className="h-8 w-8 text-blue-600" />,
      title: "SecureCAM",
      description: "Protects IP-CCTV networks and video storage by preventing unauthorized access, ensuring the integrity and confidentiality of surveillance data.",
    },
    {
      icon: <Send className="h-8 w-8 text-blue-600" />,
      title: "SecureIT",
      description:
        "Implements unidirectional data flow in IT networks, allowing data transmission without the risk of reverse communication or external commands.",
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "SecureCOM",
      description: "Secures wearable medical devices like pacemakers and insulin injectors from unauthorized access, ensuring patient safety and device reliability.",
    },
    {
      icon: <Server className="h-8 w-8 text-blue-600" />,
      title: "Data Diode Technology",
      description: "Ensures one-way data transfer, providing a physical barrier that prevents data breaches while allowing continuous data monitoring.",
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "Industrial IoT Protection",
      description: "Safeguards industrial control systems and critical infrastructure from cyber threats without disrupting operational processes.",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Smart Building Security",
      description: "Protects smart building components, such as elevators and air-conditioning systems, from cyber threats, ensuring occupant safety and system reliability.",
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: "Unidirectional Secure Gateway",
      description:
        "Provides a hardware-based solution that isolates IP devices, preventing penetration while maintaining data outflow and device control.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full text-blue-600 font-medium text-sm mb-3">
            COMPREHENSIVE PROTECTION
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Unidirectional Secure Gateway          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to protect critical
            infrastructure across all environments.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-xl p-6 border border-gray-100 transition-all hover:border-blue-300 group shadow hover:shadow-blue-100"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-blue-100 p-4 rounded-lg mb-2">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm">{solution.description}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="inline-flex items-center text-blue-600 font-semibold text-sm">
                    Learn more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TerafencePlatform() {
  const techStack = [
    { icon: <Shield className="h-5 w-5" />, name: "Data Diode" },
    { icon: <FileDigit className="h-5 w-5" />, name: "BSG" },
    { icon: <Box className="h-5 w-5" />, name: "1-URP" },
    { icon: <AlertTriangle className="h-5 w-5" />, name: "121" },
    { icon: <Search className="h-5 w-5" />, name: "Syslog Management" },
    { icon: <Globe className="h-5 w-5" />, name: "Threat Prevention" },
    { icon: <FileJson className="h-5 w-5" />, name: "Cybersecurity" },
    { icon: <Flag className="h-5 w-5" />, name: "Origin Security" },
  ];

  const deploymentOptions = [
    { icon: <Shield className="h-5 w-5" />, name: "Air-Gapped" },
    { icon: <Server className="h-5 w-5" />, name: "On-Premise" },
    { icon: <Cloud className="h-5 w-5" />, name: "Data Diode" },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/wave-pattern.svg')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-400 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-blue-800/40 backdrop-blur-sm rounded-full border border-blue-400/20 text-blue-200 mb-3 text-sm">
                <span className="w-2 h-2 bg-blue-300 rounded-full mr-2 animate-pulse"></span>
                COMPREHENSIVE PROTECTION
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Terafence 
              </h2>
              <p className="text-lg text-blue-100">
                Our product combines the unidirectional gateway security to
                provide comprehensive protection against threats, even
                in the most sensitive environments.
              </p>
            </div>

            <div className="bg-blue-800/20 backdrop-blur-sm p-6 rounded-xl border border-blue-700/40">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <div className="w-1 h-6 bg-yellow-400 rounded-full mr-3"></div>
                Tech Stack
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="bg-blue-600/50 p-2 rounded-lg">
                      {tech.icon}
                    </div>
                    <span className="text-base group-hover:text-blue-200 transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <div className="w-1 h-6 bg-yellow-400 rounded-full mr-3"></div>
                Deployment Options
              </h4>
              <div className="flex flex-wrap gap-3">
                {deploymentOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="bg-blue-800/50 px-4 py-3 rounded-lg flex items-center space-x-3 border border-blue-600/40"
                  >
                    <div className="bg-blue-600/50 p-2 rounded-lg">
                      {option.icon}
                    </div>
                    <span className="text-base font-medium">{option.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-yellow-400 to-amber-500 text-blue-900 px-6 py-3 rounded-full font-bold text-base shadow-lg hover:shadow-yellow-400/30 transition duration-300 flex items-center"
            >
              Request a Demo
              <ChevronRight className="ml-2 h-4 w-4" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] w-full"
          >
            <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-md rounded-xl border border-blue-500/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/about/info1.svg"
                alt="terafence-us"
                fill
                className="object-contain p-8"
              />
              <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}