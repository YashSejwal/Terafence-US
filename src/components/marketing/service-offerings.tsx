"use client";

import { useState } from "react";
import Container from "../global/container";
import Image from "next/image";

interface ServiceCard {
  id: number;
  image: string;
  title: string;
  description: string;
}

const ServiceOfferings = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const serviceCards: ServiceCard[] = [
    {
      id: 1,
      image: "/images/services/advisory/hero.png",
      title: "Data Migration",
      description:
        "Zero-loss data migration across cloud, on-premises, and hybrid environments with real-time replication and comprehensive validation.",
    },
    {
      id: 2,
      image: "/images/services/advisory/case-study.png",
      title: "Technology Transformation",
      description:
        "End-to-end digital transformation — legacy modernization, cloud-native strategy, agile adoption, and DevOps enablement for enterprises.",
    },
    {
      id: 3,
      image: "/images/services/cloud/hero.png",
      title: "Cloud Migration & Management",
      description:
        "Multi-cloud architecture across AWS, Azure, and GCP with automated failover, CSPM integration, and FinOps cost optimization.",
    },
    {
      id: 4,
      image: "/images/services/workplace/hero.png",
      title: "Digital Workspace",
      description:
        "VDI deployment, unified endpoint management, collaboration platforms, and AI-powered service desks for the modern workforce.",
    },
    {
      id: 5,
      image: "/images/services/network/hero.png",
      title: "Enterprise Networking",
      description:
        "Campus Wi-Fi 6E, SD-WAN, data center spine-leaf fabrics, and military-grade tactical communications across 500+ deployed sites.",
    },
    {
      id: 6,
      image: "/images/services/cybersecurity/hero.png",
      title: "SOC & Threat Intelligence",
      description:
        "24/7 Security Operations Center with AI-driven SIEM, threat hunting, incident response, and digital forensics for critical infrastructure.",
    },
    {
      id: 7,
      image: "/images/services/cybersecurity/case-study.png",
      title: "OT & Industrial Security",
      description:
        "Hardware data diodes, SCADA/DCS protection, protocol analysis, and air-gapped security for power plants, water utilities, and manufacturing.",
    },
    {
      id: 8,
      image: "/images/services/integration/hero.png",
      title: "SIAM & Vendor Management",
      description:
        "Multi-vendor governance with unified ServiceNow, cross-vendor automation, and real-time SLA dashboards across 50+ integrated vendors.",
    },
    {
      id: 9,
      image: "/images/services/integration/case-study.png",
      title: "Automation & Orchestration",
      description:
        "RPA deployment, auto-remediation workflows, self-service portals, and ChatOps — eliminating manual handoffs across service towers.",
    },
    {
      id: 10,
      image: "/images/services/network/case-study.png",
      title: "Managed Network Services",
      description:
        "Fully managed networking on OpEx model — managed routers, firewalls, Wi-Fi, NOC monitoring, and complete lifecycle management.",
    },
    {
      id: 11,
      image: "/images/services/workplace/case-study.png",
      title: "Workplace Analytics",
      description:
        "Data-driven workspace optimization — usage analytics, adoption metrics, cost-per-seat analysis, and digital experience scoring.",
    },
    {
      id: 12,
      image: "/images/services/cloud/case-study.png",
      title: "Cloud Security & Compliance",
      description:
        "Zero-trust CSPM, identity & access management, encryption at rest and in transit, and continuous compliance monitoring across cloud environments.",
    },
  ];

  const totalSlides = Math.ceil(serviceCards.length / 5);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Delivering Reliable{" "}
              <span className="text-blue-600">IT Services</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From advisory and cloud to cybersecurity and service
              integration — comprehensive IT capabilities that protect,
              transform, and optimize enterprise operations.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden mb-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
                    {serviceCards
                      .slice(slideIndex * 5, slideIndex * 5 + 5)
                      .map((card) => (
                        <div
                          key={card.id}
                          className="relative group"
                          onMouseEnter={() => setHoveredCard(card.id)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <div className="relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                              <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                              <div
                                className={`absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/60 to-blue-600/30 transition-opacity duration-500 ${
                                  hoveredCard === card.id
                                    ? "opacity-100"
                                    : "opacity-0"
                                }`}
                              ></div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                              <div
                                className={`transform transition-all duration-500 ease-in-out ${
                                  hoveredCard === card.id
                                    ? "translate-y-0 opacity-0"
                                    : "translate-y-0 opacity-100"
                                }`}
                              >
                                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                                  {card.title}
                                </h3>
                              </div>

                              <div
                                className={`absolute inset-x-6 bottom-6 transform transition-all duration-500 ease-in-out ${
                                  hoveredCard === card.id
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-8 opacity-0"
                                }`}
                              >
                                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-3">
                                  {card.title}
                                </h3>
                                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                                  {card.description}
                                </p>
                              </div>
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center space-x-3">
            <button
              onClick={() => goToSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className={`p-2 rounded-full transition-all duration-300 ${
                currentSlide === 0
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-10 bg-blue-600"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              ></button>
            ))}

            <button
              onClick={() =>
                goToSlide(Math.min(totalSlides - 1, currentSlide + 1))
              }
              disabled={currentSlide === totalSlides - 1}
              className={`p-2 rounded-full transition-all duration-300 ${
                currentSlide === totalSlides - 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceOfferings;