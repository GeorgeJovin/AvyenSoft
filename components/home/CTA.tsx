'use client';

import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1a2744] to-[#5e6fb5] text-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
          Let us help you achieve your goals with our expert consulting and technology solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-white text-[#5e6fb5] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all hover:shadow-lg hover:-translate-y-1"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#5e6fb5] transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
