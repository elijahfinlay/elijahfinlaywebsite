'use client';

import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center flex items-center bg-gradient-to-r from-secondary to-primary/70 overflow-hidden"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom text-white relative z-10">
        <div className="max-w-3xl">
          <h1 className="mb-4 animate-fade-in">Cinematic Videos</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Professional video production with Elijah Finlay
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#contact" className="btn-primary">
              Let's Talk
            </Link>
            <Link href="#portfolio" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-secondary">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a href="#services" className="text-white/70 animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero; 