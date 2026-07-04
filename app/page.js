import Image from 'next/image';
import Sanket from '@/components/image/Sanket.jpg';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/animatedBackground';
import CursorFlower from '@/components/CursorFlower';
import Hero from '@/components/Hero';
import About from '@/components/about';
import Skills from '@/components/Skill';
import Projects from '@/components/Project';
import Contact from '@/components/contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-(--background) min-h-screen relative">
      <AnimatedBackground />
      <CursorFlower />
      <Navigation />
      <main className="pt-16 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* End image section removed per user request */}

      <Footer />
    </div>
  );
}
