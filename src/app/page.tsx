import About from "@/components/modules/home/About";
import Hero from "@/components/modules/home/Hero";
import Services from "@/components/modules/home/Services";
import Technologies from "@/components/modules/home/Technologies";
import Experience from "@/components/modules/home/Experience";
import Education from "@/components/modules/home/Education";
import Projects from "@/components/modules/home/Projects";
import Contact from "@/components/modules/home/Contact";

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
      <Contact />
    </main>
  );
}
