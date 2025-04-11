"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  MapPin,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Phone,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/global/wrapper";

interface ContainerProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const Container = ({ children, delay = 0, className = "" }: ContainerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const darkBlue = "#0A2463"; // Dark blue color for icons and underlines

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Facebook className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6" />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <Instagram className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6" />,
      href: "https://instagram.com",
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-r from-sky-200 to-red-200 text-slate-100">
      <Wrapper>
        {/* Main content - balanced padding */}
        <div className="py-5 sm:py-6 md:py-8 lg:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 lg:gap-8">
            <Container className="md:col-span-6 lg:col-span-6 flex flex-col">
              <div className="flex items-center h-8 sm:h-10 mb-3">
                <Link
                  href="/"
                  className="flex items-center transform hover:scale-105 transition-transform"
                >
                  <Image
                    src="/images/terafence.png"
                    alt="Terafence Logo"
                    width={210}
                    height={75}
                    priority
                    className="drop-shadow-md w-auto h-auto sm:w-[210px]"
                  />
                </Link>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                Terafence delivers cutting-edge cybersecurity solutions that
                protect critical infrastructure and sensitive data across
                industries. Our award-winning technology creates impenetrable
                barriers against digital threats.
              </p>

              <div className="flex flex-wrap items-center space-x-2 sm:space-x-3 mt-4">
                {socialLinks.map((link, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-zinc-800 hover:bg-sky-950 p-2 sm:p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 inline-block"
                        >
                          {link.icon}
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm sm:text-base">{link.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </Container>

            {/* Contact Info */}
            <Container
              delay={0.1}
              className="md:col-span-6 lg:col-span-6 space-y-3 sm:space-y-4"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 tracking-wide">
                <span
                  className="border-b-2 pb-1"
                  style={{ borderColor: darkBlue }}
                >
                  Contact
                </span>
              </h3>
              <ul className="space-y-3 text-base sm:text-lg">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#343591] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <address className="text-slate-700 not-italic text-sm sm:text-base md:text-lg">
                    12788 Royal Oaks Lane, Farmers Branch, Texas 75234
                  </address>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#343591] mr-2 sm:mr-3 flex-shrink-0" />
                  <a
                    href="mailto:info@terafence.us"
                    className="text-slate-700 hover:text-slate-900 transition-colors text-sm sm:text-base md:text-lg"
                  >
                    info@terafence.us
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-[#343591] mr-2 sm:mr-3 flex-shrink-0" />
                  <a
                    href="tel:+17325015974"
                    className="text-slate-700 hover:text-slate-900 transition-colors text-sm sm:text-base md:text-lg"
                  >
                    +1 (732) 501-5974
                  </a>
                </li>
              </ul>
            </Container>
          </div>
        </div>

        <Separator className="bg-slate-400" />

        {/* Copyright section - balanced padding */}
        <div className="py-4 sm:py-5">
          <Container
            delay={0.5}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-sm sm:text-base text-slate-900 text-center sm:text-left">
              &copy; {currentYear} Terafence USA Inc. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-4 text-sm sm:text-base text-slate-900">
              <Link
                href="/privacy"
                className="hover:text-rose-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-rose-600 transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/cookie"
                className="hover:text-rose-600 transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/support"
                className="hover:text-rose-600 transition-colors"
              >
                Support
              </Link>
            </div>
          </Container>
        </div>
      </Wrapper>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-rose-500/50 to-rose-700" />
    </footer>
  );
};

export default Footer;