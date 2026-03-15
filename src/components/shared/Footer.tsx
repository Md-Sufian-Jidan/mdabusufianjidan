import Link from "next/link";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

const socialLinks = [
    {
        href: "https://github.com/Md-Sufian-Jidan",
        icon: Github,
        label: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/md-abu-sufian-jidan/",
        icon: Linkedin,
        label: "LinkedIn",
    },
    { href: "mailto:jidanjiyay03@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-background/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <Code2 className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="font-bold text-lg">Abu Sufian</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            Junior Web Developer building scalable and modern web applications
                            with React, Next.js, and Node.js.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-semibold text-sm mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="font-semibold text-sm mb-4">Connect</h3>
                        <div className="flex flex-col gap-2">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <link.icon className="w-4 h-4" />
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <Separator className="mb-6" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>
                        Built with{" "}
                        <span className="text-primary font-medium">Next.js</span>,{" "}
                        <span className="text-primary font-medium">Tailwind CSS</span>, and{" "}
                        <span className="text-primary font-medium">shadcn/ui</span>
                    </p>
                    <p>© 2026 Md Abu Sufian Jidan · Last updated 2026</p>
                </div>
            </div>
        </footer>
    );
}
