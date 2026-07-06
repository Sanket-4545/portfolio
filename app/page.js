import Navigation from '@/components/Navigation';
import Orb from '@/components/Orb';
import CursorFlower from '@/components/CursorFlower';
import Hero from '@/components/Hero';
import About from '@/components/about';
import Skills from '@/components/Skill';
import Projects from '@/components/Project';
import Contact from '@/components/contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={2}
          rotateOnHover
          hue={0}
          forceHoverState={false}
          backgroundColor="#000000"
        />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <CursorFlower />
      </div>

      <div className="relative z-20">
        <Navigation />
        <main className="pt-16 relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
