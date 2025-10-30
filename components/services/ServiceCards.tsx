"use client";
import React from "react";
import CardContainer from "@/components/common/ReusableCard"

const ServiceCards: React.FC = () => {
    const services = [
        {
            image: "https://ayvensoft.com/wp-content/uploads/2024/11/azure.png",
            title: "AZURE",
            description:
                "Azure is a cloud platform by Microsoft offering scalable solutions for computing, storage, networking, and analytics. We provide Azure services to help businesses streamline operations, enhance security, and drive innovation.",
            buttonText: "Read More",
        },
        {
            image: "https://ayvensoft.com/wp-content/uploads/2024/11/tablue.jpg",
            title: "TABLEAU",
            description:
                "We offer Tableau services to help businesses visualize and analyze data effectively. Our solutions enable insightful dashboards, data-driven decision-making, and improved reporting for enhanced organizational performance.",
            buttonText: "Read More",
        },
        {
            image: "https://ayvensoft.com/wp-content/uploads/2024/11/infarmitica.jpg",
            title: "SALES FORCE",
            description:
                "We offer expert Salesforce services to help businesses streamline operations, enhance customer relationships, and drive growth. Our solutions are tailored to optimize Salesforce capabilities for improved efficiency.",
            buttonText: "Read More",
        },
        {
            image: "https://ayvensoft.com/wp-content/uploads/2024/11/salesforce.png",
            title: "POWER BI",
            description:
                "Power BI is a powerful analytics tool that transforms data into interactive dashboards and reports. We help businesses visualize insights and make informed decisions with ease.",
            buttonText: "Read More",
        },
        {
            image: "https://ayvensoft.com/wp-content/uploads/2024/11/power-bi.jpg",
            title: "QLIK SENSE",
            description:
                "Qlik Sense enables interactive data visualization, analysis, and reporting. Our services help clients leverage Qlik for actionable insights and smarter decision-making.",
            buttonText: "Read More",
        },
        {
            image: "https://ayvensoft.com/wp-content/uploads/2024/11/quick-sense.jpg",
            title: "GOLANG",
            description:
                "We provide expert Golang services, optimizing web development, microservices, and cloud solutions with efficiency, scalability, and performance.",
            buttonText: "Read More",
        },
        {
            image: "https://ayvensoft.com/wp-content/uploads/2024/11/golang.jpg",
            title: "AWS",
            description:
                "Our AWS services empower businesses with reliable, scalable, and cost-effective cloud computing solutions tailored to their needs.",
            buttonText: "Read More",
        },
        {
            image: "https://ayvensoft.com/wp-content/uploads/2024/11/infarmitica.jpg",
            title: "PYTHON",
            description:
                "We deliver robust Python solutions for automation, data science, web development, and AI integration, driving business efficiency and innovation.",
            buttonText: "Read More",
        },
        {
            image: "https://ayvensoft.com/wp-content/uploads/2024/11/tablue.jpg",
            title: "REACT JS",
            description:
                "React JS powers modern, responsive, and fast web applications. We build scalable interfaces that enhance user experience and performance.",
            buttonText: "Read More",
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
                        buttonText={service.buttonText}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServiceCards;
