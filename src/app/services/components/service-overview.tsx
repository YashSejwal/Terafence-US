"use client";

import { motion } from "framer-motion";
import type { ServicePageData } from "../data";

export default function ServiceOverview({ data }: { data: ServicePageData }) {
  const { overview } = data;

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-heading">
              {overview.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {overview.description}
            </p>
          </motion.div>

          {/* Right — key points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-8"
          >
            {overview.keyPoints.map((point, idx) => {
              const Icon = point.icon;
              const colors = [
                { bg: "bg-emerald-100", text: "text-emerald-600" },
                { bg: "bg-blue-100", text: "text-blue-600" },
                { bg: "bg-purple-100", text: "text-purple-600" },
              ];
              const color = colors[idx % colors.length];

              return (
                <div key={idx} className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 ${color.bg} rounded-xl flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${color.text}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600">{point.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}