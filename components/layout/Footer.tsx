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
      <div className="container mx-auto px-4 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Avyen Soft</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              AyvenSoft is a Florida-based consulting company. We provide Professional Services, Strategic Planning, and Business Planning, offering solutions to improve processes, technology, and success.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#3b5998] rounded-full flex items-center justify-center hover:bg-[#2d4373] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0077b5] rounded-full flex items-center justify-center hover:bg-[#005582] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/career" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@ayvensoft.com" className="hover:text-white transition-colors">
                  info@ayvensoft.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+13529957787" className="hover:text-white transition-colors">
                  +1 (352) 995-7787
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+14079025451" className="hover:text-white transition-colors">
                  +1 (407) 902-5451
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>1130 E Donegan Ave, Suite 11, Kissimmee, FL 34744, Florida</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 text-center text-sm text-gray-400">
          <p>Copyright 2024 – All Rights Reserved By Ayvensoft.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;