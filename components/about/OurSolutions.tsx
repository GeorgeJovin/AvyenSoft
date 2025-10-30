import { Card } from "antd";
import Image from "next/image";

const Solutions = () => {
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
]
  return (
    <>
      <div
  className="relative flex flex-col justify-center items-center text-center py-12 px-4"
  style={{
    backgroundImage: 'url("/assets/FooterBg.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "600px",
  }}
>
  {/* Dark overlay for better text contrast */}
  <div className="absolute inset-0 "></div>

  {/* CONTENT */}
  <div className="relative z-10 flex flex-col justify-center items-center w-full">
    {/* TITLE */}
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
      Our Solutions
    </h1>

    {/* CARDS */}
    <div className="flex justify-center flex-wrap gap-6">
      {data.map((item, index) => (
        <Card
          key={index}
          hoverable
          className="w-full sm:w-64 md:w-72 lg:w-80 text-center rounded-xl shadow-lg transition-transform transform hover:scale-105"
          style={{
            backgroundColor: "#33AFEA",
            border: "none",
            width: "400px",
          }}
        >
          <div className="flex flex-col items-start text-left">
            <h3 className="text-lg font-bold mb-2 text-white">
              {item.title}
            </h3>
            <p className="text-lg leading-relaxed text-white">
              {item.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  </div>
</div>

    </>
  );
};
export default Solutions;
