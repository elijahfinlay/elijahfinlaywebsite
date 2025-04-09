'use client';

import React, { useState, useEffect } from 'react';

// Portfolio item type
type PortfolioItem = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  youtubeId: string;
  videoUrl: string;
  isVideo: boolean;
};

// Define initial portfolio items outside the component to avoid recreation on each render
const initialPortfolioItems: PortfolioItem[] = [
  // Weddings
  {
    id: 1,
    title: 'Wedding Highlights',
    subtitle: 'Kiah & Nicole Smith',
    category: 'Weddings',
    youtubeId: 'xqau6wxVqwM',
    videoUrl: 'https://youtu.be/xqau6wxVqwM?si=y4Wkmo9pOG_v0-yP',
    isVideo: true,
  },
  {
    id: 2,
    title: 'Wedding Story',
    subtitle: 'Samuel & Liliana',
    category: 'Weddings',
    youtubeId: '-Yqj3Y_Wk-w',
    videoUrl: 'https://youtu.be/-Yqj3Y_Wk-w?si=frYE4P-_MP_Fv4U3',
    isVideo: true,
  },
  {
    id: 3,
    title: 'Wedding Day',
    subtitle: 'Parker & Emily',
    category: 'Weddings',
    youtubeId: 'L6o0VwcnxSM',
    videoUrl: 'https://youtu.be/L6o0VwcnxSM?si=VLOym_ihHSiqzPBK',
    isVideo: true,
  },
  
  // Nature/Wildlife
  {
    id: 4,
    title: 'Oregon Wilderness',
    subtitle: 'Scenic Beauty',
    category: 'Nature/Wildlife',
    youtubeId: 'bWSRLA_F3v8',
    videoUrl: 'https://youtu.be/bWSRLA_F3v8?si=JtS-KkDDvua9b8As',
    isVideo: true,
  },
  {
    id: 5,
    title: 'Mountain Rivers',
    subtitle: 'Pacific Northwest',
    category: 'Nature/Wildlife',
    youtubeId: 'Am23dkTXqWE',
    videoUrl: 'https://youtu.be/Am23dkTXqWE?si=Q43QvOmZA0jPPiK4',
    isVideo: true,
  },
  {
    id: 6,
    title: 'Oregon Waterfalls',
    subtitle: 'Cinematic Journey',
    category: 'Nature/Wildlife',
    youtubeId: 'G-HItP-zUV0',
    videoUrl: 'https://youtu.be/G-HItP-zUV0?si=sZQTNucvR0xSOAM9',
    isVideo: true,
  },
  
  // Real Estate
  {
    id: 7,
    title: '285 Industrial Dr',
    subtitle: 'Roseburg, OR',
    category: 'Real Estate',
    youtubeId: 'kMFezrS-g3g',
    videoUrl: 'https://youtu.be/kMFezrS-g3g?si=9L7yyslRefLJctIq',
    isVideo: true,
  },
  {
    id: 8,
    title: 'DC Equestrian',
    subtitle: '3739 OR 138 Oakland',
    category: 'Real Estate',
    youtubeId: 'G-l4Juth520',
    videoUrl: 'https://youtu.be/G-l4Juth520?si=eQbJTjrSru00g9AI',
    isVideo: true,
  },
  {
    id: 9,
    title: 'Riverfront Property',
    subtitle: 'Real Estate Tour',
    category: 'Real Estate',
    youtubeId: 'hrBbop0EquY',
    videoUrl: 'https://youtu.be/hrBbop0EquY?si=vUckH_PxyAhV2qxB',
    isVideo: true,
  },
  
  // Content
  {
    id: 10,
    title: 'North River Boats',
    subtitle: 'Umpqua Fishery Enhancement Derby',
    category: 'Content',
    youtubeId: 'tV34pK3Ifcw',
    videoUrl: 'https://youtu.be/tV34pK3Ifcw?si=wOiYP6gtopxEqn68',
    isVideo: true,
  },
  {
    id: 11,
    title: 'Old Soul Pizza',
    subtitle: 'Brand Story',
    category: 'Content',
    youtubeId: 'e5fxMV0-YR4',
    videoUrl: 'https://youtu.be/e5fxMV0-YR4?si=uNlGgL_jFm8uqgPQ',
    isVideo: true,
  },
  {
    id: 12,
    title: 'Riverside Park',
    subtitle: 'Destination Marketing',
    category: 'Content',
    youtubeId: '5RlZqDpkTxE',
    videoUrl: 'https://youtu.be/5RlZqDpkTxE?si=unvOKNko4G_-qVPy',
    isVideo: true,
  },
  {
    id: 13,
    title: 'Vintage Motorcycle Club',
    subtitle: 'Event Recap',
    category: 'Content',
    youtubeId: 'b589EQwIq2M',
    videoUrl: 'https://youtu.be/b589EQwIq2M?si=urBiXPeFYgLvCkRP',
    isVideo: true,
  },
  {
    id: 14,
    title: 'Mill Tour',
    subtitle: 'Industrial Documentary',
    category: 'Content',
    youtubeId: 'fyh4xNnGeFA',
    videoUrl: 'https://youtu.be/fyh4xNnGeFA?si=ndR_2yb7ENn1U-S0',
    isVideo: true,
  },
  
  // Featured/All
  {
    id: 15,
    title: 'Showreel 2024',
    subtitle: 'Elijah Finlay',
    category: 'All',
    youtubeId: '_qEUZaLMJyY',
    videoUrl: 'https://youtu.be/_qEUZaLMJyY?si=DkLoLvzQGqRj8Job',
    isVideo: true,
  },
];

const Portfolio: React.FC = () => {
  // Portfolio items data with YouTube videos
  const [portfolioItems] = useState<PortfolioItem[]>(initialPortfolioItems);

  // Filter categories
  const categories = ['All', 'Weddings', 'Content', 'Real Estate', 'Nature/Wildlife'];
  
  // State for active filter and selected video for modal
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [thumbnailVersions, setThumbnailVersions] = useState<Record<string, number>>({});

  // Initialize thumbnail versions on component mount
  useEffect(() => {
    try {
      const initialVersions: Record<string, number> = {};
      initialPortfolioItems.forEach(item => {
        initialVersions[item.youtubeId] = 0;
      });
      setThumbnailVersions(initialVersions);
    } catch (error) {
      console.error('Error initializing thumbnails:', error);
    }
  }, []);

  // Filter items based on active category
  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  // Handle opening the video modal
  const openVideoModal = (youtubeId: string, e: React.MouseEvent) => {
    try {
      e.preventDefault();
      setSelectedVideo(youtubeId);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    } catch (error) {
      console.error('Error opening video modal:', error);
    }
  };

  // Handle closing the video modal
  const closeVideoModal = () => {
    try {
      setSelectedVideo(null);
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    } catch (error) {
      console.error('Error closing video modal:', error);
    }
  };

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Portfolio</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            A selection of our recent work across different projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="overflow-hidden rounded-lg shadow-md group hover:shadow-xl transition-all flex flex-col h-full"
            >
              <div className="relative">
                <div 
                  onClick={(e) => openVideoModal(item.youtubeId, e)}
                  className="cursor-pointer relative h-52 img-hover-zoom"
                >
                  <img
                    src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg?v=${thumbnailVersions[item.youtubeId] || 0}`}
                    alt={item.subtitle}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      // Fallback to hqdefault if maxresdefault isn't available
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg?v=${thumbnailVersions[item.youtubeId] || 0}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-gray-700"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path 
                            d="M8 5v14l11-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={closeVideoModal}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              className="absolute top-4 right-4 z-10 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-105"
              onClick={closeVideoModal}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio; 