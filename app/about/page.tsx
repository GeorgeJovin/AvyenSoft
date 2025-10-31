import Expertise from "@/components/about/OurExpertise";
import Solutions from "@/components/about/OurSolutions";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import AboutContainer from "@/components/common/AboutPost";
import FixedImageHero from "@/components/common/HeroSection";

export const metadata = {
  title: "About Us - Ayven Soft",
  description:
    "Learn about Ayven Soft, a leading technology consulting firm dedicated to empowering businesses through innovation and excellence.",
};

export default function About() {
  return (
    <>
      <FixedImageHero
        imageUrl={
          "https://ayvensoft.com/wp-content/uploads/2024/11/contact-us-bg.webp"
        }
        title="About-Us"
      />
        <AboutContainer
        images={["/assets/heroPost.jpg"]}
        title="About US"
        description="Elevating Business Excellence through Strategic Consulting, Ayven Soft is the most trusted and the leading technology solution expert for different business domains. With its topnotch services, we are dedicated to delivering top-tier professional services that drive business success. As a trusted consulting partner, we specialize in Strategic Planning, Business Planning, and Process Improvement Solutions, empowering organizations to streamline operations, embrace innovative technologies, and achieve sustainable growth."
        subtitle="Our Approach:"
        subdescription="Ayven Soft employs a holistic approach to consulting. We partner with our clients to understand their specific needs and industry dynamics, delivering personalized solutions that create value. Our proven methodologies, combined with a deep understanding of various industries, position us as a leader in business consulting."
        imagePosition="left"
      />
      <Expertise />
      <Solutions />
      <WhyChooseUs />
    </>
  );
}
