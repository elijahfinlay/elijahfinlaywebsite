'use client';

import React from 'react';
import Link from 'next/link';

const Packages: React.FC = () => {
  return (
    <section id="packages" className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Packages</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Professional video production services tailored to your vision and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Wedding Package */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 flex flex-col h-full">
            <div className="p-8 border-b flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Wedding Package</h3>
              <p className="text-gray-600 mb-6">
                Cinematic storytelling for your special day, capturing moments that last a lifetime.
              </p>
              <div className="mt-auto">
                <div className="text-primary text-3xl font-bold mb-4">
                  Starting at $3,000
                </div>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Full wedding coverage</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Highlight film</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Digital delivery</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-gray-50">
              <Link href="#contact" className="btn-primary w-full block text-center">
                Book Now
              </Link>
            </div>
          </div>
          
          {/* Content Package */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 flex flex-col h-full">
            <div className="p-8 border-b flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Content Package</h3>
              <p className="text-gray-600 mb-6">
                Perfect for brands, businesses, and companies who want to stay fresh, consistent, and creative online.
              </p>
              <div className="mt-auto">
                <div className="text-primary text-3xl font-bold mb-4">
                  Custom Pricing
                </div>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Short-form videos</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Photos</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Produced quarterly or monthly</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-gray-50">
              <Link href="#contact" className="btn-primary w-full block text-center">
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Event Package */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 flex flex-col h-full">
            <div className="p-8 border-b flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Event Package</h3>
              <p className="text-gray-600 mb-6">
                Professional coverage for parties, corporate events, and important gatherings.
              </p>
              <div className="mt-auto">
                <div className="text-primary text-3xl font-bold mb-4">
                  Starting at $1,000
                </div>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Event recap video</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Social media edits</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Quick turnaround</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-gray-50">
              <Link href="#contact" className="btn-primary w-full block text-center">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages; 