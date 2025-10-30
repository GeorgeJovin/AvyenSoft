import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import ContactUs from '@/components/home/ContactUs';
import Clients from '@/components/home/Clients';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Clients />
      <CTA />
      <ContactUs />
    </>
  );
}
