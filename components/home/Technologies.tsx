'use client';

import { Cloud, Database, BarChart, Code, Lock, Boxes } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    { name: 'Azure', icon: Cloud, color: 'bg-blue-500' },
    { name: 'Tableau', icon: BarChart, color: 'bg-orange-500' },
    { name: 'Salesforce', icon: Cloud, color: 'bg-cyan-500' },
    { name: 'Power BI', icon: BarChart, color: 'bg-yellow-500' },
    { name: 'Qlik Sense', icon: Database, color: 'bg-green-500' },
    { name: 'Golang', icon: Code, color: 'bg-blue-400' },
    { name: 'Informatica', icon: Database, color: 'bg-red-500' },
    { name: 'MES', icon: Boxes, color: 'bg-purple-500' },
    { name: 'IAM', icon: Lock, color: 'bg-indigo-500' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">
            Technology Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expertise across industry-leading platforms and technologies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center text-center"
            >
              <div className={`w-16 h-16 ${tech.color} rounded-lg flex items-center justify-center mb-4`}>
                <tech.icon className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-[#1a2744]">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
