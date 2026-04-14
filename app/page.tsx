import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Demo from "@/components/Demo";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed gradient mesh background */}
      <div className="mesh-bg" />

      <Navbar />

      <main>
        <Hero />

        <div className="section-divider max-w-6xl mx-auto" />
        <About />

        <div className="section-divider max-w-6xl mx-auto" />
        <Skills />

        <div className="section-divider max-w-6xl mx-auto" />
        <Experience />

        <div className="section-divider max-w-6xl mx-auto" />
        <Projects />

        <div className="section-divider max-w-6xl mx-auto" />
        <Demo />

        <div className="section-divider max-w-6xl mx-auto" />
        <Services />

        <div className="section-divider max-w-6xl mx-auto" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
