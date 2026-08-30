"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { ServicePageData } from "../data";

export default function ServiceOfferings({ data }: { data: ServicePageData }) {
  const { offerings, hero } = data;

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Our Offerings
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your unique business challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, idx) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative"
              >
                <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 h-full">
                  <div
                    className={`inline-flex w-14 h-14 bg-gradient-to-r ${offering.gradient} rounded-xl items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                    {offering.description}
                  </p>

                  <div className="space-y-1.5">
                    {offering.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 text-${hero.accentColors.from} flex-shrink-0`}
                        />
                        <span className="text-xs text-gray-400">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}