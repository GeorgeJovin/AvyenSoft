'use client';
import { Card } from 'antd';
import Image from 'next/image';

const Solutions = () => {
  const data = [
    {
      title: 'Strategic Planning',
      description: 'Innovative frameworks that adapt to diverse industries and market demands.',
    },
    {
      title: 'Process Automation Tools',
      description: 'Cutting-edge technology to simplify operations and enhance productivity.',
    },
    {
      title: 'Performance Analytics',
      description:
        'Data-driven insights to measure success and identify opportunities for continuous improvement.',
    },
  ];

  return (
    <div
      className="relative flex flex-col justify-center items-center text-center py-16 px-4 sm:pb-32"
      style={{
        backgroundImage: 'url("/assets/pic/cassImage2.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full max-w-7xl mx-auto">
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-white">Our Solutions</h1>

        {/* CARDS */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 w-full lg:px-32 px-8">
          {data.map((item, index) => (
            <Card
              key={index}
              className="md:w-1/3 w-full text-left rounded-xl shadow-lg transition-transform transform hover:scale-105"
              style={{
                backgroundColor: '#33AFEA',
                border: 'none',
              }}
            >
              <div className="flex flex-col">
                <h3 className="text-[14px] font-bold mb-2 text-white">{item.title}:</h3>
                <p className="text-white text-[14px] leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
