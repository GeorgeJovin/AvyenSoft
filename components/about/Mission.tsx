'use client';

import { Target, Eye, Award, Users } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower organizations with cutting-edge technology solutions and strategic consulting that drive sustainable growth and operational excellence.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the most trusted technology consulting partner for businesses seeking digital transformation and innovation.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Excellence, integrity, innovation, and client success are at the heart of everything we do.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse team of experienced consultants, developers, and strategists committed to your success.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#5e6fb5]/10 rounded-lg flex items-center justify-center mb-6">
                <value.icon className="text-[#5e6fb5]" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a2744] mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
