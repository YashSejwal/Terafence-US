import { ShieldCheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import { OrbitingCircles } from "../ui/orbiting-circles";

const Hero = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">

            <div className="absolute flex lg:hidden size-40 rounded-full bg-blue-800 blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div>

            <div className="flex flex-col items-center justify-center gap-y-8 relative">
                <Container className="hidden lg:flex absolute inset-0 top-0 mb-auto flex-col items-center justify-center w-full min-h-screen -z-10">
                    {/* Enhanced visibility for orbiting circles */}
                    <OrbitingCircles
                        speed={0.5}
                        radius={300}
                    >
                        <Icons.circle1 className="size-6 text-blue-600" />
                        <Icons.circle2 className="size-2 text-blue-400" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        speed={0.25}
                        radius={400}
                    >
                        <Icons.circle2 className="size-2 text-indigo-500" />
                        <Icons.circle1 className="size-5 text-indigo-600" />
                        <Icons.circle2 className="size-2 text-indigo-400" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        speed={0.1}
                        radius={500}
                    >
                        <Icons.circle2 className="size-2 text-blue-500" />
                        <Icons.circle2 className="size-2 text-blue-400" />
                        <Icons.circle1 className="size-6 text-blue-600" />
                        <Icons.circle2 className="size-2 text-blue-700" />
                    </OrbitingCircles>
                </Container>

                <div className="flex flex-col items-center justify-center text-center gap-y-4 bg-background/0">
                    <Container className="relative hidden lg:block overflow-hidden">
                        <button className="group relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-blue-100" />
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center">
                                <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-800 text-[9px] font-medium mr-2 text-white">
                                    TERAFENCE
                                </span>
                                {/* Fixed text color */}
                                <span className="text-black">Discover unidirectional cybersecurity</span>
                            </span>
                        </button>
                    </Container>
                    <Container delay={0.15}>
                        <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold text-center !leading-tight max-w-4xl mx-auto">
                            Transform your {" "}
                            <span className="">
                                security {" "}
                            </span>
                            with iTF Protection
                        </h1>
                    </Container>
                    <Container delay={0.2}>
                        <p className="max-w-xl mx-auto mt-2 text-base lg:text-lg text-center text-muted-foreground">
                            Next-generation cybersecurity solutions that protect your most vulnerable assets with unidirectional data flow technology.
                        </p>
                    </Container>
                    <Container delay={0.25} className="z-20">
                        <div className="flex items-center justify-center mt-6 gap-x-4">
                            <Link href="mailto:info@terafence.in" className="flex items-center gap-2 group">
                                <Button size="lg">
                                    Secure Your Network
                                    <ShieldCheckIcon className="size-4 ml-1 group-hover:scale-110 transition-all duration-300" />
                                </Button>
                            </Link>
                        </div>
                    </Container>
                    <Container delay={0.3} className="relative">
                        <div className="relative rounded-xl lg:rounded-[32px] border border-border p-2 backdrop-blur-lg mt-10 max-w-6xl mx-auto">
                        <div 
                                className="absolute top-8 left-10 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border opacity-100"
                            >
                                <div className="flex items-center gap-2">
                                    <ShieldCheckIcon className="text-green-500 size-5" />
                                    <span className="text-white font-medium">100%</span>
                                    <span className="text-sm text-white/80">Unidirectional Protection</span>
                                </div>
                            </div>
                            <div className="absolute top-1/8 left-1/2 -z-10 bg-gradient-to-r from-blue-800 to-indigo-900 w-1/2 lg:w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[4rem] lg:blur-[10rem] animate-image-glow"></div>
                            <div className="hidden lg:block absolute -top-1/8 left-1/2 -z-20 bg-blue-900 w-1/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem] animate-image-glow"></div>

                            <div className="rounded-lg lg:rounded-[22px] border border-border bg-background">
                                <Image
                                    src="/images/dashboard.png"
                                    alt="Terafence Security Dashboard"
                                    width={1920}
                                    height={1080}
                                    className="rounded-lg lg:rounded-[20px]"
                                />
                            </div>

                            

                        </div>
                        {/* <div className="bg-gradient-to-t from-background to-transparent  inset-x-0 w-full h-1/2"></div> */}
                    </Container>

                </div>
            </div>
        </div>
    )
};

export default Hero;