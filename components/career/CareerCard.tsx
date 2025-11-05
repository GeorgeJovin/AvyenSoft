'use client';
import React from 'react';

const CareerContainer = () => {
  const careersData = [
    {
      title: 'Senior Software Developer',
      description: `(CASS Technologies LLC has multiple openings in Kissimmee, FL) Senior Software Developer: 
Oversee and provide guidance through the complete Software Development Life Cycle (SDLC) process, 
including analysis, design, testing, maintenance, and implementation. Perform final review and issue final approval 
of technical design documents, procedures, and processes. Lead technical presentations for clients and act as the main point of contact. 
Act as a liaison between engineering teams, product management, and stakeholders to ensure clear communication and alignment on objectives. 
Work directly with leadership to define and implement the technical vision, strategy, and roadmaps aligning with business goals. 
Utilize Oracle, SQL Server, PL/SQL, Teradata, Hadoop HIVE, Salesforce, SAP, Text files, and Excel documents. 
Will work in various unanticipated locations throughout the U.S. Requires Masters in Computer Science, Engineering, or related and 1 year experience.

Send your resume to info@casscg.com
430 New Park Ave, PMB 136, West Hartford, Connecticut 06110, US.`,
    },
    {
      title: 'Data Engineer',
      description: `Design, develop, and maintain large-scale data processing systems and pipelines. 
Work with cloud platforms like AWS or Azure, ETL tools, and big data technologies including Spark and Hadoop. 
Collaborate with analysts and stakeholders to deliver high-quality data solutions.`,
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 lg:px-20 mt-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {careersData.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-md bg-white shadow-sm">
            <div className="border-b border-gray-300 px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerContainer;
