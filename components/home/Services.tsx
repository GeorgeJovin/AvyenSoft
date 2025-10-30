'use client';

import { Target, TrendingUp, Settings, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Comprehensive strategic planning services to align your business goals with actionable roadmaps.',
    },
    {
      icon: TrendingUp,
      title: 'Business Planning',
      description: 'Expert business planning solutions to drive growth and optimize operations.',
    },
    {
      icon: Settings,
      title: 'Process Improvement',
      description: 'Streamline operations and enhance efficiency through proven process improvement methodologies.',
    },
    {
      icon: Zap,
      title: 'Technology Integration',
      description: 'Seamless technology integration to modernize your business infrastructure.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">
            Our Core Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver comprehensive consulting services designed to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#5e6fb5]/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-[#5e6fb5]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#1a2744] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
