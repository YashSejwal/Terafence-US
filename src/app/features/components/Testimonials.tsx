/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { IconStarFilled, IconQuote } from "@tabler/icons-react";

const testimonials = [
  {
    quote: "Implementing Terafence's data diode technology allowed us to securely integrate our OT systems with our IT infrastructure without exposing our critical infrastructure to cyber threats.",
    author: "Chief Information Security Officer",
    company: "Leading Energy Provider",
    image: "/images/testimonials/1.svg",
    stars: 5
  },
  {
    quote: "After deploying Terafence, we were able to achieve compliance with NERC CIP requirements while maintaining the operational efficiency our business demands.",
    author: "VP of Operations",
    company: "National Capital Region Transport Corporation",
    image: "/images/testimonials/2.svg",
    stars: 5
  },
  {
    quote: "The ease of integration and minimal latency of Terafence's solution was a game-changer for our manufacturing facilities that require real-time data access.",
    author: "Director of Space Research",
    company: "Indian Space Research Organisation",
    image: "/images/testimonials/3.svg",
    stars: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 rounded-full bg-[#EEF2FF] opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 rounded-full bg-[#DBEAFE] opacity-50 blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827]">
            Customer Success Stories
          </h2>
          <p className="mt-4 text-[#4B5563] text-lg">
            Hear from organizations that have transformed their security posture with Terafence.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E5E7EB] h-full flex flex-col">
                <div className="absolute -top-3 -left-3">
                  <div className="bg-[#2563EB] rounded-full p-2 shadow-md text-white">
                    <IconQuote className="h-5 w-5" />
                  </div>
                </div>
                
                <div className="flex mb-4 pt-3">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <IconStarFilled key={i} className="h-5 w-5 text-[#FBBF24]" />
                  ))}
                </div>
                
                <blockquote className="text-[#4B5563] mb-6 flex-grow italic leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                
                <div className="flex items-center mt-auto pt-4 border-t border-[#E5E7EB]">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover border border-[#E5E7EB]"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-[#111827]">{testimonial.author}</p>
                    <p className="text-[#6B7280] text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-8">
            <h3 className="text-xl font-semibold text-[#111827] mb-4">Join our growing list of satisfied customers</h3>
            <p className="text-[#4B5563] mb-6">
              Discover how organizations like yours are using Terafence&lsquo;s data diode technology to solve their most critical security challenges.
            </p>
            <button className="px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg font-medium transition-colors">
              View Customer Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}