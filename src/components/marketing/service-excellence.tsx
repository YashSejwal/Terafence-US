"use client";

import { useState } from "react";
import Container from "../global/container";
import {
  Shield,
  Check,
  Award,
  Lightbulb,
  Cloud,
  Monitor,
  Network,
  Link2,
} from "lucide-react";

interface ServiceExpertise {
  id: string;
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  features: string[];
}

const ServiceExcellence = () => {
  const expertiseAreas: ServiceExpertise[] = [
    {
      id: "advisory",
      icon: <Lightbulb className="h-16 w-16 text-blue-400" />,
      title: "Advisory & Consulting",
      category: "Strategy & Transformation",
      description:
        "Our advisory practice helps enterprises navigate digital transformation — from IT strategy roadmapping and cloud readiness assessments to compliance advisory and architecture modernization. Every engagement is tied to measurable business outcomes.",
      features: [
        "Data Migration with zero-loss guarantee",
        "Workplace Experience Consulting & change management",
        "Technology Transformation & legacy modernization",
      ],
    },
    {
      id: "cloud",
      icon: <Cloud className="h-16 w-16 text-blue-400" />,
      title: "Cloud Services",
      category: "Multi-Cloud & FinOps",
      description:
        "Certified architects across AWS, Azure, and GCP delivering cloud migration, infrastructure management, and cost optimization. From lift-and-shift to cloud-native re-architecture — with FinOps practices that reduce spend by 30–40%.",
      features: [
        "Multi-cloud migration with automated validation",
        "Container orchestration & serverless platforms",
        "FinOps & cloud cost optimization at scale",
      ],
    },
    {
      id: "workplace",
      icon: <Monitor className="h-16 w-16 text-blue-400" />,
      title: "Workplace Services",
      category: "Digital Workspace & UEM",
      description:
        "End-to-end digital workspace solutions — from VDI deployment and unified endpoint management to AI-powered service desks and zero-trust security. Enabling seamless collaboration for 10,000+ managed endpoints.",
      features: [
        "Unified Endpoint Management across all device types",
        "AI-powered Service Desk with 60% faster resolution",
        "Zero-trust endpoint security with EDR/XDR",
      ],
    },
    {
      id: "network",
      icon: <Network className="h-16 w-16 text-blue-400" />,
      title: "Network Services",
      category: "Enterprise & Tactical Networks",
      description:
        "From campus Wi-Fi 6E and SD-WAN to data center spine-leaf fabrics and military-grade tactical communications. 500+ sites deployed with 99.999% availability and multi-vendor expertise across Cisco, Fortinet, and Juniper.",
      features: [
        "SD-WAN & SASE with application-aware steering",
        "Military-grade encrypted tactical communications",
        "24/7 NOC monitoring with proactive management",
      ],
    },
    {
      id: "integration",
      icon: <Link2 className="h-16 w-16 text-blue-400" />,
      title: "Service Integration",
      category: "SIAM & Multi-Vendor Governance",
      description:
        "Our SIAM practice unifies 50+ vendors under a single governance model with integrated ServiceNow workflows, cross-vendor automation, and real-time SLA dashboards — eliminating finger-pointing and delivering 1M+ tickets handled.",
      features: [
        "SIAM operating model design & implementation",
        "Unified ITSM with cross-vendor automation",
        "Real-time SLA governance & continual improvement",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("advisory");
  const active =
    expertiseAreas.find((e) => e.id === activeTab) || expertiseAreas[0];

  return (
    <div
      className="relative w-full py-8 sm:py-12 bg-gray-900"
      style={{
        backgroundImage: "url('/images/bg/security.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/70"></div>
      <Container>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 rounded-full border border-blue-500/30 mb-4 backdrop-blur-sm">
              <Award className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">
                Proven Service Expertise
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 leading-tight">
              Service{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Excellence
              </span>
            </h2>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/40 shadow-xl">
              <div className="flex flex-wrap gap-2">
                {expertiseAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setActiveTab(area.id)}
                    className={`flex-1 min-w-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 ${
                      activeTab === area.id
                        ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg transform scale-105"
                        : "text-gray-300 hover:text-white hover:bg-gray-700/40"
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-bold text-base sm:text-lg">
                        {area.title}
                      </div>
                      <div className="text-xs sm:text-sm opacity-80 hidden sm:block truncate">
                        {area.category}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700/40 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left - Icon display */}
              <div className="relative bg-gray-800/40 flex items-center justify-center p-6 sm:p-8 lg:p-10">
                <div className="relative w-full max-w-sm">
                  <div className="relative bg-white/8 backdrop-blur-sm rounded-3xl p-6 border border-gray-600/30">
                    <div className="relative w-full h-36 sm:h-44 lg:h-52 flex items-center justify-center">
                      {active.icon}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-green-500/15 rounded-3xl blur-2xl -z-10"></div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="space-y-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/15 rounded-lg border border-green-500/30 mb-3 backdrop-blur-sm">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-semibold text-green-300">
                        Enterprise Grade
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                      {active.title}
                    </h3>

                    <p className="text-lg sm:text-xl text-blue-300 font-semibold">
                      {active.category}
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    {active.description}
                  </p>

                  {active.features && (
                    <div className="space-y-3">
                      <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                        <Shield className="w-5 h-5 text-blue-400" />
                        Key Capabilities
                      </h4>

                      <div className="space-y-2">
                        {active.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 group"
                          >
                            <div className="flex-shrink-0 w-5 h-5 bg-green-500/15 rounded-full flex items-center justify-center mt-1 group-hover:bg-green-500/25 transition-colors">
                              <Check className="w-3.5 h-3.5 text-green-400" />
                            </div>
                            <span className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceExcellence;