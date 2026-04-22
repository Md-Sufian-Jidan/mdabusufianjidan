"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const ProjectCard = ({ project, index, onView }: any) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            onClick={() => onView(project)}
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading={index < 2 ? "eager" : "lazy"}
                    priority={index < 2}
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="bg-background/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold font-sans text-primary shadow-sm tracking-wider uppercase">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="p-4 md:p-8 relative bg-card">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <motion.div 
                        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    >
                        <ArrowRight className="w-5 h-5 text-primary" />
                    </motion.div>
                </div>
                
                <p className="text-muted-foreground font-sans text-sm line-clamp-2 mb-6">
                    {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                    {project.tech.slice(0, 5).map((t: string) => (
                        <span key={t} className="text-xs font-sans font-bold text-muted-foreground bg-muted px-3 py-1 rounded-lg">
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="text-xs font-sans font-bold text-muted-foreground/60 px-2 py-1">
                            +{project.tech.length - 3} more
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
