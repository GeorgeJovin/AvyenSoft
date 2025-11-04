import FixedImageHero from '@/components/common/HeroSection';
import ServiceCards from '@/components/services/ServiceCards';

export const metadata = {
  title: 'Our Services - CASS Technologies',
  description:
    'Discover CASS Technologies’s range of professional services, including technology consulting, strategic planning, and business solutions designed to drive growth and efficiency.',
};

export default function Services() {
  return (
    <>
      <FixedImageHero imageUrl={'/assets/pic/cassImage1.webp'} title="Our Services" />
      <ServiceCards />
    </>
  );
}
