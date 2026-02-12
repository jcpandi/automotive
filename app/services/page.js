'use client';

import { motion } from 'framer-motion';
import { Wrench, Shield, Clock, Paintbrush, Key, Truck, Phone, Mail, MapPin } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const services = [
  {
    icon: Wrench,
    title: 'Expert Maintenance',
    description: 'Certified technicians using state-of-the-art equipment to keep your vehicle running perfectly.',
    features: ['Oil Changes', 'Brake Service', 'Engine Diagnostics', 'Tire Rotation', 'Battery Replacement'],
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80',
  },
  {
    icon: Shield,
    title: 'Extended Warranty',
    description: 'Comprehensive coverage plans that protect your investment for years to come.',
    features: ['PowerTrain Coverage', 'Full Protection', 'Roadside Assistance', 'Rental Car Coverage'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    icon: Paintbrush,
    title: 'Premium Detailing',
    description: 'Professional cleaning and restoration services to maintain your vehicle\'s showroom shine.',
    features: ['Interior & Exterior', 'Paint Protection', 'Ceramic Coating', 'PPF Installation'],
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=80',
  },
  {
    icon: Key,
    title: 'Financing Solutions',
    description: 'Flexible financing options tailored to your budget and credit situation.',
    features: ['Low Interest Rates', 'Leasing Options', 'Trade-In Value', 'First-Time Buyer Programs'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
  },
  {
    icon: Truck,
    title: 'Door-to-Door Delivery',
    description: 'Convenient vehicle delivery and pickup for all your service needs.',
    features: ['Free Delivery', 'Flexible Scheduling', 'Real-time Tracking', 'White-Glove Service'],
    image: 'https://images.unsplash.com/photo-1560526860-7a08d6fb821c?w=600&q=80',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for emergencies and inquiries.',
    features: ['Roadside Help', 'Online Chat', 'Phone Support', 'Emergency Assistance'],
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80',
  },
];

const whyChooseUs = [
  { title: 'Certified Technicians', description: 'Our team consists of manufacturer-certified professionals.' },
  { title: 'Genuine Parts', description: 'We use only authentic OEM parts for all services.' },
  { title: 'Warranty Backed', description: 'All our services come with comprehensive warranty coverage.' },
  { title: 'Convenient Scheduling', description: 'Online booking with flexible appointment times.' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-dark-300">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-dark-200">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark-300" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6">
              Complete Automotive Care
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From purchase to maintenance, we provide comprehensive services to ensure your
              automotive experience is nothing short of exceptional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-dark-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent" />
                  <div className="absolute bottom-4 left-4 p-3 bg-primary-600 rounded-xl">
                    <service.icon size={24} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl font-display font-bold text-white mt-2">The Autoglide Difference</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-2 h-2 bg-primary-500 rounded-full" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark-200 p-8 rounded-2xl text-center"
            >
              <Phone size={40} className="text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400">+1 (800) 555-0123</p>
              <p className="text-gray-500 text-sm mt-1">Available 24/7</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-dark-200 p-8 rounded-2xl text-center"
            >
              <Mail size={40} className="text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400">service@autoglide.com</p>
              <p className="text-gray-500 text-sm mt-1">Response within 24 hours</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-dark-200 p-8 rounded-2xl text-center"
            >
              <MapPin size={40} className="text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400">123 Automotive Blvd</p>
              <p className="text-gray-500 text-sm mt-1">Los Angeles, CA 90001</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
