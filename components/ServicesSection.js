'use client';

import { motion } from 'framer-motion';
import {
  Wrench,
  Shield,
  Clock,
  Paintbrush,
  Key,
  Truck,
  ChevronRight,
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Expert Maintenance',
    description: 'Certified technicians using state-of-the-art equipment to keep your vehicle running perfectly.',
    features: ['Oil Changes', 'Brake Service', 'Engine Diagnostics'],
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80',
  },
  {
    icon: Shield,
    title: 'Extended Warranty',
    description: 'Comprehensive coverage plans that protect your investment for years to come.',
    features: ['PowerTrain', 'Full Coverage', 'Roadside Assistance'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    icon: Paintbrush,
    title: 'Premium Detailing',
    description: 'Professional cleaning and restoration services to maintain your vehicle\'s showroom shine.',
    features: ['Interior & Exterior', 'Paint Protection', 'Ceramic Coating'],
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=80',
  },
  {
    icon: Key,
    title: 'Financing Solutions',
    description: 'Flexible financing options tailored to your budget and credit situation.',
    features: ['Low Interest Rates', 'Leasing Options', 'Trade-In Value'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
  },
  {
    icon: Truck,
    title: 'Door-to-Door Delivery',
    description: 'Convenient vehicle delivery and pickup for all your service needs.',
    features: ['Free Delivery', 'Flexible Scheduling', 'Real-time Tracking'],
    image: 'https://images.unsplash.com/photo-1560526860-7a08d6fb821c?w=600&q=80',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for emergencies and inquiries.',
    features: ['Roadside Help', 'Online Chat', 'Phone Support'],
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl font-display font-bold text-white mt-2 mb-4">
            Complete Automotive Care
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From purchase to maintenance, we provide comprehensive services to ensure your
            automotive experience is nothing short of exceptional.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-dark-300 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent" />
                
                {/* Icon */}
                <div className="absolute bottom-4 left-4 p-3 bg-primary-600 rounded-xl">
                  <service.icon size={24} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight size={14} className="text-primary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-primary-500 hover:text-primary-400 font-medium transition-colors"
                >
                  <span>Learn More</span>
                  <ChevronRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
            >
              Explore All Services
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
