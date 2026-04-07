"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Code2, Database, Layout, Terminal, Cpu, Layers, Globe } from "lucide-react";

// Helper to map string to icon component
const IconMap: Record<string, React.ElementType> = {
  Code2: Code2,
  Database: Database,
  Layout: Layout,
  Terminal: Terminal,
  Cpu: Cpu,
  Layers: Layers,
  Globe: Globe,
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon?: string | React.ReactNode;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-8 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link + idx}
          className="relative group block p-0"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-primary/10 dark:bg-primary/[0.15] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex items-start gap-4 mb-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.6)] group-hover:scale-110">
                {typeof item.icon === 'string' && IconMap[item.icon] ? (
                  (() => {
                    const IconComponent = IconMap[item.icon];
                    return <IconComponent className="w-6 h-6" />;
                  })()
                ) : (
                  item.icon
                )}
              </div>
              <div className="pt-1">
                <CardTitle>{item.title}</CardTitle>
              </div>
            </div>
            
            <CardDescription>{item.description}</CardDescription>
            
            {/* Tech Decoration */}
            <div className="absolute right-4 bottom-4 opacity-10 group-hover:opacity-30 transition-opacity">
               {typeof item.icon === 'string' && IconMap[item.icon] ? (
                  (() => {
                    const IconComponent = IconMap[item.icon];
                    return <IconComponent className="w-16 h-16" />;
                  })()
                ) : null}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-6 overflow-hidden bg-background/50 border border-transparent dark:border-white/[0.05] group-hover:border-primary/30 relative z-20 transition-all duration-500 tech-card-glow",
        className
      )}
    >
      <div className="relative z-50">
        <div>{children}</div>
      </div>
      
      {/* Decorative scanline sweep on hover */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
         <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent absolute -left-full top-1/2 group-hover:animate-[shimmer_2s_infinite] opacity-50" />
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-foreground font-serif font-bold tracking-tight text-lg", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-muted-foreground tracking-wide leading-relaxed text-sm font-inter relative z-10",
        className
      )}
    >
      {children}
    </p>
  );
};