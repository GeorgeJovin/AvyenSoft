'use client';

import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-100 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/FooterBg.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Overview */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold mb-4 text-white">CASS Technologies</h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-6 max-w-sm">
              CASS Technologies is a Connecticut based consulting company. We provide Professional
              Services, Strategic Planning, and Business Planning, offering solutions to improve
              processes, technology, and success.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#3b5998] rounded-full flex items-center justify-center hover:bg-[#2d4373] hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0077b5] rounded-full flex items-center justify-center hover:bg-[#005582] hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links + Company (side by side on mobile) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white pb-2">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/career"
                      className="text-gray-200 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                    >
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-gray-200 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-of-use"
                      className="text-gray-200 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/disclaimer"
                      className="text-gray-200 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                    >
                      Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white pb-2">
                  Company
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-200 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-200 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-200 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                    >
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-200 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-4 text-white pb-2">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-200">
              <li className="flex items-start space-x-3 group">
                <Mail size={18} className="flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <a
                  href="mailto:info@casscg.com"
                  className="hover:text-white transition-colors break-all"
                >
                  info@casscg.com
                </a>
              </li>
              <li className="flex items-start space-x-2 group">
                <Phone size={18} className="flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <a
                  href="tel:+918604020699"
                  className="hover:text-white transition-colors"
                >
                  +91 8604020699
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  430 New Park Ave, PMB 136,<br />
                  West Hartford, Connecticut 06110, US.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-center text-sm text-gray-300">
            Copyright © 2025 – All Rights Reserved By casstechnologies.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
