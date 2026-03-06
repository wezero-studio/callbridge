import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Marquee from './components/Marquee/Marquee';
import PaymentCards from './components/PaymentCards/PaymentCards';
import HowItWorks from './components/HowItWorks/HowItWorks';
import LeadTypes from './components/LeadTypes/LeadTypes';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import CTABanner from './components/CTABanner/CTABanner';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="home"><Hero /></div>
      <Marquee />
      <PaymentCards />
      <div id="how-it-works" style={{ display: 'contents' }}><HowItWorks /></div>
      <div id="lead-types"><LeadTypes /></div>
      <div id="why-us"><WhyChooseUs /></div>
      <Testimonials />
      <div id="contact"><Contact /></div>
      <CTABanner />
      <Footer />
    </main>
  );
}
