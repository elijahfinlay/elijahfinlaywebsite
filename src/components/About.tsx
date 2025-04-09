'use client';

import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">About</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Learn more about Elijah Finlay and his approach to video production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder with Badge */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gray-300 w-full h-[400px] flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-24 w-24 text-gray-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-tl-xl rounded-br-xl p-6 shadow-lg transform rotate-6">
              <div className="transform -rotate-6">
                <p className="font-bold text-center">Based in</p>
                <p className="font-bold text-center">Roseburg,</p>
                <p className="font-bold text-center">Oregon</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Hi, I'm Elijah Finlay</h3>
            <p className="mb-6">
              I'm a filmmaker and storyteller based in the beautiful Pacific Northwest. 
              With over 7 years of experience in video production, I specialize in creating 
              cinematic videos that capture authentic moments and tell compelling stories.
            </p>
            <p className="mb-8">
              My passion for visual storytelling drives me to create films that not only 
              look beautiful but also evoke emotion and connect with audiences. Whether it's 
              a wedding, commercial project, or creative collaboration, I bring a thoughtful, 
              artistic approach to every project.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-primary font-bold text-3xl">7+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-bold text-3xl">100+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-bold text-3xl">50+</div>
                <div className="text-gray-600 text-sm">Weddings Filmed</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-bold text-3xl">20+</div>
                <div className="text-gray-600 text-sm">Commercial Clients</div>
              </div>
            </div>

            <Link href="#contact" className="btn-primary inline-block">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 