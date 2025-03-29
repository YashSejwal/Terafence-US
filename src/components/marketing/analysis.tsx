import { ShieldCheckIcon, LockIcon, AlertTriangleIcon } from "lucide-react";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";
const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Eliminating Cyber Threats with <br /><span className="font-subheading italic">Absolute Protection</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        Our security solutions ensure that critical assets—ranging from IT infrastructure to OT systems and surveillance networks—remain completely isolated from cyber threats, leaving no entry point for unauthorized access or malicious attacks.
                    </p>
                </div>
            </Container>

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgb(145, 205, 255)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                    <ShieldCheckIcon className="w-6 h-6 text-blue-500" />
                                    Eliminating Cyber Threats
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Our solutions create an impenetrable barrier, preventing unauthorized access, malware infiltration, and data breaches.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-lg font-semibold">
                                                No Attack Surface
                                            </div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <LockIcon className="w-4 h-4" />
                                                Complete Data Flow Control
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm text-muted-foreground">
                                            With Secure IT, Secure OT, and Secure CAM, critical assets remain isolated from cyber threats, ensuring seamless and risk-free operations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgb(145, 205, 255)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-sky-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                    <AlertTriangleIcon className="w-6 h-6 text-yellow-500" />
                                    Zero Risk Exposure
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    By restricting unauthorized commands and isolating networks, our solutions eliminate cyber risks without disrupting critical operations.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-lg font-semibold">
                                                No Breaches, No Downtime
                                            </div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <LockIcon className="w-4 h-4" />
                                                Fully Isolated Critical Assets
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm text-muted-foreground">
                                            Every connection, from industrial PLCs to IT networks, is secured through one-way data transfer, blocking all potential cyber threats at the source.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Analysis;