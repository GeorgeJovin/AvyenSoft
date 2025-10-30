import Expertise from "@/components/about/OurExpertise";
import Solutions from "@/components/about/OurSolutions";
import WhyChooseUs from '@/components/about/WhyChooseUs';
import FixedImageHero from "@/components/common/HeroSection";

export const metadata = {
  title: 'About Us - Ayven Soft',
  description: 'Learn about Ayven Soft, a leading technology consulting firm dedicated to empowering businesses through innovation and excellence.',
};

export default function About() {
  return (
    <>
    <FixedImageHero imageUrl={"https://ayvensoft.com/wp-content/uploads/2024/11/contact-us-bg.webp"} title="About-Us"/>
    <Expertise/>
    <Solutions/>
    <WhyChooseUs/>
    </>
  );
}
