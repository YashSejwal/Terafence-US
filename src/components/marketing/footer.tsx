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
      icon: <Linkedin className="h-7 w-7" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-7 w-7" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Facebook className="h-7 w-7" />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <Instagram className="h-7 w-7" />,
      href: "https://instagram.com",
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-r from-sky-200 to-red-200 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
            <Container className="md:col-span-6 lg:col-span-6 flex flex-col">
              <div className="flex items-center h-10 mb-4">
                <Link
                  href="/"
                  className="flex items-center transform hover:scale-105 transition-transform"
                >
                  <Image
                    src="/images/terafence.png"
                    alt="Terafence Logo"
                    width={210}
                    height={60}
                    priority
                    className="drop-shadow-md"
                  />
                </Link>
              </div>

              <p className="text-slate-700 text-lg leading-relaxed">
                Terafence delivers cutting-edge cybersecurity solutions that
                protect critical infrastructure and sensitive data across
                industries. Our award-winning technology creates impenetrable
                barriers against digital threats.
              </p>

              <div className="flex items-center space-x-4 mt-4">
                {socialLinks.map((link, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-zinc-800 hover:bg-sky-950 p-3 rounded-full transition-all duration-300 hover:-translate-y-1 inline-block"
                        >
                          {link.icon}
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-lg">{link.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </Container>

            <Container delay={0.1} className="md:col-span-6 lg:col-span-6 space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 tracking-wide">
                <span
                  className={`border-b-2 pb-1`}
                  style={{ borderColor: darkBlue }}
                >
                  Contact
                </span>
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <MapPin className="h-7 w-7 text-[#343591] mr-3 mt-0.5 flex-shrink-0" />
                  <address className="text-slate-700 not-italic">
                    12788 Royal Oaks Ln,<br />
                    Farmers Branch,<br />
                    TX 75234
                  </address>
                </li>
                <li className="flex items-center">
                  <Mail className="h-7 w-7 text-[#343591] mr-3 flex-shrink-0" />
                  <a
                    href="mailto:info@terafence.us"
                    className="text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    info@terafence.us
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-7 w-7 text-[#343591] mr-3 flex-shrink-0" />
                  <a
                    href="tel:+17325015974"
                    className="text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    +1 (732) 501-5974
                  </a>
                </li>
              </ul>
            </Container>
          </div>
        </div>

        <Separator className="bg-slate-300" />

        <div className="py-8">
          <Container
            delay={0.5}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-lg text-slate-900">
              &copy; {currentYear} Terafence US. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-lg text-slate-900">
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
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-rose/50 to-rose-700" />
    </footer>
  );
};

export default Footer;