"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { ServicePageData } from "../data";

export default function ServiceCaseStudy({ data }: { data: ServicePageData }) {
  const { caseStudy, hero } = data;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Case Study
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world impact across critical sectors
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden"
        >
          {/* ── Case study image banner ── */}
          <div className="relative w-full h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-gray-800 to-gray-900">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-black/50" />

            {/* Badge + title overlaid on image */}
            <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8">
              <Badge
                variant="secondary"
                className="bg-white/15 backdrop-blur-sm text-white border-white/20 font-medium mb-3"
              >
                {caseStudy.industry}
              </Badge>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight max-w-3xl">
                {caseStudy.title}
              </h3>
            </div>
          </div>

          {/* ── Content: challenge/solution + results ── */}
          <div className="grid lg:grid-cols-5">
            {/* Left — challenge & solution */}
            <div className="lg:col-span-3 p-8 lg:p-12 space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Challenge
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Solution
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Right — results */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-black p-8 lg:p-12 flex flex-col justify-center">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
                Results
              </h4>
              <div className="grid grid-cols-2 gap-6">
                {caseStudy.results.map((result, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                  >
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r from-${hero.accentColors.from} to-${hero.accentColors.to} bg-clip-text text-transparent pb-1`}
                    >
                      {result.metric}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {result.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}