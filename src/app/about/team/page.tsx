"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Award, Linkedin, CheckCircle, X, ArrowRight } from "lucide-react";
import Container from "../../../components/global/container";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  expertise: string[];
  background: string;
  achievements: string[];
  quote?: string;
}

export default function TeamPage() {
  // Function to determine responsive design values based on screen size
  const getResponsiveValues = () => {
    if (typeof window !== 'undefined') {
      return {
        cardHeight: window.innerWidth < 768 ? 'h-56' : 'h-64',
        imageSize: window.innerWidth < 640 ? '100vw' : (window.innerWidth < 1024 ? '50vw' : '33vw')
      };
    }
    return { cardHeight: 'h-64', imageSize: '33vw' };
  };
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Enhanced team members with additional information
  const teamMembers: TeamMember[] = [
    {
      id: "mr",
      name: "Michael Raj",
      role: "CEO and Founder",
      image: "/images/team/mr.png",
      linkedin: "https://www.linkedin.com/in/",
      background: "Technology Innovation Strategist with over 15 years of experience transforming business landscapes through cutting-edge technology solutions.",
      expertise: ["Strategic Leadership", "Product Vision", "Digital Transformation", "Technology Innovation", "Business Growth"],
      achievements: [
        "Pioneered multiple tech innovation initiatives that increased operational efficiency by 40%",
        "Recognized for strategic business growth, achieving 200% revenue growth in 3 years",
        "Leading expert in technology entrepreneurship with multiple successful startups"
      ],
      quote: "Innovation isn't just about technology—it's about transforming how businesses deliver value."
    },
    {
      id: "sr",
      name: "Sreedhar Reddy",
      role: "Co-Founder and Vice President Alliances",
      image: "/images/team/sr.png",
      linkedin: "https://www.linkedin.com/in",
      background: "Digital Transformation Expert with extensive experience in building strategic partnerships and driving organizational excellence.",
      expertise: ["Business Strategy", "Operational Excellence", "Innovation Management", "Strategic Partnerships", "Market Expansion"],
      achievements: [
        "Drove significant digital transformation projects resulting in 35% cost reduction",
        "Award-winning business strategist recognized by industry leaders",
        "Expert in scaling technology enterprises across global markets"
      ],
      quote: "Strategic partnerships are the cornerstone of sustainable growth in today's interconnected business ecosystem."
    },
    {
      id: "sk",
      name: "Shashi Kumar",
      role: "Director of Technology",
      image: "/images/team/sk.png",
      linkedin: "https://www.linkedin.com/in",
      background: "Technology Visionary with deep expertise in emerging technologies and enterprise architecture solutions.",
      expertise: ["Software Architecture", "Cloud Solutions", "AI & ML Integration", "Tech Leadership", "Innovation"],
      achievements: [
        "Led the development of proprietary technology platforms adopted by Fortune 500 companies",
        "Pioneered AI-driven solutions that increased client productivity by 60%",
        "Holds multiple patents in cloud computing and distributed systems"
      ],
      quote: "The most powerful technology is the one that becomes invisible while transforming experiences."
    }
  ];

  // State for responsive values
  const [, setResponsiveValues] = useState({ cardHeight: 'h-64', imageSize: '33vw' });
  
  // Update responsive values on window resize
  useEffect(() => {
    const handleResize = () => {
      setResponsiveValues(getResponsiveValues());
    };
    
    // Set initial values
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="bg-white">
      <Navbar />
      
      <main className="overflow-x-hidden">
        {/* Header Section */}
        <section className="pt-16 pb-12 md:pt-20 md:pb-16 relative overflow-hidden">
          <Container className="px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-blue-50 border border-blue-100">
                <span className="text-xs font-medium text-blue-700 uppercase">Leadership Team</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold !leading-tight mb-4">
                Meet Our <span className="font-subheading italic text-blue-600">Team</span>
              </h1>
              
              <p className="text-gray-600 text-lg">
                Visionary leaders driving innovation and strategic growth across technology and business landscapes.
              </p>
            </div>
          </Container>

          {/* Background elements */}
          <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-blue-50/30 rounded-bl-full opacity-70"></div>
        </section>

        {/* Team Members Grid */}
        <section className="py-12">
          <Container className="px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden h-full cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative h-64 bg-blue-50">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50"></div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {member.expertise.slice(0, 3).map((skill) => (
                        <span 
                          key={skill} 
                          className="bg-gray-50 text-gray-700 px-2 py-0.5 rounded-md text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded text-blue-500 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                        >
                          <Linkedin size={18} />
                        </a>
                      )}
                      
                      <button className="text-sm font-medium text-blue-600 hover:text-blue-800 group flex items-center">
                        View Profile
                        <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Get in Touch CTA Section */}
        <section className="py-12 md:py-16">
          <Container className="px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-10 text-center shadow-xl border border-blue-100/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10"></div>
              <div className="absolute -z-20 top-0 left-1/3 w-32 h-32 bg-blue-300/30 rounded-full blur-3xl"></div>
              <div className="absolute -z-20 bottom-0 right-1/3 w-40 h-40 bg-indigo-300/30 rounded-full blur-3xl"></div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Work With Our Exceptional Team?</h2>
              <p className="text-gray-600 max-w-xl mx-auto mb-8">Join us in transforming industries and building innovative solutions for the digital future.</p>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300"
              >
                Get in Touch
              </motion.button>
            </div>
          </Container>
        </section>
      </main>
      
      {/* Enhanced Modal for Team Member Details */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl w-full max-w-4xl mx-auto shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                {/* Left side - Image and basic info */}
                <div className="md:w-2/5 bg-blue-50 relative">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      {selectedMember.linkedin && (
                        <a 
                          href={selectedMember.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-colors text-sm font-medium"
                        >
                          <Linkedin size={16} className="mr-2" />
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Right side - Content */}
                <div className="md:w-3/5 p-6 md:p-8 relative">
                  <button 
                    onClick={() => setSelectedMember(null)} 
                    className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <X size={20} />
                  </button>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{selectedMember.name}</h2>
                    <p className="text-blue-600 text-lg mb-4 font-medium">{selectedMember.role}</p>
                    
                    {selectedMember.quote && (
                      <div className="mb-4 italic text-gray-600 border-l-4 border-blue-100 pl-4 py-1">
                        &ldquo;{selectedMember.quote}&ldquo;
                      </div>
                    )}
                    
                    <div className="mb-5">
                      <h3 className="text-base font-semibold text-gray-800 mb-2">Background</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{selectedMember.background}</p>
                    </div>
                    
                    <div className="mb-5">
                      <h3 className="text-base font-semibold text-gray-800 mb-2 flex items-center">
                        <Award size={16} className="mr-2 text-blue-500" />
                        Core Expertise
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedMember.expertise.map((skill) => (
                          <span 
                            key={skill} 
                            className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-base font-semibold text-gray-800 mb-2 flex items-center">
                        <CheckCircle size={16} className="mr-2 text-blue-500" />
                        Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {selectedMember.achievements.map((achievement, index) => (
                          <li 
                            key={index}
                            className="flex items-start text-gray-600 text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}