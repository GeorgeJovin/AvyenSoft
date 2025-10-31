import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import ContactUs from "@/components/home/ContactUs";
import Clients from "@/components/home/Clients";
import CTA from "@/components/home/CTA";
import AboutContainer from "@/components/common/AboutPost";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutContainer
        images={["/assets/chooseUs.jpg"]}
        title="Ayven Soft"
        description="Elevating Business Excellence through Strategic Consulting, Ayven Soft is the most trusted and the leading technology solution expert for different business domains. With its topnotch services, we are dedicated to delivering top-tier professional services that drive business success. As a trusted consulting partner, we specialize in Strategic Planning, Business Planning, and Process Improvement Solutions, empowering organizations to streamline operations, embrace innovative technologies, and achieve sustainable growth."
        button="Read More"
        imagePosition="right"
      />
      <Services />
      <Clients />
      <CTA />
      <ContactUs />
    </>
  );
}
