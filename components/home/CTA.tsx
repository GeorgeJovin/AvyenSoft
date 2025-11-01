"use client";
import React, { useState } from "react";

const ContactSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "TABLEAU",
      description:
        "We provide Tableau services to help businesses create insightful dashboards, improve reporting, and enable data-driven decisions for enhanced performance and strategic success.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto">
          <defs>
            <linearGradient id="tableauGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#4E79A7" }} />
              <stop offset="100%" style={{ stopColor: "#E15759" }} />
            </linearGradient>
          </defs>
          <polygon
            points="50,10 90,35 90,65 50,90 10,65 10,35"
            fill="url(#tableauGrad)"
          />
        </svg>
      ),
    },
    {
      title: "SALES FORCE",
      description:
        "We provide expert Salesforce services, streamlining operations, enhancing customer relationships, and driving growth with tailored solutions to maximize efficiency and business success.",
      icon: (
        <svg viewBox="0 0 200 100" className="w-32 h-16 mx-auto">
          <path
            d="M50,50 Q30,30 50,20 Q70,30 50,50 Q30,70 50,80 Q70,70 50,50 M70,50 Q90,30 110,20 Q130,30 110,50 Q90,70 110,80 Q130,70 110,50 M90,50 Q110,30 130,20 Q150,30 130,50 Q110,70 130,80 Q150,70 130,50"
            fill="#00A1E0"
          />
        </svg>
      ),
    },
    {
      title: "POWER BI",
      description:
        "We offer Power BI services, transforming data into interactive dashboards and reports, providing businesses with actionable insights to make informed decisions, drive success, and optimize performance effectively.",
      icon: (
        <svg viewBox="0 0 100 80" className="w-16 h-16 mx-auto">
          <rect x="20" y="50" width="15" height="30" fill="#F2C811" />
          <rect x="42.5" y="35" width="15" height="45" fill="#F2C811" />
          <rect x="65" y="20" width="15" height="60" fill="#F2C811" />
        </svg>
      ),
    },
    {
      title: "DATA ANALYTICS",
      description:
        "We provide comprehensive data analytics services to help businesses unlock insights, optimize operations, and make data-driven decisions for sustainable growth and competitive advantage.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto">
          <circle cx="50" cy="50" r="35" fill="none" stroke="#4CAF50" strokeWidth="8"/>
          <circle cx="50" cy="50" r="20" fill="#4CAF50"/>
          <line x1="50" y1="50" x2="75" y2="35" stroke="#4CAF50" strokeWidth="4"/>
        </svg>
      ),
    },
    {
      title: "CLOUD SOLUTIONS",
      description:
        "We deliver scalable cloud solutions that enhance flexibility, reduce costs, and improve collaboration, enabling businesses to innovate and grow in the digital landscape.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto">
          <path d="M70,50 Q80,35 70,30 Q65,25 60,25 Q58,15 50,15 Q42,15 40,25 Q35,25 30,30 Q20,35 30,50 Z" fill="#2196F3"/>
        </svg>
      ),
    },
    {
      title: "AI & ML",
      description:
        "We harness the power of artificial intelligence and machine learning to automate processes, predict trends, and deliver intelligent solutions that transform business operations.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto">
          <circle cx="50" cy="50" r="30" fill="none" stroke="#9C27B0" strokeWidth="4"/>
          <circle cx="50" cy="35" r="5" fill="#9C27B0"/>
          <circle cx="35" cy="55" r="5" fill="#9C27B0"/>
          <circle cx="65" cy="55" r="5" fill="#9C27B0"/>
        </svg>
      ),
    },
  ];

  const totalSlides = services.length;
  const desktopSlidesCount = Math.ceil(services.length / 3);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % totalSlides);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const nextDesktopSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % desktopSlidesCount);

  const prevDesktopSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + desktopSlidesCount) % desktopSlidesCount);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 pt-16 pb-24 px-4 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('https://ayvensoft.com/wp-content/uploads/2024/12/h1-bg04.jpg')] opacity-30 bg-cover bg-center"></div>

      <div className="relative mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm md:text-base tracking-widest uppercase mb-4">
            CONTACT US
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-relaxed mx-auto">
            We Deliver Solution with the Goal of Trusting Relationships
          </h1>
        </div>

        {/* Desktop View - 3 cards per slide */}
        <div className="hidden lg:block relative px-4">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: desktopSlidesCount }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="flex gap-6 justify-center">
                    {services.slice(slideIndex * 3, slideIndex * 3 + 3).map((service, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-6 flex flex-col w-[30%] shadow-2xl hover:shadow-3xl transition-all duration-300"
                      >
                        <div className="mb-6">{service.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                          {service.title}
                        </h3>
                        <p className="text-gray-700 text-sm text-center flex-grow mb-6">
                          {service.description}
                        </p>
                        <button className="w-full bg-sky-400 hover:bg-sky-500 text-white font-semibold py-2 rounded-lg transition-colors duration-300">
                          Read More
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation Arrows */}
          {desktopSlidesCount > 1 && (
            <>
              <button
                onClick={prevDesktopSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-white"
              >
                <svg
                  className="w-6 h-6"
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
              <button
                onClick={nextDesktopSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Mobile View - 1 card per slide */}
        <div className="lg:hidden relative px-2">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-4 shadow-2xl h-full">
                    <div className="mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-base text-center mb-8">
                      {service.description}
                    </p>
                    <button className="w-full bg-sky-400 hover:bg-sky-500 text-white font-semibold py-2 rounded-lg transition-colors duration-300">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-[-10px] top-1/2 -translate-y-1/2 text-white"
          >
            <svg
              className="w-6 h-6"
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
          <button
            onClick={nextSlide}
            className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;