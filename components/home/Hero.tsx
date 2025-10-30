"use client"
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Driving Success with Trusted Tech Solutions',
      subtitle: 'Empowering success, Ayven Soft delivers consulting, innovation, operations, and growth solutions.',
      bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    },
    {
      title: 'Strategic Innovation & Growth',
      subtitle: 'Transform your business with cutting-edge technology and expert consulting services.',
      bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-blue-900/80"></div>
          </div>

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
              <div className="max-w-3xl">
                <h1 className="text-white text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 leading-relaxed opacity-95">
                  {slide.subtitle}
                </p>
                <button className="bg-transparent border-2 border-white text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white" size={28} />
      </button> */}

      {/* <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white" size={28} />
      </button> */}

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8 md:w-10' 
                : 'bg-white/50 w-2.5 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;