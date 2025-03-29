"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Award, Linkedin, CheckCircle, X } from "lucide-react";
import Container from "../../../components/global/container";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  expertise: string[];
  background: string;
  achievements: string[];
}

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Chandra Shekhar Misra",
      role: "CEO and Founder",
      image: "/images/team/csm.png",
      linkedin: "https://www.linkedin.com/in/chandra-shekhar-misra-46949645/",
      background: "Technology Innovation Strategist",
      expertise: ["Strategic Leadership", "Product Vision", "Digital Transformation"],
      achievements: [
        "Pioneered multiple tech innovation initiatives",
        "Recognized for strategic business growth",
        "Leading expert in technology entrepreneurship"
      ]
    },
    {
      name: "Jose Kurian",
      role: "Co-Founder and Vice President Alliances",
      image: "/images/team/jk.png",
      linkedin: "https://www.linkedin.com/in/jose-kurian-93b8051/",
      background: "Digital Transformation Expert",
      expertise: ["Business Strategy", "Operational Excellence", "Innovation Management"],
      achievements: [
        "Drove significant digital transformation projects",
        "Award-winning business strategist",
        "Expert in scaling technology enterprises"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-16 md:py-24">
        <Container className="px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-blue-100 px-4 py-2 rounded-full mb-4"
            >
              <span className="text-blue-800 font-medium text-sm tracking-wider uppercase">Our Leadership</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold !leading-tight">
              Meet Our Exceptional <span className="font-subheading italic text-blue-600">Team</span>
            </h2>
            
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                repeatType: 'reverse',
                ease: "linear"
              }}
              className="h-1.5 bg-blue-600 mx-auto my-6 rounded-full w-24"
            ></motion.div>
            
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Visionary leaders driving innovation, strategic growth, and transformative solutions across technology and business landscapes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative overflow-hidden rounded-2xl border border-blue-100 shadow-lg shadow-blue-100/50 transition-all duration-300 group-hover:shadow-blue-200/70">
                  <div className="relative h-[350px] w-full overflow-hidden rounded-t-2xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-white/80 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-1 text-gray-900 transition-colors group-hover:text-blue-700">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedMember && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                onClick={() => setSelectedMember(null)}
              >
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-3xl max-w-4xl w-full mx-auto p-12 relative shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    onClick={() => setSelectedMember(null)} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <X size={32} />
                  </button>

                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-64 h-64 relative">
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        fill
                        className="object-contain rounded-2xl shadow-xl"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedMember.name}</h2>
                      <p className="text-blue-600 text-xl mb-4 font-medium">{selectedMember.role}</p>
                      <p className="text-gray-700 mb-4 text-lg">{selectedMember.background}</p>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <Award size={20} className="mr-2 text-blue-500" />
                          Core Expertise
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedMember.expertise.map((skill) => (
                            <span 
                              key={skill} 
                              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <CheckCircle size={20} className="mr-2 text-blue-500" />
                          Key Achievements
                        </h3>
                        <ul className="space-y-2">
                          {selectedMember.achievements.map((achievement) => (
                            <li 
                              key={achievement} 
                              className="flex items-start text-gray-600"
                            >
                              <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {selectedMember.linkedin && (
                        <a 
                          href={selectedMember.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                        >
                          <Linkedin className="mr-2" />
                          View LinkedIn Profile
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
}