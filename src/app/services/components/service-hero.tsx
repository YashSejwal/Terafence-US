"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ServicePageData } from "../data";

export default function ServiceHero({ data }: { data: ServicePageData }) {
  const { hero } = data;
  const BadgeIcon = hero.badgeIcon;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background layers — contained in their own overflow-hidden wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute inset-0 bg-gradient-to-r from-${hero.accentColors.from}/20 to-${hero.accentColors.to}/20`}
        />
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 bg-${hero.accentColors.from}/10 rounded-full blur-3xl animate-pulse`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-${hero.accentColors.to}/10 rounded-full blur-3xl animate-pulse`}
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── Left content ── */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div
                className={`inline-flex items-center px-4 py-2 bg-${hero.accentColors.from}/20 border border-${hero.accentColors.from}/30 rounded-full text-${hero.accentColors.from} text-sm font-medium`}
              >
                <BadgeIcon className="w-4 h-4 mr-2" />
                {hero.badge}
              </div>

              {/*
               * FIX — title clipping:
               *  • leading-[1.15] gives breathing room for descenders (g, y, p, q)
               *  • pb-2 on the gradient <span> prevents bg-clip-text from being
               *    cut at the bottom edge
               *  • removed overflow-hidden from <section> so nothing clips
               */}
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.15] font-heading">
                {hero.title}
                <span
                  className={`block bg-gradient-to-r from-${hero.accentColors.from} to-${hero.accentColors.to} bg-clip-text text-transparent pb-2`}
                >
                  {hero.titleAccent}
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-2"
            >
              <p className="text-2xl font-semibold text-gray-200">
                {hero.subtitle}
              </p>
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                {hero.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className={`px-8 py-6 bg-gradient-to-r from-${hero.accentColors.from} to-${hero.accentColors.to} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base border-0 hover:opacity-90`}
              >
                {hero.primaryCta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 text-base bg-transparent"
              >
                {hero.secondaryCta}
              </Button>
            </motion.div>
          </div>

          {/* ── Right — hero image with stats overlay ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main image card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {/* Hero image — falls back to a gradient bg if image is missing */}
              <div className="relative w-full h-80 lg:h-96 bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src={hero.image}
                  alt={`${hero.badge} — Terafence`}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    /* Gracefully hide if the image doesn't exist yet */
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Gradient overlay so text/stats remain readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Stats bar — glass overlay pinned to the bottom of the image */}
              <div className="absolute bottom-0 inset-x-0 bg-white/5 backdrop-blur-xl border-t border-white/10 p-5">
                <div className="flex items-center justify-between gap-4">
                  {hero.stats.map((stat, idx) => (
                    <div key={idx} className="text-center flex-1">
                      <div
                        className={`text-xl lg:text-2xl font-bold bg-gradient-to-r from-${hero.accentColors.from} to-${hero.accentColors.to} bg-clip-text text-transparent`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}