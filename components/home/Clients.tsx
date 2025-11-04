'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Clients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 10 client logos with placeholder images
  const clients = [
    { name: 'Neycer', image: '/assets/pic/cassImage3.webp' },
    { name: 'NYC Education', image: '/assets/pic/cassImage4.webp' },
    { name: 'Ortum Projekt', image: '/assets/pic/cassImage5.webp' },
    { name: 'Spearhead Design', image: '/assets/pic/cassImage6.webp' },
    { name: 'California State', image: '/assets/pic/cassImage7.webp' },
    { name: 'Northern Trust', image: '/assets/pic/cassImage6.webp' },
    { name: 'Tech Corp', image: '/assets/pic/cassImage8.webp' },
    { name: 'Global Industries', image: '/assets/pic/cassImage9.webp' },
    { name: 'Innovation Labs', image: '/assets/pic/cassImage10.webp' },
    { name: 'Digital Solutions', image: '/assets/pic/cassImage11.webp' },
  ];

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Split clients for different views
  const desktopSlides = [clients.slice(0, 5), clients.slice(5, 10)];

  const mobileSlides = [
    clients.slice(0, 2),
    clients.slice(2, 4),
    clients.slice(4, 6),
    clients.slice(6, 8),
    clients.slice(8, 10),
  ];

  const totalSlides = isMobile ? mobileSlides.length : desktopSlides.length;

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, totalSlides]);

  // Reset slide when switching between mobile/desktop
  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentSlides = isMobile ? mobileSlides : desktopSlides;

  return (
    <section className="py-12 bg-white">
      <div className="mx-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Clients:</h2>
        </div>

        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Previous clients"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-8 md:mx-16 w-full">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {currentSlides.map((slideClients, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                    {slideClients.map((client, index) => (
                      <div key={index} className="flex items-center justify-center">
                        <Image
                          src={client.image}
                          alt={client.name}
                          className="w-full h-full object-contain"
                          width={300}
                          height={200}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Next clients"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
