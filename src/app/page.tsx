import dynamic from 'next/dynamic';
import Hero from "@/components/modules/home/Hero";

// Lazy load below-fold components with loading skeletons
const About = dynamic(() => import("@/components/modules/home/About"), {
  loading: () => <div className="h-screen animate-pulse bg-muted/50" />,
  ssr: true,
});

const Technologies = dynamic(() => import("@/components/modules/home/Technologies"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/30" />,
  ssr: true,
});

const Experience = dynamic(() => import("@/components/modules/home/Experience"), {
  loading: () => <div className="h-screen animate-pulse bg-muted/50" />,
  ssr: true,
});

const Education = dynamic(() => import("@/components/modules/home/Education"), {
  loading: () => <div className="h-screen animate-pulse bg-muted/40" />,
  ssr: true,
});

const Projects = dynamic(() => import("@/components/modules/home/Projects"), {
  loading: () => <div className="h-screen animate-pulse bg-muted/60" />,
  ssr: true,
});

const Services = dynamic(() => import("@/components/modules/home/Services"), {
  loading: () => <div className="h-screen animate-pulse bg-muted/30" />,
  ssr: true,
});

const Contact = dynamic(() => import("@/components/modules/home/Contact"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
  ssr: true,
});

const Blogs = dynamic(() => import("@/components/modules/blog/Blogs"), {
  loading: () => <div className="h-screen animate-pulse bg-muted/40" />,
  ssr: true,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Education />
      <Projects />
      <Services />
      <Blogs />
      <Contact />
    </main>
  );
}
