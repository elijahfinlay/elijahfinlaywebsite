'use client';

import React from 'react';
import Link from 'next/link';

// Print item type
type PrintItem = {
  id: number;
  title: string;
  description: string;
  price: string;
  bgColor: string;
  sizes: string;
};

const Prints: React.FC = () => {
  // Prints data with bg colors instead of missing images
  const prints: PrintItem[] = [
    {
      id: 1,
      title: 'Mountain Sunset',
      description: 'Dramatic sunset over mountain lake with stunning reflections',
      price: '$149.99',
      bgColor: 'bg-orange-200',
      sizes: 'Available in multiple sizes',
    },
    {
      id: 2,
      title: 'Morning Fog',
      description: 'Serene wetlands with morning fog creating a mystical atmosphere',
      price: '$129.99',
      bgColor: 'bg-blue-200',
      sizes: 'Available in multiple sizes',
    },
    {
      id: 3,
      title: 'Rugged Peaks',
      description: 'Dramatic rocky mountain peaks at golden hour',
      price: '$169.99',
      bgColor: 'bg-gray-300',
      sizes: 'Available in multiple sizes',
    },
  ];

  return (
    <section id="prints" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Prints</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Beautiful photography prints available for purchase to adorn your space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prints.map((print) => (
            <div key={print.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
              <div className={`relative img-hover-zoom h-72 ${print.bgColor} flex items-center justify-center`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-2xl font-bold text-gray-600">COMING SOON</p>
                </div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 text-gray-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
                <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-60 text-white w-full">
                  <h3 className="text-xl font-bold mb-1">{print.title}</h3>
                  <p className="text-sm opacity-90">{print.sizes}</p>
                  <p className="text-primary font-bold text-lg mt-2">{print.price}</p>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-700 mb-4 flex-grow">{print.description}</p>
                <div className="mt-auto">
                  <button className="btn-primary w-full py-3 text-center bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#prints" className="btn-secondary inline-flex items-center">
            View All Prints
            <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Prints; 