import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';

export const metadata = {
  title: 'Contact Us - Ayven Soft',
  description: 'Get in touch with Ayven Soft for your technology consulting and business solution needs.',
};

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </>
  );
}
