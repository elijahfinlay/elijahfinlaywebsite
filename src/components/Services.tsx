'use client';

import React from 'react';
import Link from 'next/link';

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Services</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Professional video production tailored to your vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Wedding Films */}
          <div className="text-center">
            <div className="text-primary text-4xl mb-6 flex justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                />
              </svg>
            </div>
            <h3 className="mb-4">Wedding Films</h3>
            <p className="text-gray-700 mb-6">
              Cinematic storytelling that captures the emotion and beauty of your special day.
            </p>
          </div>

          {/* Marketing Content */}
          <div className="text-center">
            <div className="text-primary text-4xl mb-6 flex justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" 
                />
              </svg>
            </div>
            <h3 className="mb-4">Marketing Content</h3>
            <p className="text-gray-700 mb-6">
              Professional video and photo content for brands and businesses to engage their audience.
            </p>
          </div>

          {/* Event Coverage */}
          <div className="text-center">
            <div className="text-primary text-4xl mb-6 flex justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <h3 className="mb-4">Event Coverage</h3>
            <p className="text-gray-700 mb-6">
              Comprehensive video documentation for events, parties, and corporate gatherings.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-16">
          <Link 
            href="#packages" 
            className="bg-primary text-white text-xl font-medium py-4 px-10 rounded-md transition-all hover:bg-opacity-90"
          >
            View Packages
          </Link>
          <Link 
            href="#contact" 
            className="border border-primary text-primary text-xl font-medium py-4 px-12 rounded-md transition-all hover:bg-primary hover:text-white"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services; 