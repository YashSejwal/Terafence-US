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
    <div className="relative flex flex-col items-center justify-center w-full py-16 md:py-24 mt-8 md:mt-16 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Trusted by <span className="font-subheading italic text-blue-800">leading</span> companies
          </motion.h2>
          
          <motion.p
            className="text-gray-600 mt-6 text-center text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Collaborating with industry leaders for innovative, exceptional solutions.
          </motion.p>
        </div>
      </Container>  

      <Container delay={0.1}>
        <motion.div 
          ref={containerRef}
          className="flex flex-col items-center justify-center gap-12 md:gap-16 max-w-6xl mx-auto pt-12 md:pt-16 text-muted-foreground transition-all"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* First row - 3 logos */}
          <div className="flex flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 flex-wrap md:flex-nowrap">
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center p-4">
              <Image 
                src={company1} 
                alt="Company 1" 
                height={40}
                width={120}
                className="h-10 sm:h-12 md:h-16 w-auto object-contain hover:opacity-80 transition-all duration-300"
              />
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center p-4">
              <Image 
                src={company2} 
                alt="Company 2" 
                height={40}
                width={120}
                className="h-10 sm:h-12 md:h-16 w-auto object-contain hover:opacity-80 transition-all duration-300"
              />
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center p-4">
              <Image 
                src={company3} 
                alt="Company 3" 
                height={40}
                width={120}
                className="h-10 sm:h-12 md:h-16 w-auto object-contain hover:opacity-80 transition-all duration-300"
              />
            </motion.div>
          </div>

          {/* Second row - 4 logos */}
          <div className="flex flex-row items-center justify-center gap-8 md:gap-16 flex-wrap md:flex-nowrap">
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center p-4">
              <Image 
                src={company4} 
                alt="Company 4" 
                height={40}
                width={120}
                className="h-10 sm:h-12 md:h-16 w-auto object-contain hover:opacity-80 transition-all duration-300"
              />
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center p-4">
              <Image 
                src={company6} 
                alt="Company 6" 
                height={40}
                width={120}
                className="h-10 sm:h-12 md:h-16 w-auto object-contain hover:opacity-80 transition-all duration-300"
              />
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center p-4">
              <Image 
                src={company7} 
                alt="Company 7" 
                height={40}
                width={120}
                className="h-10 sm:h-12 md:h-16 w-auto object-contain hover:opacity-80 transition-all duration-300"
              />
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center p-4">
              <Image 
                src={company5} 
                alt="Company 5" 
                height={40}
                width={120}
                className="h-10 sm:h-12 md:h-16 w-auto object-contain hover:opacity-80 transition-all duration-300"
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Companies;