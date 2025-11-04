'use client';

import React from 'react';
import Image from 'next/image';
import { Row, Col } from 'antd';
import { motion, Variants } from 'framer-motion';

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

  /** ✅ Type-safe variants with correct easing format */
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }, // cubic-bezier equivalent of easeOut
    },
  };

  const fadeInFromLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const fadeInFromRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const ImageSection = () => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={isImageLeft ? fadeInFromLeft : fadeInFromRight}
      className="relative w-full h-full flex items-center justify-center"
    >
      <div className="relative w-full">
        {/* Decorative background dots */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-200 to-transparent rounded-full"
            style={{
              backgroundImage: 'radial-gradient(circle, #ddd 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
        </div>

        {/* Images container */}
        <div className="relative flex flex-col gap-6 p-4 sm:p-6 md:p-8">
          {imageArray.length === 2 ? (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {imageArray.map((img, idx) => (
                <motion.div
                  key={idx}
                  className={`w-full sm:w-1/2 relative aspect-[4/3] ${idx === 1 ? 'sm:mt-12' : ''}`}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                >
                  <Image
                    src={img}
                    alt={`Team member ${idx + 1}`}
                    fill
                    className="rounded-lg shadow-lg object-cover"
                  />
                </motion.div>
              ))}
            </div>
          ) : imageArray.length > 2 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {imageArray.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="relative aspect-[4/3]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                >
                  <Image
                    src={img}
                    alt={`Team member ${idx + 1}`}
                    fill
                    className="rounded-lg shadow-lg object-cover"
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              className="relative w-full aspect-[4/3]"
            >
              <Image
                src={imageArray[0]}
                alt="Feature"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );

  const ContentSection = () => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={isImageLeft ? fadeInFromRight : fadeInFromLeft}
      className="w-full h-full flex items-center justify-center"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        <motion.h1
          variants={fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-900 text-center sm:text-left"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-7 md:mb-8 sm:text-justify text-left"
        >
          {description}
        </motion.p>

        {subtitle && (
          <>
            <motion.h2
              variants={fadeInUp}
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 text-center sm:text-left"
            >
              {subtitle}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-7 md:mb-8 sm:text-justify text-left"
            >
              {subdescription}
            </motion.p>
          </>
        )}

        {button && (
          <motion.div variants={fadeInUp} className="flex justify-center sm:justify-start">
            {/* ✅ Enhanced button interaction */}
            <motion.button
              onClick={onButtonClick}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 8px 16px rgba(94,111,181,0.25)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              className="bg-[rgb(94,111,181)] font-medium px-6 h-11 rounded-[8px] w-full sm:w-auto text-white shadow-md hover:shadow-lg active:shadow-sm"
            >
              {button}
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <Row
          gutter={[
            { xs: 16, sm: 24, md: 32, lg: 32 },
            { xs: 16, sm: 24, md: 32, lg: 32 },
          ]}
          align="middle"
        >
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
