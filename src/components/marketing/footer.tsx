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
  Shield,
  Lock,
  Server,
  Database,
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
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com",
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-r from-sky-200 to-red-200 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            <Container className="lg:col-span-4 flex flex-col">
              <div className="flex items-center h-8 mb-4">
                <Link href="/" className="flex items-center transform hover:scale-105 transition-transform">
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

              <p className="text-slate-700 text-sm leading-relaxed">
                Terafence delivers cutting-edge cybersecurity solutions that
                protect critical infrastructure and sensitive data across
                industries. Our award-winning technology creates impenetrable
                barriers against modern digital threats.
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
                          className="bg-zinc-800 hover:bg-primary/90 p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 inline-block"
                        >
                          {link.icon}
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{link.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </Container>

            <Container delay={0.1} className="lg:col-span-2 space-y-4">
              <h3 className="text-base font-semibold text-slate-900 tracking-wide">
                <span className={`border-b-2 pb-1`} style={{ borderColor: darkBlue }}>Products</span>
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  {
                    name: "121",
                    href: "/devices",
                    icon: <Shield className="h-4 w-4" style={{ color: darkBlue }} />,
                  },
                  {
                    name: "1-URP",
                    href: "/devices",
                    icon: <Lock className="h-4 w-4" style={{ color: darkBlue }} />,
                  },
                  {
                    name: "BSG",
                    href: "/devices",
                    icon: <Server className="h-4 w-4" style={{ color: darkBlue }} />,
                  },
                  {
                    name: "MBSecure+",
                    href: "/devices",
                    icon: <Database className="h-4 w-4" style={{ color: darkBlue }} />,
                  },
                  {
                    name: "VSecure",
                    href: "/devices",
                    icon: <Shield className="h-4 w-4" style={{ color: darkBlue }} />,
                  },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      href={item.href} 
                      className="group flex items-center transition-all duration-300"
                    >
                      <span className="mr-2 transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-slate-700 group-hover:text-slate-900 transition-all">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>

            <Container delay={0.2} className="lg:col-span-2 space-y-4">
              <h3 className="text-base font-semibold text-slate-900 tracking-wide">
                <span className={`border-b-2 pb-1`} style={{ borderColor: darkBlue }}>
                  Solutions
                </span>
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Secure IT", href: "/solutions" },
                  { name: "Secure OT", href: "/solutions" },
                  { name: "Secure CAM", href: "/solutions" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>

            <Container delay={0.3} className="lg:col-span-2 space-y-4">
              <h3 className="text-base font-semibold text-slate-900 tracking-wide">
                <span className={`border-b-2 pb-1`} style={{ borderColor: darkBlue }}>Company</span>
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Our Story", href: "/about" },
                  { name: "Meet the Team", href: "/about/team" },
                  { name: "Join Us", href: "/careers" },
                  { name: "Downloads", href: "/download" },
                  { name: "Support", href: "/support" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-slate-700 hover:text-slate-900 transition-all duration-300 hover:translate-x-1 inline-block hover:font-medium p-2 hover:bg-slate-100 rounded-md w-full"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>

            <Container delay={0.4} className="lg:col-span-2 space-y-4">
              <h3 className="text-base font-semibold text-slate-900 tracking-wide">
                <span className={`border-b-2 pb-1`} style={{ borderColor: darkBlue }}>Contact</span>
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-slate-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">
                    12788 ROYAL OAKS LN FARMERS BRANCH, TX 75234
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-slate-500 mr-3 flex-shrink-0" />
                  <a
                    href="mailto:info@terafence.us"
                    className="text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    info@terafence.us
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
            <p className="text-sm text-slate-900">
              &copy; {currentYear} Terafence US. All rights
              reserved.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-slate-900">
              <Link
                href="/privacy-policy"
                className="hover:text-sky-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-sky-300 transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/cookies"
                className="hover:text-sky-300 transition-colors"
              >
                Cookie Policy
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