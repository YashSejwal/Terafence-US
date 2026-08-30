import Container from "../global/container";
import Image from "next/image";

const TerafencePlatform = () => {
  return (
    <div className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <Container>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                Platform Overview
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
              The Terafence Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solution trusted by organizations worldwide
            </p>
          </div>

          {/* Asymmetric Grid Layout - Different from reference */}
          <div className="space-y-6">
            {/* First Row - 3 cards with different heights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Featured Large Card - Left */}
              <div className="md:col-span-2 relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <Image
                  src="/images/platform/2.png"
                  alt="IT to OT Platform"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "#12192b", opacity: 0.85 }}
                ></div>
                <div className="absolute inset-0 flex flex-col justify-center p-8">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                    From Core to Edge <br />
                    <span className="text-blue-300">
                      {" "}
                      — Absolute One-Way Data Flow
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Card - Right */}
              <div className="space-y-6">
                <div className="relative h-36 lg:h-40 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Image
                    src="/images/platform/1.png"
                    alt="Global Customers"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "#12192b", opacity: 0.85 }}
                  ></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <div className="text-3xl sm:text-4xl font-bold text-blue-300 mb-1">
                      100+
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Customers Worldwide
                    </div>
                  </div>
                </div>

                <div className="relative h-32 lg:h-36 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Image
                    src="/images/platform/3.png"
                    alt="Technology Partners"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "#12192b", opacity: 0.85 }}
                  ></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-300 mb-1">
                      50+
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Technology Partners
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - Staggered 4 cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <div className="relative h-40 sm:h-44 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Image
                  src="/images/platform/4.png"
                  alt="Endpoint Certification"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "#12192b", opacity: 0.85 }}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-300 mb-1">
                    Multiple
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white">
                    Certifications Received
                  </div>
                </div>
              </div>

              <div className="relative h-40 sm:h-44 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Image
                  src="/images/platform/5.png"
                  alt="Air-Gapped Networks"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "#12192b", opacity: 0.85 }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="text-sm sm:text-base font-semibold text-white">
                      Air-Gapped
                      <br />
                      Networks
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-40 sm:h-44 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Image
                  src="/images/platform/6.png"
                  alt="Products Growing"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "#12192b", opacity: 0.85 }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="text-sm sm:text-base font-semibold text-white">
                      FPGA-Based
                      <br /> Data Diode
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-40 sm:h-44 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Image
                  src="/images/platform/7.png"
                  alt="Certified Professionals"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "#12192b", opacity: 0.85 }}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-300 mb-1">
                    We do
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white">
                    Reliable Innovations!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TerafencePlatform;
