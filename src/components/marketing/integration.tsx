"use client";

import { cn } from "@/lib";
import { LayersIcon, WifiIcon, ShieldIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Container from "../global/container";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface DeviceFeature {
  name: string;
  description: string;
  icon: number;
}

interface Device {
  image: string;
  name: string;
  description: string;
  color: string;
  features: DeviceFeature[];
}

const DEVICES: Device[] = [
  {
    image: "/images/devices/1-urp/image-1.png",
    name: "1-URP",
    description: "Ultimate security solution - powered by FPGA",
    color: "#F72585",
    features: [
      {
        name: "Galvanic Separation",
        description: "Total galvanic network separation",
        icon: 0,
      },
      {
        name: "GUI for Configuration",
        description: "HTTPS WEB GUI for configuration",
        icon: 1,
      },
      {
        name: "Powered by FPGA",
        description: "Terafence proprietary hardware chip (FPGA)",
        icon: 2,
      },
    ],
  },
  {
    image: "/images/devices/bsg/image-1.png",
    name: "BSG",
    description: "Enterprise-grade protection for critical systems",
    color: "#3A0CA3",
    features: [
      {
        name: "Galvanic Separation",
        description: "Total galvanic network separation",
        icon: 0,
      },
      {
        name: "Transparency",
        description: "Totally transparent to the network",
        icon: 1,
      },
      {
        name: "Protocol Agnostic",
        description: "TCP/IP protocol agnostic",
        icon: 2,
      },
    ],
  },
  {
    image: "/images/devices/121/image-1.png",
    name: "121",
    description: "Device with unparalleled security features",
    color: "#F72585",
    features: [
      {
        name: "File Transfer",
        description: "Multiple file transfer protocols",
        icon: 0,
      },
      {
        name: "Easy Integration",
        description: "Protocol conversion with ease",
        icon: 1,
      },
      {
        name: "Powered by FPGA",
        description: "Terafence proprietary hardware chip (FPGA)",
        icon: 2,
      },
    ],
  },
  {
    image: "/images/devices/vsecure/image-1.png",
    name: "VSecure",
    description: "Advanced Device for Secure CCTV Networks",
    color: "#7209B7",
    features: [
      {
        name: "Galvanic Separation",
        description: "Total galvanic network separation",
        icon: 0,
      },
      {
        name: "Unidirectional Data Transfer",
        description: "Unidirectional data transfer with no return path",
        icon: 1,
      },
      {
        name: "Powered by FPGA",
        description: "Terafence proprietary FPGA hardware chip",
        icon: 2,
      },
    ],
  },
  {
    image: "/images/devices/mbsecure/image-1.png",
    name: "MBSecure+",
    description: "Next-gen security platform for evolving threats",
    color: "#4CC9F0",
    features: [
      {
        name: "Endpoint Protection",
        description: "Comprehensive device security",
        icon: 0,
      },
      {
        name: "Intrusion Prevention",
        description: "Proactive threat blocking",
        icon: 1,
      },
      {
        name: "Data Protection",
        description: "End-to-end data protection",
        icon: 2,
      },
    ],
  },
];

const Integration = () => {
  const [activeDeviceIndex, setActiveDeviceIndex] = useState<number>(0);
  const activeDevice = DEVICES[activeDeviceIndex];
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const [activeFeature, setActiveFeature] = useState<number>(0);
  
  // Device auto-switching effect with user interaction control
  useEffect(() => {
    let switchTimer: NodeJS.Timeout | undefined;

    if (!userInteracted) {
      switchTimer = setInterval(() => {
        setActiveDeviceIndex((prev) => (prev + 1) % DEVICES.length);
      }, 5000);
    }

    return () => {
      if (switchTimer) clearInterval(switchTimer);
    };
  }, [userInteracted]);

  // Auto rotate through features sequentially
  useEffect(() => {
    let featureTimer: NodeJS.Timeout | undefined;

    if (!userInteracted) {
      featureTimer = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % activeDevice.features.length);
      }, 3000);
    }

    return () => {
      if (featureTimer) clearInterval(featureTimer);
    };
  }, [userInteracted, activeDevice.features.length]);

  // Reset to first feature when device changes
  useEffect(() => {
    setActiveFeature(0);
  }, [activeDeviceIndex]);

  // Reset user interaction flag after a period of inactivity
  useEffect(() => {
    let inactivityTimer: NodeJS.Timeout | undefined;

    if (userInteracted) {
      inactivityTimer = setTimeout(() => {
        setUserInteracted(false);
      }, 15000); // Reset after 15 seconds of inactivity
    }

    return () => {
      if (inactivityTimer) clearTimeout(inactivityTimer);
    };
  }, [userInteracted]);

  const handleDeviceChange = (index: number) => {
    setActiveDeviceIndex(index);
    setUserInteracted(true);
    setActiveFeature(0);
  };

  const handleFeatureChange = (index: number) => {
    setActiveFeature(index);
    setUserInteracted(true);
  };

  // Component to render the appropriate icon based on the icon type
  const renderIcon = (iconType: number, color: string) => {
    if (iconType === 0) return <ShieldIcon className="w-5 h-5" style={{ color }} />;
    if (iconType === 1) return <WifiIcon className="w-5 h-5" style={{ color }} />;
    if (iconType === 2) return <LayersIcon className="w-5 h-5" style={{ color }} />;
    return null;
  };

  return (
    <div className="relative w-full py-12 mb-24 md:py-16">
      <Container className="relative z-10">
        <div className="flex flex-col justify-center items-center">
          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-clip-text text-sky-700">
                Terafence&apos;s Device Lineup
              </span>
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Next-generation security solutions powered by advanced FPGA technology
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 w-full">
            {/* Device Image */}
            <div className="relative h-72 md:h-96 aspect-square lg:w-1/2 flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 rounded-xl overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 100%)",
                    backdropFilter: "blur(5px)",
                    boxShadow: "0 8px 24px -4px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.3)",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`device-image-${activeDeviceIndex}`}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, y: [0, -8, 0] }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{
                          y: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                          opacity: { duration: 0.3 },
                        }}
                      >
                        <Image
                          src={activeDevice.image}
                          alt={activeDevice.name}
                          width={500}
                          height={500}
                          priority
                          className="w-90 h-90 object-contain drop-shadow-lg"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Device Details */}
            <div className="lg:w-1/2 w-full flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`device-details-${activeDeviceIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  {/* Device Title */}
                  <div className="mb-5 text-center lg:text-left">
                    <h3
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: activeDevice.color }}
                    >
                      {activeDevice.name}
                    </h3>
                    <motion.div
                      className="h-1 w-16 mt-2 mx-auto lg:mx-0"
                      style={{ backgroundColor: activeDevice.color }}
                      layoutId="titleUnderline"
                    />
                  </div>

                  {/* Device Description */}
                  <p className="text-gray-700 text-base md:text-lg mb-5 text-center lg:text-left">
                    {activeDevice.description}
                  </p>

                  {/* Features */}
                  <Card className="w-full mb-6 border border-gray-100 bg-white shadow-sm rounded-lg">
                    <CardContent className="p-5">
                      {/* Feature Tabs */}
                      <div className="flex space-x-2 mb-5">
                        {activeDevice.features.map((_, idx) => (
                          <motion.button
                            key={idx}
                            className={cn(
                              "h-1.5 flex-1 rounded-full transition-opacity",
                              idx === activeFeature ? "opacity-100" : "opacity-30"
                            )}
                            style={{ backgroundColor: activeDevice.color }}
                            onClick={() => handleFeatureChange(idx)}
                            whileHover={{ opacity: 0.8 }}
                          />
                        ))}
                      </div>

                      {/* Feature Content */}
                      <div className="relative h-28">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={`feature-content-${activeDeviceIndex}-${activeFeature}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 flex items-start space-x-4"
                          >
                            <div
                              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                              style={{
                                backgroundColor: `${activeDevice.color}15`,
                                border: `1px solid ${activeDevice.color}30`,
                              }}
                            >
                              {renderIcon(
                                activeDevice.features[activeFeature].icon,
                                activeDevice.color
                              )}
                            </div>

                            <div>
                              <p className="font-medium text-gray-900 text-base md:text-lg">
                                {activeDevice.features[activeFeature].name}
                              </p>
                              <p className="text-sm md:text-base text-gray-600 mt-2">
                                {activeDevice.features[activeFeature].description}
                              </p>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Device Navigation */}
                  <Card className="w-full mb-6 bg-white border-gray-100 shadow-sm rounded-lg">
                    <CardContent className="p-3">
                      <div className="flex">
                        {DEVICES.map((device, idx) => (
                          <motion.button
                            key={idx}
                            className="relative flex-1 h-12 px-1 flex items-center justify-center"
                            onClick={() => handleDeviceChange(idx)}
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                          >
                            <span
                              className={cn(
                                "text-sm font-medium transition-colors",
                                idx === activeDeviceIndex ? "opacity-100" : "opacity-50"
                              )}
                              style={{ color: device.color }}
                            >
                              {device.name}
                            </span>

                            {idx === activeDeviceIndex && (
                              <motion.div
                                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                                layoutId="activeDeviceIndicator"
                                style={{ backgroundColor: device.color }}
                                transition={{
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 30,
                                }}
                              />
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA Button */}
                  <Button
                    className="w-full font-medium group"
                    style={{
                      background: activeDevice.color,
                      boxShadow: `0 2px 4px ${activeDevice.color}30`,
                    }}
                  >
                    <Link href="/devices" className="text-white flex items-center">
                      <span className="text-sm">Explore Technology</span>
                      <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Integration;