'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import AboutContainer from '../common/AboutPost';

const ReadMore = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/about');
  };

  return (
    <AboutContainer
      images={['/assets/pic/cassImage26.png']}
      title="CASS Technologies"
      description="Elevating Business Excellence through Strategic Consulting, CASS Technologies is the most trusted and the leading technology solution expert for different business domains. With its topnotch services, we are dedicated to delivering top-tier professional services that drive business success. As a trusted consulting partner, we specialize in Strategic Planning, Business Planning, and Process Improvement Solutions, empowering organizations to streamline operations, embrace innovative technologies, and achieve sustainable growth."
      button="Read More"
      imagePosition="right"
      onButtonClick={handleButtonClick}
    />
  );
};

export default ReadMore;
