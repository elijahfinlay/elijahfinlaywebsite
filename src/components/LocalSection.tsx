'use client';

import React from 'react';

const LocalSection: React.FC = () => {
  return (
    <section id="local" className="py-20 bg-gray-100">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-primary/80 text-white rounded-xl p-10 lg:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected in Roseburg</h2>
          
          <p className="text-lg md:text-xl mb-8">
            Stay updated with local events, scenic photography, and community highlights
            through our shared digital space
          </p>
          
          <a 
            href="https://roseburgtracker.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-xl font-bold hover:text-white/80 transition-colors underline underline-offset-4"
          >
            roseburgtracker.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocalSection; 