'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Packages from '@/components/Packages';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Prints from '@/components/Prints';
import LocalSection from '@/components/LocalSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Packages />
      <About />
      <Testimonials />
      <Contact />
      <Prints />
      <LocalSection />
      <Footer />
    </main>
  );
} 