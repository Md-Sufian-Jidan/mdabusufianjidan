"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Globe, Code2, Server, Layers, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SERVICES } from "@/data/public/data";

const iconMap: Record<string, React.ElementType> = { Globe, Code2, Server, Layers };

const Services = () => {
    const containerRef = useRef(null);
    const inView = useInView(containerRef, { once: true, margin: "-100px" });

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Levitating floating effect specifically for service cards
            gsap.to(".service-card-levitate", {
                y: -8,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.15, // Creates a nice wave effect across cards
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="services" className="relative py-24 lg:py-32 overflow-hidden bg-background">
            
            {/* Glowing background elements matching futuristic theme */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10" ref={containerRef}>
                
                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16 lg:mb-24"
                >
                    <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20 tracking-[0.3em] font-black uppercase backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]">
                        <Cpu className="inline-block w-3 h-3 mr-2" />
                        CAPABILITIES / 04
                    </Badge>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground">
                        Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/50 italic">Offerings</span>
                    </h2>
                </motion.div>

                {/* ── Services Grid ── */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {SERVICES.map((service, i) => {
                        const Icon = iconMap[service.icon] || Globe;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.15, type: "spring", bounce: 0.4 }}
                                className="h-full"
                            >
                                <Card className="service-card-levitate h-full rounded-[2rem] group relative transition-all duration-500 overflow-hidden bg-background/50 backdrop-blur-xl border border-primary/15 hover:border-primary/40 shadow-xl hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] tech-card-glow">
                                    
                                    {/* Aceternity Style Inner Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]" />
                                    
                                    {/* Top Corner Cyber Accent */}
                                    <div className="absolute top-0 right-8 w-12 h-1 bg-primary/40 rounded-b-md opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)] transition-all duration-500" />

                                    <CardHeader className="pb-4 relative z-10">
                                        <motion.div
                                            whileHover={{ rotate: 15, scale: 1.15 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] border border-primary/20 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.8)] cursor-pointer"
                                        >
                                            <Icon size={28} />
                                        </motion.div>
                                        <CardTitle className="text-xl font-serif font-bold tracking-tight text-foreground">{service.title}</CardTitle>
                                    </CardHeader>
                                    
                                    <CardContent className="relative z-10 pt-0">
                                        <CardDescription className="text-sm font-inter text-muted-foreground leading-relaxed">
                                            {service.description}
                                        </CardDescription>
                                    </CardContent>

                                    {/* Interactive Holographic Sweep */}
                                    <div className="absolute inset-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent top-1/2 -left-full opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;