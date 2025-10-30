'use client';
import { ReactNode, useEffect, useState } from 'react';
import curve from "@/public/assets/svg/curve.svg"
import Image from 'next/image';

interface FixedImageHeroProps {
  imageUrl: any;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  height?: string;
  overlayOpacity?: number;
}

export default function FixedImageHero({
  imageUrl,
  title,
  subtitle,
  children,
  overlayOpacity = 0.5
}: FixedImageHeroProps) {
    const [height, setHeight] = useState("100vh");
      useEffect(() => {
    const updateHeight = () => {
      const width = window.innerWidth;
      if (width < 640) setHeight("30vh");
      else if (width < 1024) setHeight("80vh");
      else setHeight("100vh");
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
 <div className="relative w-full mt-30" style={{ height }}>
      
      {/* Background Image */}
      <div 
        className="absolute left-0 top-0 w-full h-full sm:w-11 sm:h-10"
        style={{ backgroundImage: `url(${imageUrl})`,backgroundSize: 'cover' }}
      />

      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Text Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-white px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl lg:text-2xl drop-shadow-md">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>

      {/* White Curved Bottom Edge using CSS */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-[80px] md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,100 350,100 600,50 C850,0 1050,0 1200,50 L1200,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
}