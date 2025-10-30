"use client";
import { Card } from "antd";
import {
  BarChartOutlined,
  SettingOutlined,
  FundProjectionScreenOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const Expertise = () => {
  const data = [
    {
      icon: <FundProjectionScreenOutlined style={{ fontSize: "32px" }} />,
      title: "Strategic Planning",
      description:
        "Crafting forward-looking strategies to align your vision with market dynamics, ensuring long-term success.",
    },
    {
      icon: <DollarOutlined style={{ fontSize: "32px" }} />,
      title: "Business Planning",
      description:
        "Developing robust plans tailored to your operational and financial goals, enabling smarter decision-making and resource allocation.",
    },
    {
      icon: <BarChartOutlined style={{ fontSize: "32px" }} />,
      title: "Process Improvement",
      description:
        "Enhancing efficiency by identifying bottlenecks and implementing cutting-edge solutions to optimize workflows and outcomes.",
    },
    {
      icon: <SettingOutlined style={{ fontSize: "32px" }} />,
      title: "Technology Integration",
      description:
        "Leveraging the latest innovations to transform business processes and deliver measurable results.",
    },
  ];

  return (
    <div className="bg-[#F2F5F6] py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-4">Our Expertise:</h1>
        <p className="text-gray-700 text-[15px] leading-relaxed">
          We take pride in offering a wide range of consulting services designed
          to address the unique challenges of modern businesses. With a
          commitment to excellence, we help organizations navigate complexities
          and seize new opportunities. Our core services include:
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {data.map((item, index) => (
          <Card
            key={index}
            hoverable
            className="sm:w-80 lg:w-60 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-black mb-4">{item.icon}</div>
              <h3 className="text-[14px] font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-[12px] leading-relaxed">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
