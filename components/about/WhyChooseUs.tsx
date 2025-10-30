'use client';

import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const WhyChooseUs = () => {


  return (
<section className="bg-gray-50 py-20">
  <div className="flex flex-col lg:flex-row items-stretch px-[30px] gap-12">
    
    {/* LEFT: IMAGE */}
    <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto">
      <Image
        src="/assets/chooseUs.jpg"
        alt="Why Choose Us"
        width={800}
        height={900}
        className="rounded-2xl w-full h-full"
      />
    </div>

    {/* RIGHT: CONTENT */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Why Choose Us?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Our team of experts brings decades of experience across various industries, 
        from manufacturing to services. By fostering collaboration and innovation, 
        we have helped countless clients achieve their goals. Our commitment to 
        quality and client satisfaction sets us apart, making Ayven Soft the 
        preferred choice for businesses seeking strategic growth.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Driving Success Across Industries:
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Whether it’s introducing scalable solutions for small and medium enterprises 
        or revolutionizing operations for large corporations, our track record of 
        success is a testament to our expertise and dedication.
      </p>
    </div>
  </div>
</section>
  );
};

export default WhyChooseUs;
