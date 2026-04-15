"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs */}
                <motion.div
                    animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/8 rounded-full blur-2xl"
                />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="relative z-10 flex flex-col items-center justify-center gap-8"
            >
                {/* Animated Spinner */}
                <div className="relative w-24 h-24">
                    {/* Outer Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary/60"
                    />

                    {/* Middle Ring */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2 rounded-full border-3 border-transparent border-b-primary/40 border-l-primary/80"
                    />

                    {/* Center Dot */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"
                    />
                </div>

                {/* Loading Text */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-2">
                        Loading
                    </h2>
                    <motion.p
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-muted-foreground text-sm md:text-base"
                    >
                        Getting everything ready
                        <motion.span
                            animate={{ opacity: [0, 1, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            .
                        </motion.span>
                        <motion.span
                            animate={{ opacity: [0, 0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            .
                        </motion.span>
                        <motion.span
                            animate={{ opacity: [0, 0, 0, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            .
                        </motion.span>
                    </motion.p>
                </motion.div>

                {/* Progress Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="w-64 h-1 bg-muted rounded-full overflow-hidden"
                >
                    <motion.div
                        animate={{
                            width: ["0%", "30%", "60%", "85%", "100%"],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            times: [0, 0.2, 0.5, 0.8, 1],
                        }}
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}