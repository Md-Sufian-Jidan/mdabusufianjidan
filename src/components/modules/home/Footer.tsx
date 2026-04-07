import { navItems, socialLinks } from '@/data/public/data';
import { motion } from 'framer-motion';
import { ArrowUp, Heart, Code2, Mail } from 'lucide-react';
import Link from 'next/link';


const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-white pt-12 pb-6 overflow-hidden container mx-auto px-6">
            {/* Massive Background Text - Architectural Style */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden select-none pointer-events-none opacity-[0.02]">
                <h2 className="text-[20vw] font-serif font-black leading-none translate-y-1/4">
                    Abu Sufian Jidan.
                </h2>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

                    {/* Brand Column */}
                    <div className="md:col-span-5 space-y-5">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-serif font-bold">
                                ASJ
                            </div>
                            <span className="text-2xl font-serif font-bold text-primary tracking-tighter">
                                Abu Sufian Jidan<span className="text-secondary">.</span>
                            </span>
                        </Link>
                        <p className="text-secondary/70 text-lg font-sans leading-relaxed max-w-md">
                            Architecting digital solutions with a focus on high-performance,
                            minimalist design, and scalable full-stack ecosystems.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    whileHover={{ y: -4 }}
                                    className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 space-y-5">
                        <h4 className="text-lg font-sans font-bold uppercase tracking-[0.2em] text-secondary/40">Navigation</h4>
                        <nav className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    className="text-primary font-sans font-medium hover:text-secondary transition-colors w-fit"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Newsletter / Contact CTA */}
                    <div className="md:col-span-4 space-y-5">
                        <h4 className="text-lg font-sans font-bold uppercase tracking-[0.2em] text-secondary/40">Have a project?</h4>
                        <div className="p-8 rounded-3xl bg-accent/30 border border-white relative group overflow-hidden">
                            <p className="text-xl font-serif text-primary mb-6 relative z-10">
                                Let's build something <span className="italic">extraordinary</span> together.
                            </p>
                            <a
                                href="mailto:jidanjiyaj03@gmail.com"
                                className="flex items-center gap-2 text-primary font-sans font-bold group-hover:gap-4 transition-all relative z-10"
                            >
                                <Mail size={18} />
                                Get in touch
                            </a>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-primary mb-4" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="flex items-center text-[13px] font-sans font-bold uppercase tracking-widest text-secondary/40 md:mb-0 mb-7">
                        <span>© {new Date().getFullYear()} Md Abu Sufian Jidan</span>
                        {/* <span className="hidden md:block ">/</span> */}
                        <div className="flex items-center gap-2 mx-3">
                            <Code2 size={14} />
                            <span>React.js & Tailwind</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 text-[13px] text-secondary/40">
                            Made with <Heart size={14} className="text-red-400 fill-red-400" /> in BD
                        </div>
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 bg-primary flex items-center justify-center text-white rounded-xl shadow-lg shadow-primary/20"
                        >
                            <ArrowUp size={20} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;