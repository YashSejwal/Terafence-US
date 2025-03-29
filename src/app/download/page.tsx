"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ResourceCard from "@/app/download/components/resource-card";
import FilterSidebar from "@/app/download/components/filter-sidebar";
import { resources } from "@/app/download/data/resources";
import { Resource, ResourceType, Product } from "./types";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";

export default function DownloadPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<ResourceType[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [filteredResources, setFilteredResources] =
    useState<Resource[]>(resources);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Filter resources based on search query and selected filters
  useEffect(() => {
    let result = resources;

    // Filter by search query
    if (searchQuery) {
      result = result.filter((resource) =>
        resource.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by resource type
    if (selectedTypes.length > 0) {
      result = result.filter((resource) =>
        selectedTypes.includes(resource.type)
      );
    }

    // Filter by product
    if (selectedProducts.length > 0) {
      result = result.filter((resource) =>
        selectedProducts.includes(resource.product)
      );
    }

    setFilteredResources(result);
  }, [searchQuery, selectedTypes, selectedProducts]);

  const clearAllFilters = () => {
    setSelectedTypes([]);
    setSelectedProducts([]);
    setSearchQuery("");
  };

  const toggleType = (type: ResourceType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleProduct = (product: Product) => {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <div className="relative overflow-hidden bg-gradient-to-br from-[#051b33] via-[#0A2540] to-[#041426] text-white pt-16 pb-20 md:pt-20 md:pb-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#081b2f] opacity-40">
            <div className="h-full w-full bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-20"></div>
          </div>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(32,87,151,0.05) 70%, transparent 100%)",
                width: `${300 + i * 80}px`,
                height: `${300 + i * 80}px`,
                top: `${Math.random() * 80 - 20}%`,
                left: `${Math.random() * 100 - 20}%`,
              }}
            ></div>
          ))}
        </div>

        <div className="container relative mx-auto px-6 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-3/5 z-10">
              <div className="inline-block mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-1.5 rounded-full text-sm font-semibold">
                Terafence&apos;s Resources & Solutions
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Secure Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Critical
                </span>{" "}
                Infrastructure
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Explore our comprehensive resources for protecting OT/IT
                networks and ensuring uninterrupted operations for critical
                infrastructure.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    const resourcesElement =
                      document.getElementById("resources");
                    if (resourcesElement) {
                      resourcesElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-medium shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1"
                >
                  Browse Resources
                </button>
                <a
                  href="mailto:info@terafence.in"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-medium hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 inline-block text-center"
                >
                  Request Demo
                </a>
              </div>
            </div>

            <div className="md:w-2/5 z-10">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-[#0e3054] to-[#051b31] p-1 rounded-2xl shadow-2xl">
                  <div className="bg-gradient-to-br from-[#0A2540] to-[#041426] rounded-xl overflow-hidden p-6">
                    <div className="p-4 border-b border-white/10 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 mr-4"></div>
                      <div className="text-sm text-blue-100/70 font-medium">
                        Security Overview
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 font-medium">
                          Network Status
                        </span>
                        <span className="text-sm bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                          Protected
                        </span>
                      </div>

                      <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-green-400 to-cyan-400 h-full rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {["Firewall", "SCADA", "ICS", "Endpoint"].map(
                          (item, i) => (
                            <div key={i} className="bg-white/5 p-4 rounded-lg">
                              <div className="w-10 h-10 mb-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                                <div className="w-4 h-4 bg-white rounded-sm"></div>
                              </div>
                              <div className="text-sm font-medium text-slate-200">
                                {item}
                              </div>
                              <div className="text-xs text-green-400 mt-1">
                                Secured
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-blue-600 rounded-full blur-2xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-36 h-36 bg-cyan-400 rounded-full blur-2xl opacity-20"></div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent opacity-5"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 mt-16" id="resources">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-2">
              Resources & Downloads
            </h2>
            <p className="text-slate-600 max-w-2xl">
              Access our latest whitepapers, case studies, and technical
              documentation to enhance your security posture.
            </p>
          </div>

          {/* Mobile filter toggle */}
          {isMobile && (
            <Button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mt-4 md:mt-0 bg-[#0A2540] hover:bg-[#0A2540]/90 text-white"
              size="lg"
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              {sidebarOpen ? "Hide Filters" : "Filters"}
            </Button>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full md:w-72 shrink-0"
              >
                <FilterSidebar
                  selectedTypes={selectedTypes}
                  selectedProducts={selectedProducts}
                  toggleType={toggleType}
                  toggleProduct={toggleProduct}
                  clearAllFilters={clearAllFilters}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main content */}
          <div className="flex-1">
            {/* Search and filter summary */}
            <div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Search className="h-5 w-5 text-[#0A2540]/60" />
                </div>
                <input
                  type="text"
                  className="bg-slate-50 border-0 rounded-xl pl-12 p-4 w-full focus:outline-none focus:ring-2 focus:ring-[#0077B6] text-[#0A2540]"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Active filters */}
              {(selectedTypes.length > 0 || selectedProducts.length > 0) && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedTypes.map((type) => (
                    <motion.span
                      key={`type-${type}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#0077B6]/10 text-[#0077B6]"
                    >
                      {type}
                      <button
                        onClick={() => toggleType(type)}
                        className="ml-1.5 rounded-full p-0.5 hover:bg-[#0077B6]/20"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </motion.span>
                  ))}

                  {selectedProducts.map((product) => (
                    <motion.span
                      key={`product-${product}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#00B4D8]/10 text-[#00B4D8]"
                    >
                      {product}
                      <button
                        onClick={() => toggleProduct(product)}
                        className="ml-1.5 rounded-full p-0.5 hover:bg-[#00B4D8]/20"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </motion.span>
                  ))}

                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={clearAllFilters}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-slate-200 text-slate-700 hover:bg-slate-300"
                  >
                    Clear All
                  </motion.button>
                </div>
              )}
            </div>

            {/* Results count */}
            <p className="text-slate-500 mb-6 font-medium">
              Showing {filteredResources.length} of {resources.length} resources
            </p>

            {/* Resource grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              <AnimatePresence>
                {filteredResources.map((resource) => (
                  <motion.div
                    key={resource.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ResourceCard resource={resource} />
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredResources.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-16"
                >
                  <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                    <Search className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                    No resources found
                  </h3>
                  <p className="text-slate-500">
                    Try adjusting your filters or search query
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
