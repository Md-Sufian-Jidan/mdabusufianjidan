"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Sparkles } from 'lucide-react';
import { PROJECTS } from '@/data/public/data';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];

    // Ensuring we handle capitalizations safely since data may have Front-End vs Frontend
    const filteredProjects = filter === 'All'
        ? PROJECTS
        : PROJECTS.filter(project => 
            project.category.replace("-", "").toLowerCase() === filter.replace("-", "").toLowerCase()
          );

    return (
        <section id="projects" className='relative py-10 md:py-20 px-0 md:px-12 bg-background overflow-hidden'>
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-primary" />
                            <span className="text-primary font-mono font-bold tracking-widest uppercase text-xs">Portfolio</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-foreground leading-tight">
                            Selected Works
                        </h2>
                    </motion.div>

                    {/* Filter Buttons */}
                    <motion.div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 border ${filter === category
                                    ? 'bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]'
                                    : 'bg-secondary/10 border-primary/10 text-muted-foreground hover:bg-secondary/30 hover:text-foreground'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={index}
                                onView={setSelectedProject}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
