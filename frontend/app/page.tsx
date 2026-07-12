"use client";
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Internship from '@/components/Internship';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Internship />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
