'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeaturedVehicles from '../components/FeaturedVehicles';
import ServicesSection from '../components/ServicesSection';
import BrandsSection from '../components/BrandsSection';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-300">
      <Header />
      <main>
        <Hero />
        <FeaturedVehicles />
        <ServicesSection />
        <BrandsSection />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
