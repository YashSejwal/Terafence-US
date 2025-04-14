import { ShieldCheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import { OrbitingCircles } from "../ui/orbiting-circles";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full pt-2 pb-0 overflow-hidden">
      {/* Mobile background blur */}
      <div className="absolute flex lg:hidden size-40 rounded-full bg-blue-800 blur-[8rem] sm:blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div>

      <div className="flex flex-col items-center justify-center gap-y-1 sm:gap-y-2 md:gap-y-3 relative w-full">
        {/* Desktop orbiting circles background */}
        <Container className="hidden lg:flex absolute inset-0 top-0 mb-auto flex-col items-center justify-center w-full min-h-screen z-10">
          {/* Enhanced visibility for orbiting circles */}
          <OrbitingCircles speed={0.5} radius={300}>
            <Icons.circle1 className="size-4 md:size-5 lg:size-6 text-blue-600/90" />
            <Icons.circle2 className="size-1 md:size-1.5 lg:size-2 text-blue-400/90" />
          </OrbitingCircles>
          <OrbitingCircles speed={0.25} radius={400}>
            <Icons.circle2 className="size-1 md:size-1.5 lg:size-2 text-indigo-500/90" />
            <Icons.circle1 className="size-3 md:size-4 lg:size-5 text-indigo-600/90" />
            <Icons.circle2 className="size-1 md:size-1.5 lg:size-2 text-indigo-400/90" />
          </OrbitingCircles>
          <OrbitingCircles speed={0.1} radius={500}>
            <Icons.circle2 className="size-1 md:size-1.5 lg:size-2 text-blue-500/90" />
            <Icons.circle2 className="size-1 md:size-1.5 lg:size-2 text-blue-400/90" />
            <Icons.circle1 className="size-4 md:size-5 lg:size-6 text-blue-600/90" />
            <Icons.circle2 className="size-1 md:size-1.5 lg:size-2 text-blue-700/90" />
          </OrbitingCircles>
        </Container>

        <div className="flex flex-col items-center justify-center text-center gap-y-1 sm:gap-y-2 md:gap-y-3 bg-background/0 px-4 sm:px-6 md:px-8 w-full z-20">
          {/* Badge - Desktop only */}
          <Container className="relative hidden lg:block overflow-hidden">
            <button className="group relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto cursor-default">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-blue-100" />
              <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center">
                <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-800 text-[9px] font-medium mr-2 text-white">
                  TERAFENCE
                </span>
                <span className="text-black text-sm sm:text-base md:text-lg lg:text-xl">
                  Discover unidirectional cybersecurity
                </span>
              </span>
            </button>
          </Container>

          {/* Mobile badge alternative */}
          <Container className="relative lg:hidden overflow-hidden mt-2 sm:mt-3">
            <div className="flex items-center justify-center">
              <span className="px-3 py-1 tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-800 text-xs sm:text-sm font-medium text-white">
                TERAFENCE SECURITY
              </span>
            </div>
          </Container>

          {/* Hero heading */}
          <Container delay={0.15} className="w-full mt-1 sm:mt-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center !leading-tight mx-auto max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
              Transform your <span className="">security </span>
              with TFG Protection
            </h1>
          </Container>

          {/* Subheading */}
          <Container delay={0.2}>
            <p className="max-w-[90%] sm:max-w-lg md:max-w-xl mx-auto mt-1 sm:mt-2 text-base sm:text-lg md:text-xl lg:text-2xl text-center text-muted-foreground">
              Next-Gen solutions that protect your most vulnerable assets with
              unidirectional data flow technology.
            </p>
          </Container>

          {/* CTA Button */}
          <Container delay={0.25} className="z-20">
            <div className="flex items-center justify-center mt-2 sm:mt-3 md:mt-4 gap-x-4">
              <Link
                href="/contact/contact"
                className="flex items-center gap-2 group"
              >
                <Button
                  size="lg"
                  className="text-sm sm:text-base md:text-lg px-4 sm:px-5 py-2 sm:py-2.5 h-auto bg-[#343591] hover:bg-[#343591]/90 text-white border-none"
                >
                  Secure Your Network
                  <ShieldCheckIcon className="size-3 sm:size-4 ml-1 group-hover:scale-110 transition-all duration-300" />
                </Button>
              </Link>
            </div>
          </Container>

          {/* Dashboard image */}
          <Container delay={0.4} className="relative w-full z-0">
            <div className="relative rounded-lg sm:rounded-xl lg:rounded-[32px] border border-border p-1 sm:p-1.5 md:p-2 backdrop-blur-lg mt-4 sm:mt-5 md:mt-6 max-w-[95%] sm:max-w-[90%] md:max-w-5xl lg:max-w-6xl mx-auto">
              <div className="absolute top-6 left-[90px] sm:left-[110px] md:left-[70px] z-20">
                <div className="flex items-center px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm border border-gray-700">
                  <ShieldCheckIcon className="text-green-500 size-3 sm:size-4 md:size-5 mr-2" />
                  <span className="text-white text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">
                    100% Unidirectional Data Flow
                  </span>
                </div>
              </div>

              {/* Background glows */}
              <div className="absolute top-1/8 left-1/2 -z-10 bg-gradient-to-r from-blue-800 to-indigo-900 w-1/2 lg:w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[2rem] sm:blur-[3rem] md:blur-[4rem] lg:blur-[10rem] animate-image-glow"></div>
              <div className="hidden lg:block absolute -top-1/8 left-1/2 -z-20 bg-blue-900 w-1/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem] animate-image-glow"></div>

              {/* Image container */}
              <div className="rounded-md sm:rounded-lg lg:rounded-[22px] border border-border bg-background overflow-hidden">
                <Image
                  src="/images/dashboard.png"
                  alt="Terafence Security Dashboard"
                  width={1920}
                  height={1080}
                  className="rounded-sm sm:rounded-md lg:rounded-[20px] w-full h-auto"
                />
              </div>
            </div>
            <div className="bg-gradient-to-t from-background to-transparent inset-x-0 w-full h-1/3 sm:h-1/2 mt-4 sm:mt-6 md:mt-8 lg:mt-10"></div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Hero;
