"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Wrapper from "../global/wrapper";
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
    name: "About",
    href: "/about",
    subMenu: [
      {
        name: "Our Story",
        href: "/about/story",
        description: "Learn about our company's journey",
      },
    ],
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
        name: "121",
        href: "/devices",
        description: "Advanced security solution",
      },
      {
        name: "URP",
        href: "/devices",
        description: "Unified protection platform",
      },
      {
        name: "BSG",
        href: "/devices",
        description: "Business security gateway",
      },
      {
        name: "MBSecure+",
        href: "/devices",
        description: "Enhanced protection system",
      },
      {
        name: "VSecure",
        href: "/devices",
        description: "Virtual security environment",
      },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    subMenu: [
      {
        name: "Secure IT",
        href: "/solutions",
        description: "Information technology security solutions",
      },
      {
        name: "Secure OT",
        href: "/solutions",
        description: "Operational technology security solutions",
      },
      {
        name: "Secure CAM",
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
        href: "/usecases",
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
      <Link href={link.href} className="py-2 text-sm font-medium transition-colors hover:text-primary">
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
        className="flex items-center gap-1 py-2 text-sm font-medium transition-colors hover:text-primary"
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
              className="absolute left-0 z-10 mt-2 w-56 rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <div className="py-1">
                {link.subMenu.map((subLink, idx) => (
                  <Link
                    key={idx}
                    href={subLink.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                  >
                    <div className="font-medium">{subLink.name}</div>
                    {subLink.description && (
                      <p className="mt-1 text-xs text-gray-500">
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
    <div className="sticky top-0 z-50 w-full border-b bg-background lg:hidden">
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
            className="fixed left-0 right-0 top-16 z-50 overflow-y-auto bg-white pb-6 shadow-lg"
            style={{ maxHeight: "calc(100vh - 4rem)" }}
          >
            <div className="space-y-1 p-4">
              {NAV_LINKS.map((link, index) => (
                <div key={index} className="border-b border-gray-100 py-2">
                  {link.subMenu ? (
                    <div>
                      <button
                        className="flex w-full items-center justify-between py-2 text-sm font-medium"
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
                      className="block py-2 text-sm font-medium hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6 pt-2">
                <Button
                  variant="blue"
                  className="w-full"
                  onClick={() =>
                    (window.location.href = "mailto:info@terafence.us")
                  } 
                >
                  Get Started
                </Button>
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
      className={`sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50 transition-all ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <Wrapper className="h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/terafence.png"
                alt="Terafence Logo"
                width={150}
                height={55}
                priority
                className="h-auto"
              />
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link, index) => (
              <MenuDropdown key={index} link={link} />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hidden lg:block">
              <Button variant="blue" className="px-6">
                Get Started
              </Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;