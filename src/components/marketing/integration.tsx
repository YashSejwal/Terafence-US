"use client";

import { cn } from "@/lib";
import { LayersIcon, WifiIcon, ShieldIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
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

  // Auto rotate through features
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

  return (
    <div className="relative w-full py-16 md:py-20 overflow-hidden">
      <Container className="relative z-10">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600">
                Terafence&apos;s Device Lineup
              </span>
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              Next-generation security solutions powered by advanced FPGA
              technology
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 py-2">
            <motion.div
              ref={containerRef}
              className="relative h-80 md:h-96 aspect-square select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="absolute inset-0 rounded-xl overflow-hidden">
                <motion.div
                  className="absolute inset-0 rounded-xl overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%)",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      "0 10px 30px -5px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(255,255,255,0.5)",
                    border: "1px solid rgba(255,255,255,0.5)",
                  }}
                >
                  <motion.div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      key={activeDevice.name}
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        y: [0, -5, 0],
                      }}
                      transition={{
                        y: {
                          duration: 3,
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
                        className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-xl"
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center md:items-start max-w-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="relative mb-4"
                key={`title-${activeDeviceIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: activeDevice.color }}
                >
                  {activeDevice.name}
                </motion.h3>
                <motion.div
                  className="h-1 w-16 mt-1"
                  style={{ backgroundColor: activeDevice.color }}
                  layoutId="titleUnderline"
                />
              </motion.div>

              <motion.p
                className="text-gray-700 text-lg mb-6 text-center md:text-left"
                key={`desc-${activeDeviceIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {activeDevice.description}
              </motion.p>

              <motion.div
                className="w-full mb-8 bg-gray-50 rounded-xl p-4 border border-gray-100"
                key={`features-section-${activeDeviceIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex space-x-1 mb-4">
                  {activeDevice.features.map((_, idx) => (
                    <motion.button
                      key={idx}
                      className={cn(
                        "h-1.5 flex-1 rounded-full",
                        idx === activeFeature ? "opacity-100" : "opacity-30"
                      )}
                      style={{ backgroundColor: activeDevice.color }}
                      onClick={() => {
                        setActiveFeature(idx);
                        setUserInteracted(true);
                      }}
                      whileHover={{ opacity: 0.8 }}
                    />
                  ))}
                </div>

                <motion.div
                  className="relative h-24"
                  key={`feature-${activeDeviceIndex}-${activeFeature}`}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`feature-content-${activeDeviceIndex}-${activeFeature}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0"
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                        style={{
                          backgroundColor: `${activeDevice.color}15`,
                          border: `1px solid ${activeDevice.color}30`,
                        }}
                      >
                        {activeDevice.features[activeFeature].icon === 0 && (
                          <ShieldIcon
                            className="w-6 h-6"
                            style={{ color: activeDevice.color }}
                          />
                        )}
                        {activeDevice.features[activeFeature].icon === 1 && (
                          <WifiIcon
                            className="w-6 h-6"
                            style={{ color: activeDevice.color }}
                          />
                        )}
                        {activeDevice.features[activeFeature].icon === 2 && (
                          <LayersIcon
                            className="w-6 h-6"
                            style={{ color: activeDevice.color }}
                          />
                        )}
                      </div>

                      <h4 className="font-semibold text-gray-900 mb-1">
                        {activeDevice.features[activeFeature].name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {activeDevice.features[activeFeature].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              <Card className="w-full mb-6 bg-white border-gray-100 shadow-sm">
                <CardContent className="p-3 flex justify-between items-center">
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
                          "text-xs font-medium transition-all duration-300",
                          idx === activeDeviceIndex
                            ? "opacity-100"
                            : "opacity-50"
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
                </CardContent>
              </Card>

              <Button
                className="w-full font-medium group"
                style={{
                  background: activeDevice.color,
                  boxShadow: `0 2px 8px ${activeDevice.color}30`,
                }}
                onClick={() => setUserInteracted(true)}
              >
                <Link href="/devices" className="text-neutral-100">
                  <span>Explore Technology</span>
                </Link>
                <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Integration;
