"use client";

import { motion } from 'framer-motion';
import { X, Github, Globe, Server, Cpu, Sparkles } from 'lucide-react';

const ProjectModal = ({ project, onClose }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary/20 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-background rounded-[40px] max-w-5xl w-full h-full md:h-auto max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-primary/20"
            >
                {/* Image Side */}
                <div className="md:w-1/2 h-64 md:h-auto relative">
                    <img src={project.image} className="w-full h-full object-cover" alt={project.title} />
                    <button
                        onClick={onClose}
                        className="absolute top-6 left-6 md:hidden bg-background/90 p-2 rounded-full text-foreground shadow-lg"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content Side */}
                <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col bg-background">
                    <div className="hidden md:flex justify-end mb-4">
                        <button onClick={onClose} className="text-secondary-foreground hover:text-primary p-2 transition-colors">
                            <X size={32} strokeWidth={1.5} />
                        </button>
                    </div>

                    <span className="text-primary font-mono font-bold text-xs uppercase tracking-[0.2em] mb-4">{project.category}</span>
                    <h3 className="text-4xl font-semibold tracking-tight text-foreground mb-6">{project.title}</h3>

                    <p className="text-muted-foreground font-inter text-lg mb-8 leading-relaxed italic">
                        "{project.description}"
                    </p>

                    <div className="space-y-8 mb-10">
                        <div>
                            <h4 className="flex items-center gap-2 text-foreground font-bold font-mono text-sm uppercase mb-4 tracking-wider">
                                <Cpu className="w-4 h-4 text-primary" /> Core Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t: string) => (
                                    <span key={t} className="bg-secondary/20 border border-primary/10 px-4 py-1.5 rounded-xl text-foreground font-inter font-medium text-xs">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="flex items-center gap-2 text-foreground font-bold font-mono text-sm uppercase mb-4 tracking-wider">
                                <Sparkles className="w-4 h-4 text-primary" /> Key Solutions
                            </h4>
                            <ul className="grid grid-cols-1 gap-3">
                                {project.features.map((f: string, i: number) => (
                                    <li key={i} className="flex items-center gap-3 text-muted-foreground font-inter text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.live !== "#" ? (
                            <a href={project.live} target="_blank" className="bg-primary text-primary-foreground py-4 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all hover:scale-105 active:scale-95">
                                <Globe size={18} /> Visit Project
                            </a>
                        ) : (
                            <div className="bg-secondary/50 text-muted-foreground py-4 rounded-2xl flex items-center justify-center gap-2 font-bold cursor-not-allowed">
                                <Globe size={18} /> Visit Project
                            </div>
                        )}
                        <div className="flex gap-4">
                            {project.client !== "#" ? (
                                <a href={project.client} target="_blank" className="flex-1 border border-primary/20 text-foreground py-4 rounded-2xl flex items-center justify-center hover:bg-secondary/20 transition-all hover:scale-105 active:scale-95">
                                    <Github size={18} />
                                </a>
                            ) : (
                                <div className="flex-1 border border-border text-muted-foreground py-4 rounded-2xl flex items-center justify-center cursor-not-allowed">
                                    <Github size={18} />
                                </div>
                            )}
                            {project.server !== "#" ? (
                                <a href={project.server} target="_blank" className="flex-1 border border-primary/20 text-foreground py-4 rounded-2xl flex items-center justify-center hover:bg-secondary/20 transition-all hover:scale-105 active:scale-95">
                                    <Server size={18} />
                                </a>
                            ) : (
                                <div className="flex-1 border border-border text-muted-foreground py-4 rounded-2xl flex items-center justify-center cursor-not-allowed">
                                    <Server size={18} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectModal;
