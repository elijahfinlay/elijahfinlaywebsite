import './globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Elijah Finlay | Professional Video Production',
  description: 'Professional video production services with a focus on storytelling and cinematic quality in Roseburg, Oregon.',
  keywords: 'video production, wedding films, event coverage, marketing content, cinematic videos, Roseburg, Oregon',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen font-sans bg-white">
        {children}
      </body>
    </html>
  )
}
