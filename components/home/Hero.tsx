'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Technology Consulting Solutions',
      subtitle: 'Empowering success through consulting, innovation, operations, and growth solutions',
      background: 'bg-gradient-to-r from-[#1a2744] to-[#5e6fb5]',
    },
    {
      title: 'Strategic Planning & Business Excellence',
      subtitle: 'Transform your business with expert consulting and technology integration',
      background: 'bg-gradient-to-r from-[#5e6fb5] to-[#1a2744]',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          } ${slide.background}`}
        >
          <div className="container mx-auto px-4 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight fade-in-up">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100 fade-in-up">
                {slide.subtitle}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-[#5e6fb5] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all"
      >
        <ChevronLeft className="text-white" size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all"
      >
        <ChevronRight className="text-white" size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
