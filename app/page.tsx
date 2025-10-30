import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Technologies from '@/components/home/Technologies';
import Clients from '@/components/home/Clients';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Technologies />
      <Clients />
      <CTA />
    </>
  );
}
