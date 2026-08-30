"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb,
  Cloud,
  Monitor,
  Network,
  Shield,
  Link2,
  ArrowRight,
} from "lucide-react";

interface ServiceData {
  id: number;
  icon: React.ReactNode;
  name: string;
  href: string;
  bgImage: string;
  description: string;
}

const servicesData: ServiceData[] = [
  {
    id: 1,
    icon: <Lightbulb className="h-7 w-7 text-blue-600" />,
    name: "Advisory & Consulting",
    href: "/services/advisory",
    bgImage: "/images/services/advisory/hero.png",
    description:
      "Strategic IT advisory covering data migration, workplace experience consulting, technology transformation, and cost optimization. We help enterprises navigate complex IT landscapes — aligning technology with business goals, reducing risk, and driving measurable outcomes across defense, government, and enterprise sectors.",
  },
  {
    id: 2,
    icon: <Cloud className="h-7 w-7 text-blue-600" />,
    name: "Cloud Services",
    href: "/services/cloud",
    bgImage: "/images/services/cloud/hero.png",
    description:
      "Multi-cloud architecture, migration, and managed operations across AWS, Azure, and GCP. From lift-and-shift to cloud-native transformation, we deliver secure, optimized, and cost-efficient cloud environments — with FinOps practices that reduce spend by 30–40% without performance trade-offs.",
  },
  {
    id: 3,
    icon: <Monitor className="h-7 w-7 text-blue-600" />,
    name: "Workplace Services",
    href: "/services/workplace",
    bgImage: "/images/services/workplace/hero.png",
    description:
      "Digital workspace transformation for the modern workforce — unified endpoint management, collaboration platforms, AI-powered service desks, and zero-trust endpoint security. We design and deploy workplace solutions that enable seamless collaboration from anywhere while keeping every device secure.",
  },
  {
    id: 4,
    icon: <Network className="h-7 w-7 text-blue-600" />,
    name: "Network Services",
    href: "/services/network",
    bgImage: "/images/services/network/hero.png",
    description:
      "Enterprise and tactical network infrastructure — from campus LAN and SD-WAN to data center spine-leaf fabrics and military-grade encrypted communications. Our certified engineers design networks that scale with your needs while maintaining zero-trust security posture across 500+ deployed sites.",
  },
  {
    id: 5,
    icon: <Shield className="h-7 w-7 text-blue-600" />,
    name: "Cybersecurity",
    href: "/services/cybersecurity",
    bgImage: "/images/services/cybersecurity/hero.png",
    description:
      "24/7 SOC operations, hardware data diode solutions, OT/ICS security, penetration testing, and threat intelligence. From real-time monitoring to air-gapped network protection, we deliver defense-in-depth cybersecurity for India's most critical environments — defense, power, water, and government infrastructure.",
  },
  {
    id: 6,
    icon: <Link2 className="h-7 w-7 text-blue-600" />,
    name: "Service Integration",
    href: "/services/integration",
    bgImage: "/images/services/integration/hero.png",
    description:
      "SIAM framework implementation that unifies multi-vendor IT services under a single governance model. We integrate processes, tools, and workflows across all service towers — delivering end-to-end accountability, consistent SLAs, and automation-first operations with 50+ vendors managed and 1M+ tickets handled.",
  },
];

const ServicePortfolio = () => {
  const [activeService, setActiveService] = useState(0);
  const currentService = servicesData[activeService];

  return (
    <div className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            End-to-End IT &{" "}
            <span className="text-blue-600">Security Services</span>
          </h2>
        </div>

        {/* Service Icons Grid */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {servicesData.map((service, index) => (
              <div key={service.id} className="group">
                <button
                  onClick={() => setActiveService(index)}
                  className={`relative w-full p-4 sm:p-6 bg-white rounded-xl border transition-all duration-300 hover:shadow-lg ${
                    index === activeService
                      ? "border-blue-500 shadow-md ring-2 ring-blue-100 scale-105"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div className="relative h-12 sm:h-16 flex flex-col items-center justify-center gap-2">
                    {service.icon}
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 text-center leading-tight">
                      {service.name}
                    </span>
                  </div>

                  {index === activeService && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-1 bg-blue-600 rounded-full"></div>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Service Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">
                  OUR SERVICES
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {currentService.name}
              </h3>
            </div>

            <div className="relative pl-6 border-l-2 border-blue-600">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {currentService.description}
              </p>
            </div>

            <div className="pt-2">
              <Link href={currentService.href}>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Service Showcase */}
          <div className="relative">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0">
                <Image
                  src={currentService.bgImage}
                  alt={`${currentService.name} showcase`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePortfolio;