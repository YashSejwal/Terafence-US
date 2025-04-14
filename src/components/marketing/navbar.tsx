"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "../ui/button";

type SubLink = {
  name: string;
  href: string;
  description?: string;
};

type NavLink = {
  name: string;
  href: string;
  subMenu?: SubLink[];
};

const NAV_LINKS: NavLink[] = [
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Technology",
    href: "/technology",
  },
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "Products",
    href: "/products",
    subMenu: [
      {
        name: "TFG 121",
        href: "/devices",
        description: "File Transfer for Critical Networks",
      },
      {
        name: "TFG URP",
        href: "/devices",
        description: "Galvanic Network Separation",
      },
      {
        name: "TFG BSG",
        href: "/devices",
        description: "Bi-Directional Secure Gateway",
      },
      {
        name: "TFG MBSecure+",
        href: "/devices",
        description: "Air-Gap Security for SCADA",
      },
      {
        name: "TFG VSecure",
        href: "/devices",
        description: "Air-Gap Protection",
      },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    subMenu: [
      {
        name: "Securing IT",
        href: "/solutions",
        description: "Information technology security solutions",
      },
      {
        name: "Securing OT",
        href: "/solutions",
        description: "Operational technology security solutions",
      },
      {
        name: "Securing CAM",
        href: "/solutions",
        description: "Control access and monitoring solutions",
      },
    ],
  },
  {
    name: "Use Cases",
    href: "/usecases",
    subMenu: [
      {
        name: "Overview",
        href: "/usecases",
        description: "Explore all security use cases",
      },
      {
        name: "Energy Management",
        href: "/energy-management",
        description: "Security solutions for power infrastructure",
      },
      {
        name: "Petroleum Industry",
        href: "/usecases",
        description: "Protection for oil and gas infrastructure",
      },
      {
        name: "Mission Critical Systems",
        href: "/usecases",
        description: "Solutions for high availability environments",
      },
      {
        name: "OT Data Transfer to SIEM",
        href: "/usecases",
        description: "Safe operational data transfer to security systems",
      },
      {
        name: "Cloud Security",
        href: "/usecases/cloud-security",
        description: "Secure cloud connectivity solutions",
      },
      {
        name: "Defense Export Programs",
        href: "/usecases",
        description: "Solutions for foreign military sales",
      },
    ],
  },
  {
    name: "Downloads",
    href: "/download",
  },
  {
    name: "Contact",
    href: "/contact/contact",
  },
];

const MenuDropdown = ({ link }: { link: NavLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  if (!link.subMenu) {
    return (
      <Link href={link.href} className="py-2 text-sm md:text-xl lg:text-lg font-medium transition-colors hover:text-primary">
        {link.name}
      </Link>
    );
  }
  
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center gap-1 py-2 text-sm md:text-xl lg:text-lg font-medium transition-colors hover:text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {link.name}
        {link.subMenu && (
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </button>
      {link.subMenu && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 z-10 mt-2 w-64 rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <div className="py-1">
                {link.subMenu.map((subLink, idx) => (
                  <Link
                    key={idx}
                    href={subLink.href}
                    className="block px-4 py-2 text-base hover:bg-gray-100 rounded-md"
                  >
                    <div className="font-medium">{subLink.name}</div>
                    {subLink.description && (
                      <p className="mt-1 text-sm text-gray-500">
                        {subLink.description}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest("#mobile-menu") &&
        !target.closest("#mobile-menu-button")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="flex items-center lg:hidden">
      <button
        id="mobile-menu-button"
        className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 right-0 top-20 z-50 overflow-y-auto bg-white pb-6 shadow-lg"
            style={{ maxHeight: "calc(100vh - 5rem)" }}
          >
            <div className="space-y-1 p-4">
              {NAV_LINKS.map((link, index) => (
                <div key={index} className="border-b border-gray-100 py-2">
                  {link.subMenu ? (
                    <div>
                      <button
                        className="flex w-full items-center justify-between py-2 text-base font-medium"
                        onClick={() =>
                          setOpenSubmenu(
                            openSubmenu === link.name ? null : link.name
                          )
                        }
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openSubmenu === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openSubmenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {link.subMenu.map((subLink, idx) => (
                              <Link
                                key={idx}
                                href={subLink.href}
                                className="block py-2 pl-3 text-sm text-gray-600 hover:text-primary"
                                onClick={() => setIsOpen(false)}
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-2 text-base font-medium hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6 pt-2">
                <Link href="/support">
                <Button
                  variant="blue"
                  className="w-full text-base py-3"
                >
                  Get Support
                </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full h-16 sm:h-18 md:h-20 bg-background/80 backdrop-blur-sm z-50 transition-all ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 h-full">
        <div className="flex items-center justify-between h-full">
           {/* Logo Section - Increased size */}
           <div className="flex-shrink-0 h-full flex items-center">
            <Link href="/" className="flex items-center h-full">
              <div className="h-10 sm:h-12 md:h-14 flex items-center justify-center">
                <Image
                  src="/images/terafence.png"
                  alt="Terafence Logo"
                  width={300}
                  height={55}
                  priority
                  className="w-auto h-full object-contain"
                  style={{ maxWidth: "300px" }}
                />
              </div>
            </Link>
          </div>
          
          {/* Navigation Links - Adjusted spacing for better responsiveness */}
          <div className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-3 2xl:space-x-5 flex-grow mx-2 xl:mx-4">
            {NAV_LINKS.map((link, index) => (
              <MenuDropdown key={index} link={link} />
            ))}
          </div>
          
          {/* Right Side - CTA Button & Mobile Menu */}
          <div className="flex items-center justify-end space-x-2 flex-shrink-0">
            <Link href="/support" className="hidden lg:block">
              <Button 
                variant="blue" 
                className="px-3 md:px-4 lg:px-5 py-1.5 md:py-2 text-sm md:text-base font-medium whitespace-nowrap"
                style={{ backgroundColor: "#343591" }}
              >
                Get Support
              </Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;