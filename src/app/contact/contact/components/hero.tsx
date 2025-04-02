"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={heroRef}
      initial={{ opacity: 0 }}
      animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 py-24 px-4 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
      <motion.div
        className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500 rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div
        className="absolute -top-24 -right-10 w-80 h-80 bg-blue-400 rounded-full opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.25, 0.2],
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          How can we help you?
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto font-light"
        >
          Our team is always ready to assist. To best serve you, please
          provide as much information as possible. Upon inquiry, your
          request will be directed to the appropriate market specialist for
          a quick response.
        </motion.p>
      </div>
    </motion.section>
  );
}