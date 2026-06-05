import Hero from '../components/sections/Hero';
import AboutGuru from '../components/sections/AboutGuru';
import Services from '../components/sections/Services';
import PoojaSection from '../components/sections/PoojaSection';
import YantraSection from '../components/sections/YantraSection';
import Expertise from '../components/sections/Expertise';
import Awards from '../components/sections/Awards';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import OnlineConsultation from '../components/sections/OnlineConsultation';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import CTA from '../components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutGuru />
      <Services />
      <PoojaSection />
      <YantraSection />
      <Expertise />
      <Awards />
      <WhyChooseUs />
      <OnlineConsultation />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
    </>
  );
}
