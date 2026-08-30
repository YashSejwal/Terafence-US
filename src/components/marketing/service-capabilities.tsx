"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceUseCase {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  href: string;
  features: string[];
}

const serviceUseCases: ServiceUseCase[] = [
  {
    id: 1,
    name: "Data Migration",
    title: "Seamless, Secure Data Migration",
    description:
      "Move mission-critical data across platforms — cloud, on-premises, or hybrid — with zero loss and minimal downtime. Our ETL expertise covers AWS, Azure, GCP, and legacy mainframes with comprehensive validation at every stage.",
    image: "/images/services/advisory/case-study.png",
    href: "/services/advisory",
    features: [
      "Cloud & On-Prem Migration",
      "Real-time Replication",
      "Data Integrity Validation",
      "Rollback Planning",
    ],
  },
  {
    id: 2,
    name: "Cloud Infra",
    title: "Multi-Cloud Infrastructure & Management",
    description:
      "Architect, migrate, and manage cloud environments across AWS, Azure, and GCP. From IaaS provisioning to container orchestration and serverless platforms — with FinOps practices that reduce spend by 30–40%.",
    image: "/images/services/cloud/case-study.png",
    href: "/services/cloud",
    features: [
      "AWS / Azure / GCP",
      "Container Orchestration",
      "Auto-Scaling & DR",
      "FinOps Optimization",
    ],
  },
  {
    id: 3,
    name: "Endpoint Mgmt",
    title: "Unified Endpoint & Workspace Management",
    description:
      "Centralized device lifecycle management across laptops, desktops, mobiles, and IoT endpoints. Deploy VDI, manage patches, track assets, and enforce zero-trust security policies — all from a single pane of glass.",
    image: "/images/services/workplace/case-study.png",
    href: "/services/workplace",
    features: [
      "MDM / UEM",
      "Patch Management",
      "VDI Deployment",
      "Zero-Trust Enforcement",
    ],
  },
  {
    id: 4,
    name: "SD-WAN",
    title: "SD-WAN & Enterprise Network Design",
    description:
      "Intelligent wide-area networking with multi-link, application steering, and zero-touch deployment. From campus Wi-Fi 6E to data center spine-leaf fabrics and military-grade tactical communications.",
    image: "/images/services/network/case-study.png",
    href: "/services/network",
    features: [
      "Multi-Link SD-WAN",
      "Application Steering",
      "Wi-Fi 6E / 7",
      "Tactical Networks",
    ],
  },
  {
    id: 5,
    name: "SOC Ops",
    title: "24/7 Security Operations Center",
    description:
      "Round-the-clock threat monitoring, detection, and incident response with AI-driven SIEM analytics. Our certified SOC analysts provide threat hunting, digital forensics, and proactive threat intelligence for critical infrastructure.",
    image: "/images/services/cybersecurity/case-study.png",
    href: "/services/cybersecurity",
    features: [
      "SIEM Management",
      "Threat Hunting",
      "Incident Response",
      "Digital Forensics",
    ],
  },
  {
    id: 6,
    name: "OT Security",
    title: "OT/ICS & Industrial Cybersecurity",
    description:
      "Protecting operational technology environments with hardware data diodes, SCADA/DCS security, protocol analysis, and anomaly detection. Air-gapped security for power plants, water utilities, and manufacturing facilities.",
    image: "/images/services/cybersecurity/hero.png",
    href: "/services/cybersecurity",
    features: [
      "Data Diode Solutions",
      "SCADA/DCS Security",
      "Asset Discovery",
      "Air-Gap Compliance",
    ],
  },
  {
    id: 7,
    name: "SIAM",
    title: "Service Integration & Multi-Vendor Management",
    description:
      "Unify all IT vendors under a single governance model with our SIAM framework. Integrated processes, unified ITSM workflows, cross-vendor automation, and real-time SLA dashboards — eliminating finger-pointing and blind spots.",
    image: "/images/services/integration/case-study.png",
    href: "/services/integration",
    features: [
      "SIAM Framework",
      "Unified ServiceNow",
      "Cross-Vendor Automation",
      "SLA Governance",
    ],
  },
  {
    id: 8,
    name: "Cost Optimization",
    title: "FinOps & IT Cost Optimization",
    description:
      "Reduce IT spend by 30–40% through cloud FinOps practices, license rationalization, vendor consolidation, and TCO analysis. We identify hidden costs and deliver actionable recommendations that protect performance while cutting waste.",
    image: "/images/services/advisory/hero.png",
    href: "/services/advisory",
    features: [
      "Cloud FinOps",
      "License Rationalization",
      "Vendor Consolidation",
      "TCO Analysis",
    ],
  },
];

const ServiceCapabilities = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = serviceUseCases[activeTab];

  return (
    <div
      className="relative w-full py-12 sm:py-16 bg-gray-900"
      style={{
        backgroundImage: "url('/images/bg/uc.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            IT Services for{" "}
            <span className="text-blue-400">Every Challenge</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive capabilities across advisory, cloud, network,
            security, and service management
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-6 sm:mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-1.5 border border-gray-700/50">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1.5">
              {serviceUseCases.map((uc, index) => (
                <button
                  key={uc.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative px-2 py-2.5 sm:px-3 sm:py-3 rounded-lg text-xs font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  <div className="text-center">
                    <div className="font-bold leading-tight">{uc.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-all duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
              </div>

              <div className="absolute top-4 left-4">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/20">
                  <span className="text-white font-semibold text-sm">
                    {current.name}
                  </span>
                </div>
              </div>

              <div className="absolute top-4 right-4">
                <div className="bg-green-600/80 backdrop-blur-sm rounded-full p-2 border border-green-400/30">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-4 sm:space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 rounded-full border border-blue-500/30">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-blue-300">
                  SERVICE CAPABILITY
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                {current.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-4">
              {current.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-base font-semibold text-white flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Key Highlights
              </h4>

              <div className="grid grid-cols-2 gap-2">
                {current.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-xs text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3">
              <Link href={current.href}>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                  <span>Explore Service</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCapabilities;