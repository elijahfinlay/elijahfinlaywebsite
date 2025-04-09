'use client';

import React from 'react';

// Testimonial type
type Testimonial = {
  id: number;
  quote: string;
  name: string;
  title: string;
  rating: number;
};

const Testimonials: React.FC = () => {
  // Testimonial data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Elijah captured our wedding day perfectly. The attention to detail and storytelling in our film exceeded all expectations. Highly recommend!",
      name: "Sarah & James",
      title: "Wedding Clients",
      rating: 5,
    },
    {
      id: 2,
      quote: "Working with Elijah on our brand videos has been amazing. The content he creates for us consistently increases our engagement and reaches our target audience.",
      name: "Michael Taylor",
      title: "Marketing Director",
      rating: 5,
    },
    {
      id: 3,
      quote: "The event recap video that Elijah created for our charity gala was absolutely stunning. His ability to tell a story through film is extraordinary.",
      name: "Emily Rodriguez",
      title: "Event Coordinator",
      rating: 5,
    },
  ];

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-primary' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">What Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105"
            >
              <div className="flex mb-4 text-primary">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote className="mb-6 italic text-gray-700">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 