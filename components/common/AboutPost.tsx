
'use client';

import React from 'react';
import { Button, Row, Col } from 'antd';

interface AboutContainerProps {
  images: string | string[];
  title: string;
  description: string;
  button?: string;
  imagePosition?: 'left' | 'right';
  subtitle?: string;
  subdescription?: string;
  onButtonClick?: () => void;
}

const AboutContainer: React.FC<AboutContainerProps> = ({ 
  images, 
  title, 
  description, 
  button, 
  imagePosition = 'right',
  subtitle,
  subdescription,
  onButtonClick,
}) => {
  const isImageLeft = imagePosition === 'left';
  const imageArray = Array.isArray(images) ? images : [images];
  
  const ImageSection = () => (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-full">
        {/* Decorative background dots */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div 
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-200 to-transparent rounded-full" 
            style={{ 
              backgroundImage: 'radial-gradient(circle, #ddd 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} 
          />
        </div>
        
        {/* Images container */}
        <div className="relative flex flex-col gap-6 p-4 sm:p-6 md:p-8">
          {imageArray.length === 2 ? (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="w-full sm:w-1/2">
                <img 
                  src={imageArray[0]} 
                  alt="Team member 1"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="w-full sm:w-1/2 sm:mt-12">
                <img 
                  src={imageArray[1]} 
                  alt="Team member 2"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          ) : imageArray.length > 2 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {imageArray.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`Team member ${idx + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              ))}
            </div>
          ) : (
            <img 
              src={imageArray[0]} 
              alt="Feature"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
  
  const ContentSection = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-900 text-center sm:text-left">
          {title}
        </h1>
        
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-7 md:mb-8 text-justify">
          {description}
        </p>
        
        {subtitle && (
          <>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 text-center sm:text-left">
              {subtitle}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-7 md:mb-8 text-justify">
              {subdescription}
            </p>
          </>
        )}
        
        {button && (
          <div className="flex justify-center sm:justify-start">
            <Button 
              type="primary" 
              size="large"
              onClick={onButtonClick}
              className="bg-indigo-500 hover:bg-indigo-600 border-indigo-500 hover:border-indigo-600 font-medium px-6 sm:px-8 h-10 sm:h-12 rounded-md shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              {button}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
  
  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <Row gutter={[{ xs: 16, sm: 24, md: 32, lg: 32 }, { xs: 16, sm: 24, md: 32, lg: 32 }]} align="middle">
          {isImageLeft ? (
            <>
              <Col xs={24} sm={24} md={24} lg={12}>
                <ImageSection />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12}>
                <ContentSection />
              </Col>
            </>
          ) : (
            <>
              <Col xs={24} sm={24} md={24} lg={12}>
                <ContentSection />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12}>
                <ImageSection />
              </Col>
            </>
          )}
        </Row>
      </div>
    </section>
  );
};

export default AboutContainer;