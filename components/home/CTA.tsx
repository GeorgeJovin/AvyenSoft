'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ContactSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      image: '/assets/pic/cassImage13.webp',
      title: 'AZURE',
      description:
        'Azure is a cloud platform by Microsoft offering scalable solutions for computing, storage, networking, and analytics. We provide Azure services to help businesses streamline operations, enhance security, and drive innovation.',
      link: 'https://azure.microsoft.com/',
    },
    {
      image: '/assets/pic/cassImage14.webp',
      title: 'TABLEAU',
      description:
        'We offer Tableau services to help businesses visualize and analyze data effectively. Our solutions enable insightful dashboards, data-driven decision-making, and improved reporting for enhanced organizational performance.',
      link: 'https://www.tableau.com/',
    },
    {
      image: '/assets/pic/cassImage15.webp',
      title: 'SALES FORCE',
      description:
        'We offer expert Salesforce services to help businesses streamline operations, enhance customer relationships, and drive growth. Our solutions are tailored to optimize Salesforce capabilities for improved efficiency.',
      link: 'https://www.salesforce.com/',
    },
    {
      image: '/assets/pic/cassImage16.webp',
      title: 'POWER BI',
      description:
        'Power BI is a powerful analytics tool that transforms data into interactive dashboards and reports. We help businesses visualize insights and make informed decisions with ease.',
      link: 'https://powerbi.microsoft.com/',
    },
    {
      image: '/assets/pic/cassImage17.webp',
      title: 'QLIK SENSE',
      description:
        'Qlik Sense enables interactive data visualization, analysis, and reporting. Our services help clients leverage Qlik for actionable insights and smarter decision-making.',
      link: 'https://www.qlik.com/us/products/qlik-sense',
    },
    {
      image: '/assets/pic/cassImage18.webp',
      title: 'GOLANG',
      description:
        'We provide expert Golang services, optimizing web development, microservices, and cloud solutions with efficiency, scalability, and performance.',
      link: 'https://go.dev/',
    },
    {
      image: '/assets/pic/cassImage19.webp',
      title: 'AWS',
      description:
        'Our AWS services empower businesses with reliable, scalable, and cost-effective cloud computing solutions tailored to their needs.',
      link: 'https://aws.amazon.com/',
    },
    {
      image: '/assets/pic/cassImage20.webp',
      title: 'PYTHON',
      description:
        'We deliver robust Python solutions for automation, data science, web development, and AI integration, driving business efficiency and innovation.',
      link: 'https://www.python.org/',
    },
    {
      image: '/assets/pic/cassImage21.webp',
      title: 'REACT JS',
      description:
        'React JS powers modern, responsive, and fast web applications. We build scalable interfaces that enhance user experience and performance.',
      link: 'https://react.dev/',
    },
  ];

  const totalSlides = services.length;
  const desktopSlidesCount = Math.ceil(services.length / 3);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const nextDesktopSlide = () => setCurrentSlide((prev) => (prev + 1) % desktopSlidesCount);

  const prevDesktopSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + desktopSlidesCount) % desktopSlidesCount);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 pt-16 pb-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/pic/cassImage2.webp')] opacity-30 bg-cover bg-center"></div>

      <div className="relative mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm md:text-base tracking-widest uppercase mb-4">
            CONTACT US
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-relaxed mx-auto">
            We Deliver Solution with the Goal of Trusting Relationships
          </h1>
        </div>

        {/* Desktop View */}
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
                        <div className="flex justify-center mb-6">
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={100}
                            height={100}
                            className="object-contain rounded-lg"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                          {service.title}
                        </h3>
                        <p className="text-gray-700 text-sm text-center flex-grow mb-6">
                          {service.description}
                        </p>
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-sky-400 hover:bg-sky-500 text-white font-semibold py-2 rounded-lg text-center transition-colors duration-300"
                        >
                          Read More
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {desktopSlidesCount > 1 && (
            <>
              <button
                onClick={prevDesktopSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Mobile View */}
        <div className="lg:hidden relative px-2">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-4 shadow-2xl h-full">
                    <div className="flex justify-center mb-6">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={100}
                        height={100}
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-base text-center mb-8">
                      {service.description}
                    </p>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-sky-400 hover:bg-sky-500 text-white font-semibold py-2 rounded-lg text-center block transition-colors duration-300"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-[-10px] top-1/2 -translate-y-1/2 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
