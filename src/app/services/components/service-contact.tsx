"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ServicePageData } from "../data";

export default function ServiceContact({ data }: { data: ServicePageData }) {
  const { hero } = data;

  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-heading">
            Ready to Get Started?
            <span
              className={`block bg-gradient-to-r from-${hero.accentColors.from} to-${hero.accentColors.to} bg-clip-text text-transparent`}
            >
              Let&apos;s Talk.
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with our experts to explore how Terafence can transform your
            IT operations and drive measurable business outcomes.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className={`px-8 py-6 bg-gradient-to-r from-${hero.accentColors.from} to-${hero.accentColors.to} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base border-0 hover:opacity-90`}
              asChild
            >
              <a href="/contact/contact">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 text-base bg-transparent"
              asChild
            >
              <a href="mailto:info@terafence.us">
                <Mail className="w-5 h-5 mr-2" />
                info@terafence.us
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}