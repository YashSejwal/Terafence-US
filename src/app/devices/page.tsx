"use client";

import { useState, useEffect, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Download,
  ExternalLink,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";

import { devices } from "@/app/devices/specs";

export default function ProductPage() {
  const [selectedDevice, setSelectedDevice] = useState("121");
  const [activeSection, setActiveSection] = useState("keyFeatures");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const device = devices[selectedDevice];

  const handleDeviceChange = (deviceId: SetStateAction<string>) => {
    setSelectedDevice(deviceId);
    setCurrentImageIndex(0); // Reset image index when device changes
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "keyFeatures",
        "protocols",
        "techSpecs",
        "resources",
        "support",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom >= 160) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Datasheet download mapping
  const datasheetLinks: { [key: string]: string } = {
    "121": "/downloads/datasheet/121.pdf",
    "1-URP": "/downloads/datasheet/URP.pdf",
    BSG: "/downloads/datasheet/BSG.pdf",
    VSecure: "/downloads/datasheet/VSecure.pdf",
    "MBSecure+": "/downloads/datasheet/MBSecure+.pdf",
  };

  // Transition variants for animations
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm">
        <Navbar />
      </div>

      {/* Device Selection Navigation (Sticky) */}
      <div className="sticky top-16 z-40 w-full border-b bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex h-16 items-center px-6">
          <nav className="flex items-center gap-6 text-sm font-medium overflow-x-auto hide-scrollbar py-2 w-full">
            {Object.keys(devices).map((deviceId) => (
              <motion.button
                key={deviceId}
                onClick={() => handleDeviceChange(deviceId)}
                className={`transition-all relative py-2 px-3 rounded-full ${
                  selectedDevice === deviceId
                    ? "text-blue-600 font-semibold bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {deviceId}
                {selectedDevice === deviceId && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full mx-3"
                    layoutId="deviceIndicator"
                  />
                )}
              </motion.button>
            ))}
          </nav>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedDevice}
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex-1"
        >
          {/* Breadcrumb */}
          <div className="container mx-auto px-6 pt-8">
            <div className="text-sm text-gray-500 flex items-center">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="inline h-4 w-4 mx-1" />
              <span>Products</span>
            </div>
          </div>

          {/* Product Header Section */}
          <motion.section
            className="container mx-auto px-6 py-8 md:py-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Product Image Gallery */}
              <motion.div variants={fadeInUp} className="flex gap-4">
                <div className="flex flex-col gap-4">
                  {device.images.map((image, index) => (
                    <motion.div
                      key={index}
                      className={`relative w-16 h-16 rounded-md overflow-hidden cursor-pointer ${
                        currentImageIndex === index
                          ? "ring-2 ring-blue-500"
                          : ""
                      }`}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <div
                        className={`absolute inset-0 border-2 ${
                          currentImageIndex === index
                            ? "border-blue-500"
                            : "border-transparent hover:border-blue-500"
                        } transition-colors rounded-md z-10`}
                      />
                      <Image
                        src={image}
                        alt={`${device.name} thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="relative flex-1 aspect-square rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${selectedDevice}-${currentImageIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={device.images[currentImageIndex]}
                        alt={`${device.name} - ${currentImageIndex + 1}`}
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                  {/* Overlay gradient for product image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rose/20 to-transparent opacity-50" />
                </motion.div>
              </motion.div>

              {/* Product Info */}
              <motion.div variants={fadeInUp} className="space-y-8">
                <div>
                  <Badge className="mb-3 text-xs px-3 py-1 font-medium bg-blue-100 text-blue-800 border-none">
                    {device.uspBadge}
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    {device.name}
                  </h1>
                  <p className="text-xl text-gray-500 mt-3 leading-relaxed">
                    {device.tagline}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {device.keyFeatures.slice(0, 4).map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mr-3 mt-0.5">
                          <Check className="h-3.5 w-3.5 text-blue-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-blue-200 transition-all duration-300 hover:bg-blue-700"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() =>
                      (window.location.href = "mailto:info@terafence.in")
                    }
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>

                  <motion.button
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 font-medium px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      const datasheetLink =
                        datasheetLinks[selectedDevice] ||
                        "/downloads/datasheet/121.pdf";
                      window.open(datasheetLink, "_blank");
                    }}
                  >
                    <Download className="h-4 w-4" />
                    Download Datasheet
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Sub-Navigation for Sections */}
          <div className="sticky top-32 z-40 w-full border-b bg-white/90 backdrop-blur-md">
            <div className="container mx-auto px-6 flex h-16 items-center justify-between">
              <nav className="flex items-center overflow-x-auto hide-scrollbar py-2 gap-8 text-sm font-medium">
                {[
                  { id: "keyFeatures", label: "Key Features" },
                  { id: "protocols", label: "Protocols" },
                  { id: "techSpecs", label: "Tech Specs" },
                  { id: "resources", label: "Resources" },
                  { id: "support", label: "Support" },
                ].map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`relative transition-colors whitespace-nowrap py-2 ${
                      activeSection === section.id
                        ? "text-blue-600 font-semibold"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {section.label}
                    {activeSection === section.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                        layoutId="sectionIndicator"
                      />
                    )}
                  </a>
                ))}
              </nav>
              <motion.button
                className="hidden md:flex items-center justify-center whitespace-nowrap bg-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  (window.location.href = "mailto:info@terafence.in")
                }
              >
                Get a Quote
              </motion.button>
            </div>
          </div>

          {/* Key Features Section */}
          <section
            id="keyFeatures"
            className="container mx-auto px-6 py-16 scroll-mt-40"
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="space-y-8">
                <div className="inline-block">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {device.name} Features
                  </h2>
                  <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {device.keyFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Image
                  src={`/images/gen2.svg?height=400&width=600`}
                  alt={`${device.name} features`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Dark Contrast Section */}
            <motion.div
              className="mt-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative aspect-square md:aspect-auto md:h-full">
                  <Image
                    src={`/images/gen1.svg?height=400&width=400`}
                    alt={`${device.name} security`}
                    fill
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent mix-blend-multiply" />
                  {/* Decorative security badge overlay */}
                  <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md p-3 rounded-lg">
                    <div className="text-sm font-semibold text-white">
                      Security Certified
                    </div>
                    <div className="text-xs text-blue-200">
                      SSE | 7 Layers | Horizon
                    </div>
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-6">
                    Advanced Security Features
                  </h2>
                  <p className="mb-8 text-blue-100 text-lg leading-relaxed">
                    {device.name} provides industry-leading security features to
                    protect your most sensitive data and communications.
                  </p>
                  <ul className="space-y-5">
                    {device.keyFeatures.slice(0, 3).map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mr-4">
                          <Check className="h-4 w-4 text-blue-300" />
                        </div>
                        <span className="text-blue-50">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    className="mt-10 self-start inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() =>
                      (window.location.href = "mailto:info@terafence.in")
                    }
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Supported Protocols Section */}
          <section
            id="protocols"
            className="container mx-auto px-6 py-16 border-t scroll-mt-40"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Supported Protocols
                  </h2>
                  <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full"></div>
                </div>
                <p className="text-gray-500 md:max-w-md mt-4 md:mt-0">
                  Our device supports all industry-standard protocols to ensure
                  seamless integration with your existing infrastructure.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-100">
                <div className="flex flex-wrap gap-3">
                  {device.supportedProtocols.map((protocol, index) => (
                    <motion.div
                      key={index}
                      className="px-5 py-3 bg-white text-gray-700 rounded-full shadow-sm border border-gray-100 text-sm font-medium hover:shadow-md transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.03, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3, scale: 1.05 }}
                    >
                      {protocol}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Tech Specs Section */}
          <section
            id="techSpecs"
            className="container mx-auto px-6 py-16 border-t scroll-mt-40"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Technical Specifications
                  </h2>
                  <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full"></div>
                </div>
                <p className="text-gray-500 md:max-w-md mt-4 md:mt-0">
                  Industry-leading specifications designed for enterprise
                  performance and reliability.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="w-1/3 font-bold text-gray-900 py-4">
                        Specification
                      </TableHead>
                      <TableHead className="font-bold text-gray-900 py-4">
                        Value
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(device.techSpecs).map(
                      ([key, value], index) => (
                        <motion.tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-blue-50/30"
                          }
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <TableCell className="font-medium border-t border-gray-100 py-4">
                            {key}
                          </TableCell>
                          <TableCell className="border-t border-gray-100 py-4">
                            {value}
                          </TableCell>
                        </motion.tr>
                      )
                    )}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-8 bg-blue-50 rounded-xl p-6 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Download className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">
                    Need more details?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Download our comprehensive technical specifications
                    document.
                  </p>
                </div>
                <motion.button
                  className="whitespace-nowrap px-4 py-2 bg-white text-blue-600 border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download PDF
                </motion.button>
              </div>
            </motion.div>
          </section>

          {/* Resources Section */}
          <section
            id="resources"
            className="container mx-auto px-6 py-16 border-t scroll-mt-40"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Resources
                  </h2>
                  <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full"></div>
                </div>
                <p className="text-gray-500 md:max-w-md mt-4 md:mt-0">
                  Everything you need to get started and make the most of your
                  device.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {device.resources.map((resource, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div>
                      <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                        <Download className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {resource.description}
                      </p>
                    </div>
                    <motion.button
                      className="self-start inline-flex items-center justify-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Download
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Support Section */}
          <section
            id="support"
            className="container mx-auto px-6 py-20 border-t scroll-mt-40"
          >
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl overflow-hidden shadow-xl relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600"></div>
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-200 opacity-30 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-indigo-200 opacity-30 blur-3xl"></div>

              <div className="text-center max-w-3xl mx-auto p-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    Smooth Sailing Guaranteed
                  </h2>
                  <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                    Our dedicated support team is available 24/7 to help you
                    with any questions or issues you may have. We&apos;re
                    committed to your success.
                  </p>
                  <motion.button
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-blue-300/50 transition-all duration-300 hover:bg-blue-700 text-lg"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() =>
                      (window.location.href = "mailto:info@terafence.in")
                    }
                  >
                    GET SUPPORT
                    <ExternalLink className="h-5 w-5 ml-1" />
                  </motion.button>

                  <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                      24/7 Support
                    </span>
                    <span className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                      99.9% Uptime
                    </span>
                    <span className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                      Enterprise SLA
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-b from-gray-200 to-blue-300 py-20 px-6">
            <div className="container mx-auto px-4 text-center max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">
                Go beyond basic security
              </h2>
              <p className="text-xl mb-8">
                Absolute Security. Absolute Control.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-lime-700 px-10 py-4 h-auto text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={() =>
                  (window.location.href = "mailto:info@terafence.in")
                }
              >
                Request a PoC
              </Button>
            </div>
          </section>
        </motion.div>
        <Footer />
      </AnimatePresence>
    </div>
  );
}
