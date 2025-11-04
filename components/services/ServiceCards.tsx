'use client';
import React from 'react';
import CardContainer from '@/components/common/ReusableCard';

const ServiceCards: React.FC = () => {
  const services = [
    {
      image: '/assets/pic/cassImage13.webp',
      title: 'AZURE',
      description:
        'Azure is a cloud platform by Microsoft offering scalable solutions for computing, storage, networking, and analytics. We provide Azure services to help businesses streamline operations, enhance security, and drive innovation.',
      link: 'https://azure.microsoft.com/',
    },
    {
      image: '/assets/pic/cassImage14.webp',
      title: 'TABLEAU',
      description:
        'We offer Tableau services to help businesses visualize and analyze data effectively. Our solutions enable insightful dashboards, data-driven decision-making, and improved reporting for enhanced organizational performance.',
      link: 'https://www.tableau.com/',
    },
    {
      image: '/assets/pic/cassImage15.webp',
      title: 'SALES FORCE',
      description:
        'We offer expert Salesforce services to help businesses streamline operations, enhance customer relationships, and drive growth. Our solutions are tailored to optimize Salesforce capabilities for improved efficiency.',
      link: 'https://www.salesforce.com/',
    },
    {
      image: '/assets/pic/cassImage16.webp',
      title: 'POWER BI',
      description:
        'Power BI is a powerful analytics tool that transforms data into interactive dashboards and reports. We help businesses visualize insights and make informed decisions with ease.',
      link: 'https://powerbi.microsoft.com/',
    },
    {
      image: '/assets/pic/cassImage17.webp',
      title: 'QLIK SENSE',
      description:
        'Qlik Sense enables interactive data visualization, analysis, and reporting. Our services help clients leverage Qlik for actionable insights and smarter decision-making.',
      link: 'https://www.qlik.com/us/products/qlik-sense',
    },
    {
      image: '/assets/pic/cassImage18.webp',
      title: 'GOLANG',
      description:
        'We provide expert Golang services, optimizing web development, microservices, and cloud solutions with efficiency, scalability, and performance.',
      link: 'https://go.dev/',
    },
    {
      image: '/assets/pic/cassImage19.webp',
      title: 'AWS',
      description:
        'Our AWS services empower businesses with reliable, scalable, and cost-effective cloud computing solutions tailored to their needs.',
      link: 'https://aws.amazon.com/',
    },
    {
      image: '/assets/pic/cassImage20.webp',
      title: 'PYTHON',
      description:
        'We deliver robust Python solutions for automation, data science, web development, and AI integration, driving business efficiency and innovation.',
      link: 'https://www.python.org/',
    },
    {
      image: '/assets/pic/cassImage21.webp',
      title: 'REACT JS',
      description:
        'React JS powers modern, responsive, and fast web applications. We build scalable interfaces that enhance user experience and performance.',
      link: 'https://react.dev/',
    },
  ];

  return (
    <div className="mx-8 md:mx-20 lg:mx-56 my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {services.map((service, index) => (
          <CardContainer
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            buttonText="Read More"
            onButtonClick={() => window.open(service.link, '_blank', 'noopener,noreferrer')}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
