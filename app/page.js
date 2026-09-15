import Navigation from '@/components/Navigation';
import Background3D from '@/components/Background3D';
import Hero from '@/components/Hero';
import About from '@/components/about';
import Certificates from '@/components/Certificates';
import Skills from '@/components/Skill';
import Projects from '@/components/Project';
import Journey from '@/components/Journey';
import Contact from '@/components/contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{color: 'var(--foreground)'}}>
      <Background3D />
      <div className="relative z-20">
        <Navigation />
        <main className="pt-16 relative z-10">
          <Hero />
          <About />
          <Certificates />
          <Skills />
          <Projects />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
