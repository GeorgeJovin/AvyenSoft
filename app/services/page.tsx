import FixedImageHero from "@/components/common/HeroSection";
import ServiceCards from "@/components/services/ServiceCards";

export const metadata = {
  title: 'Our Services - Ayven Soft',
  description:
    'Discover Ayven Soft’s range of professional services, including technology consulting, strategic planning, and business solutions designed to drive growth and efficiency.',
};


export default function Services() {
  return (
    <>
      <FixedImageHero imageUrl={"https://ayvensoft.com/wp-content/uploads/2024/11/contact-us-bg.webp"} title="Our Services"/>
      <ServiceCards/>
    </>
  );
}
