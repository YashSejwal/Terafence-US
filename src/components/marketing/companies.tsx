"use client"
import Container from "../global/container";
import Image from 'next/image';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import company1 from '../../../public/images/c1.png';
import company2 from '../../../public/images/c2.png';
import company3 from '../../../public/images/c3.png';
import company4 from '../../../public/images/c4.png';
import company5 from '../../../public/images/c5.png';
import company6 from '../../../public/images/c6.png';
import company7 from '../../../public/images/c7.png';

const Companies = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20 mt-16 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <motion.h4 
            className="text-2xl lg:text-4xl font-medium"
            transition={{ duration: 0.5 }}
          >
            Trusted by <span className="font-subheading italic">leading</span> companies
          </motion.h4>
          <motion.div 
            className="h-1 w-64 mt-2 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "16rem" }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          <motion.p
            className="text-gray-500 mt-4 text-center"
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Partnering with industry leaders to deliver exceptional solutions and innovative experiences
          </motion.p>
        </div>
      </Container>

      <Container delay={0.1}>
        <motion.div 
          ref={containerRef}
          className="flex flex-col items-center justify-center gap-16 max-w-6xl mx-auto pt-16 text-muted-foreground transition-all"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* First row - 3 logos */}
          <div className="flex flex-row items-center justify-center gap-10 md:gap-20 flex-wrap md:flex-nowrap">
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
              <Image 
                src={company1} 
                alt="Company 1" 
                className="h-10 md:h-32 lg:h-40 object-contain w-auto object-fit hover:opacity-80 transition-opacity"
                onMouseOver={(e) => { e.currentTarget.style.filter = "grayscale(0%)" }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "grayscale(40%)" }}
              />
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
              <Image 
                src={company2} 
                alt="Company 2" 
                className="h-10 md:h-32 lg:h-40 object-contain w-auto hover:opacity-80 transition-opacity"
                onMouseOver={(e) => { e.currentTarget.style.filter = "grayscale(0%)" }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "grayscale(40%)" }}
              />
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
              <Image 
                src={company3} 
                alt="Company 3" 
                className="h-10 md:h-32 lg:h-40 object-contain w-auto hover:opacity-80 transition-opacity"
                onMouseOver={(e) => { e.currentTarget.style.filter = "grayscale(0%)" }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "grayscale(40%)" }}
              />
            </motion.div>
          </div>

          {/* Second row - 4 logos */}
          <div className="flex flex-row items-center justify-center gap-10 md:gap-16 flex-wrap md:flex-nowrap">
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
              <Image 
                src={company4} 
                alt="Company 4" 
                className="h-10 md:h-32 lg:h-40 object-contain w-auto hover:opacity-80 transition-opacity"
                onMouseOver={(e) => { e.currentTarget.style.filter = "grayscale(0%)" }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "grayscale(40%)" }}
              />
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
              <Image 
                src={company6} 
                alt="Company 6" 
                className="h-10 md:h-32 lg:h-40 object-contain w-auto hover:opacity-80 transition-opacity"
                onMouseOver={(e) => { e.currentTarget.style.filter = "grayscale(0%)" }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "grayscale(40%)" }}
              />
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
              <Image 
                src={company7} 
                alt="Company 7" 
                className="h-10 md:h-32 lg:h-40 w-auto object-contain hover:opacity-80 transition-opacity"
                onMouseOver={(e) => { e.currentTarget.style.filter = "grayscale(0%)" }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "grayscale(40%)" }}
              />
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
              <Image 
                src={company5} 
                alt="Company 5" 
                className="h-10 md:h-32 lg:h-40 object-contain w-auto hover:opacity-80 transition-opacity"
                onMouseOver={(e) => { e.currentTarget.style.filter = "grayscale(0%)" }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "grayscale(40%)" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Companies;