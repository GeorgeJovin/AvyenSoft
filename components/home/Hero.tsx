'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const slides = [
    {
      title: 'Driving Success with Trusted Tech Solutions',
      subtitle:
        'Empowering success, CASS Technologies delivers consulting, innovation, operations, and growth solutions.',
      bgImage: '/assets/pic/cassImage25.jpg',
    },
    {
      title: 'Strategic Innovation & Growth',
      subtitle:
        'Transform your business with cutting-edge technology and expert consulting services.',
      bgImage: '/assets/pic/cassImage24.png',
    },
  ];

  // ✅ Auto-scroll working fine
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-900/60 to-black/70"></div>
          </div>

          {/* Text Content */}
          <div className="relative z-30 flex h-full items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
              <div className="max-w-3xl">
                <h1 className="text-white text-4xl font-bold mb-4 md:mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-white/95 text-base mb-8 md:mb-10 leading-relaxed">
                  {slide.subtitle}
                </p>
                <button
                  onClick={handleContactClick}
                  className="relative z-50 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300 cursor-pointer"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8 md:w-10 shadow-md'
                : 'bg-white/50 w-2.5 hover:bg-white/80 hover:w-4'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
