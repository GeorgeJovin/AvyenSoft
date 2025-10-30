import { Card } from "antd";
import Image from "next/image";

const Expertise = () => {
    const data = [
  {
    image: "/assets/heroSection.png",
    title: "Business Consulting",
    description:
      "Our expert consultants provide data-driven strategies to help your company grow efficiently and sustainably.",
    buttonText: "Learn More",
  },
  {
    image: "/assets/heroSection.png",
    title: "Business Consulting",
    description:
      "Our expert consultants provide data-driven strategies to help your company grow efficiently and sustainably.",
    buttonText: "Learn More",
  },
  {
    image: "/assets/heroSection.png",
    title: "Business Consulting",
    description:
      "Our expert consultants provide data-driven strategies to help your company grow efficiently and sustainably.",
    buttonText: "Learn More",
  },
  {
    image: "/assets/heroSection.png",
    title: "Business Consulting",
    description:
      "Our expert consultants provide data-driven strategies to help your company grow efficiently and sustainably.",
    buttonText: "Learn More",
  },
]
  return (
    <>
      <div className="bg-[#F2F5F6] text-center py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in-up">
            Our Expertise:
          </h1>
          <p className="text-gray-700 text-xl leading-relaxed">
            We take pride in offering a wide range of consulting services
            designed to address the unique challenges of modern businesses. With
            a commitment to excellence, we help organizations navigate
            complexities and seize new opportunities. Our core services include:
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-6 mt-5">
        {data.map((item, index) => (
          <Card
            key={index}
            hoverable
            className="w-3/4 sm:w-64 md:w-72 lg:w-80 text-center rounded-2xl shadow-md transition-transform transform"
            style={{ backgroundColor: "white", border: "1px solid #e5e7eb", height:"50vh" }}
          >
            <div className="flex flex-col items-center">
              <Image
                src={item.image}
                alt={item.title}
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
      </div>
    </>
  );
};
export default Expertise;
