import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundGradient = ({
    children,
    className,
    containerClassName,
    animate = true,
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    animate?: boolean;
}) => {
    return (
        <div className={cn("relative group", containerClassName)}>
            <motion.div
                initial={{ opacity: 0.5 }}
                animate={animate ? { opacity: [0.5, 1, 0.5] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-px rounded-3xl bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
            />
            <div className={cn("relative rounded-3xl", className)}>{children}</div>
        </div>
    );
};