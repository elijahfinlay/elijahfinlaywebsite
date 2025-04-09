'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ThankYou() {
  const router = useRouter();

  // Redirect to home page after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg text-center">
        <div className="mb-6 bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 text-primary" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h1>
        
        <p className="text-lg text-gray-700 mb-4">
          Your message has been successfully sent. We appreciate your interest in our services.
        </p>
        
        <p className="text-md text-gray-600 mb-8">
          We'll review your project details and get back to you as soon as possible. 
          For urgent inquiries, please feel free to reach out to us directly at <a href="mailto:elijahfinlay@gmail.com" className="text-primary hover:underline">elijahfinlay@gmail.com</a>.
        </p>
        
        <p className="text-sm text-gray-500 mb-8">
          You'll be redirected to the homepage in a few seconds...
        </p>
        
        <Link href="/" className="btn-primary inline-block">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
} 