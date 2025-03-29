/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../global/container";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Shield, Check, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

interface Certification {
  id: number;
  image: string;
  title: string;
  description: string;
  verificationLink?: string;
  features?: string[];
  year?: string;
}

const SecurityCertifications = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      image: "/images/tassel.png",
      title: "TASSEL",
      description: "The Trusted Application Security and Systems Evaluation Laboratory (TASSEL) is a globally recognized authority that conducts rigorous assessments of application security. Their certification validates our system's resilience against sophisticated cyber threats.",
      verificationLink: "https://tassel-cert.org/verify",
      features: ["Advanced Data Diode Implementation", "Secure One-Way Data Flow Architecture", "Real-Time Threat Isolation"],
      year: "2022",
    },
    {
      id: 2,
      image: "/images/emi-emc.png",
      title: "EMI / EMC",
      description: "Electromagnetic Interference (EMI) and Electromagnetic Compatibility (EMC) certification ensures our hardware systems operate securely without external interference. This internationally recognized standard is critical for preventing side-channel attacks and maintaining data integrity.",
      verificationLink: "https://emi-emc-standards.org",
      features: ["Data Diode Signal Integrity Protection", "Electromagnetic Shielding for Unidirectional Data Transfer", "Hardware-Based Isolation for Enhanced Security"],
      year: "2022",
    },
    {
      id: 4,
      image: "/images/layers.png",
      title: "7 Layers",
      description: "7 Layers is a veteran-owned and operated business specializing in penetration testing, adversary emulation, and security awareness. Their comprehensive evaluation confirms our commitment to protecting your data.",
      verificationLink: "https://verify.7layers.security",
      features: ["Data Diode Penetration Testing", "Air-Gapped Architecture Assessment", "Compliance with One-Way Data Flow Standards"],
      year: "2022",
    },
    {
      id: 5,
      image: "/images/horizon.png",
      title: "Horizon Security",
      description: "Horizon Security has validated our security infrastructure through rigorous testing protocols. Their certification demonstrates our dedication to maintaining a secure environment.",
      verificationLink: "https://horizon-security.com/verify",
      features: ["Data Diode-Based Infrastructure Hardening", "Threat Intelligence for Unidirectional Networks", "Critical System Isolation and Monitoring"],
      year: "2022",
    },
    {
      id: 3,
      image: "/images/sse.png",
      title: "SSE",
      description: "Security Service Edge (SSE) certification ensures our platform meets stringent security standards, providing robust protection for your data and applications.",
      verificationLink: "https://sse-certification.org",
      features: ["Cloud Integration with Data Diode Technology", "Zero Trust Architecture for Isolated Networks", "Enhanced Data Protection with Hardware Enforced Security"],
      year: "2022",
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [certifications.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full py-16 md:py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <Container>
        <div ref={containerRef} className="opacity-0 transition-opacity duration-1000 ease-in-out">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1.5 text-sm rounded-full">
              Enterprise Security
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-heading font-medium !leading-tight mb-4">
              World-class <span className="font-subheading italic">security certifications</span>
            </h2>
            
            <p className="text-base md:text-lg text-accent-foreground/80 max-w-3xl">
              Our platform undergoes rigorous third-party security assessments to ensure your data remains protected by the most advanced security protocols available today.
            </p>
          </div>
          
          <div className="relative bg-card/30 backdrop-blur-sm border border-primary/5 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="relative rounded-xl overflow-hidden bg-background/30 border border-primary/10 aspect-square md:aspect-auto md:h-[400px]">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center p-10"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-40 h-40 rounded-full bg-primary/5 blur-3xl absolute" />
                      </div>
                      
                      <img 
                        src={certifications[currentIndex].image}
                        alt={`${certifications[currentIndex].title} certification`}
                        className="max-h-full max-w-full object-contain relative z-10 drop-shadow-xl transition-transform duration-700 hover:scale-105"
                      />
                      
                      <Badge variant="outline" className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm border-primary/20 text-primary">
                        {certifications[currentIndex].year}
                      </Badge>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                  {certifications.map((_, index) => (
                    <button
                      key={`indicator-${index}`}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? "w-8 bg-primary shadow-sm shadow-primary/20" 
                          : "bg-primary/30 hover:bg-primary/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    <Card className="bg-card/50 backdrop-blur-sm border-primary/10 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div>
                            <h3 className="text-2xl font-semibold text-foreground mb-2 font-heading">
                              {certifications[currentIndex].title}
                            </h3>
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              <Shield className="h-3.5 w-3.5 mr-1.5" /> Security Certified
                            </Badge>
                          </div>
                          
                          {certifications[currentIndex].verificationLink && (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-primary hover:text-primary/80 hover:bg-primary/5 h-8 px-3"
                              asChild
                            >
                              <a href={certifications[currentIndex].verificationLink} target="_blank" rel="noopener noreferrer">
                                Verify <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                              </a>
                            </Button>
                          )}
                        </div>
                        
                        <p className="text-accent-foreground/90 leading-relaxed mb-6">
                          {certifications[currentIndex].description}
                        </p>
                        
                        {certifications[currentIndex].features && (
                          <div className="mt-auto">
                            <h4 className="text-sm font-medium text-foreground/80 mb-3">Key Protection Features:</h4>
                            <ul className="space-y-2">
                              {certifications[currentIndex].features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="mr-2 mt-0.5 flex-shrink-0">
                                    <Check className="h-4 w-4 text-primary" />
                                  </span>
                                  <span className="text-sm text-accent-foreground/80">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .animate-fade-in {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default SecurityCertifications;