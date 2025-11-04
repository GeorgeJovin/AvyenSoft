'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Career', path: '/career' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      } border-b border-gray-200`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/cassLogo.jpg"
              alt="Cass Logo"
              width={400}
              height={100}
              className="h-16 w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-base font-medium transition-colors relative py-2 ${
                  pathname === link.path ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {link.name}
                {pathname === link.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></span>
                )}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-base font-medium transition-colors px-4 py-2 rounded-md ${
                  pathname === link.path
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
