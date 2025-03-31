import { FEATURES } from "@/constants";
import { cn } from "@/lib";
import Image from "next/image";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Features = () => {
    // Rich dark blue color
    const darkBlue = "#0A2463";
    
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container className="z-10 relative">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Uncompromised Security <br /> made <span className="font-subheading italic">simple</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Achieve absolute cybersecurity with cutting-edge solutions that eliminate vulnerabilities and cyber threats. Protect critical assets from unauthorized access, malware, in-transit attacks and cyber threats with seamless, next-gen security.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-12 relative overflow-visible z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {FEATURES.map((feature, index) => (
                    <Container key={feature.title} delay={0.1 + index * 0.1} className={cn(
                        "relative flex flex-col",
                        index === 3 && "lg:col-span-2",
                        index === 2 && "md:col-span-2 lg:col-span-1",
                    )}>
                        <div className="group h-full">
                            <MagicCard
                                gradientFrom={darkBlue}
                                gradientTo="#2563EB"
                                className="p-5 lg:p-6 rounded-2xl lg:rounded-3xl h-full relative"
                                gradientColor="rgba(10,36,99,0.07)"
                            >
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="flex items-center justify-center h-9 w-9 rounded-lg" 
                                        style={{ 
                                            border: `1px solid ${darkBlue}15`,
                                            background: `${darkBlue}10`
                                        }}>
                                        <feature.icon className="size-5" style={{ color: darkBlue }} />
                                    </div>
                                    <h3 className="text-lg font-semibold" style={{ color: darkBlue }}>
                                        {feature.title}
                                    </h3>
                                </div>
                                
                                <p className="text-sm text-slate-600 mb-4">
                                    {feature.description}
                                </p>

                                <div className="w-full overflow-hidden rounded-lg">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            width={300}
                                            height={300}
                                            className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </MagicCard>
                        </div>
                    </Container>
                ))}
            </div>
        </div>
    )
};

export default Features;