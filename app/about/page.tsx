import AboutHero from '@/components/about/AboutHero';
import Mission from '@/components/about/Mission';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import CTA from '@/components/home/CTA';

export const metadata = {
  title: 'About Us - Ayven Soft',
  description: 'Learn about Ayven Soft, a leading technology consulting firm dedicated to empowering businesses through innovation and excellence.',
};

export default function About() {
  return (
    <>
      <AboutHero />
      <Mission />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
