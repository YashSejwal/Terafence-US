import Container from "../global/container";
import Image from "next/image";

const ServiceDelivery = () => {
  return (
    <div className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <Container>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                Service Delivery
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
              Our Service Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven delivery capabilities backed by numbers
            </p>
          </div>

          {/* Asymmetric Grid */}
          <div className="space-y-6">
            {/* First Row - Featured + stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Featured Large Card */}
              <div className="md:col-span-2 relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <Image
                  src="/images/services/cloud/hero.png"
                  alt="Service Delivery Framework"
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
                    Advisory to Operations <br />
                    <span className="text-blue-300">
                      — End-to-End IT Services
                    </span>
                  </div>
                </div>
              </div>

              {/* Stat cards */}
              <div className="space-y-6">
                <div className="relative h-36 lg:h-40 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Image
                    src="/images/services/advisory/hero.png"
                    alt="Enterprises Served"
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
                      200+
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Enterprises Served
                    </div>
                  </div>
                </div>

                <div className="relative h-32 lg:h-36 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Image
                    src="/images/services/integration/hero.png"
                    alt="ITIL Certified"
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
                      250+
                    </div>
                    <div className="text-sm font-semibold text-white">
                      ITIL Certified Resources
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - 4 capability cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <div className="relative h-40 sm:h-44 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Image
                  src="/images/services/cybersecurity/hero.png"
                  alt="SOC Operations"
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
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white">
                    SOC Operations
                  </div>
                </div>
              </div>

              <div className="relative h-40 sm:h-44 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Image
                  src="/images/services/network/hero.png"
                  alt="Sites Deployed"
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
                    <div className="text-xl sm:text-2xl font-bold text-blue-300 mb-1">
                      500+
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-white">
                      Sites Deployed
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-40 sm:h-44 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Image
                  src="/images/services/cloud/case-study.png"
                  alt="Cloud Workloads"
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
                    <div className="text-xl sm:text-2xl font-bold text-blue-300 mb-1">
                      99.99%
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-white">
                      Uptime SLA
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-40 sm:h-44 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Image
                  src="/images/services/workplace/hero.png"
                  alt="Tickets Handled"
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
                    1M+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white">
                    Tickets Handled
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

export default ServiceDelivery;