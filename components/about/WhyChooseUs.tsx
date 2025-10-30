'use client';

import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    'Proven track record with Fortune 500 companies',
    'Expert team with decades of combined experience',
    'Comprehensive end-to-end solutions',
    'Cutting-edge technology expertise',
    'Client-focused approach',
    'Measurable results and ROI',
    'Flexible engagement models',
    'Industry-leading best practices',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-12 text-center">
            Why Choose Ayven Soft?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white p-4 rounded-lg hover:shadow-md transition-all"
              >
                <CheckCircle className="text-[#5e6fb5] flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
