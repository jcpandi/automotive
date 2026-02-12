'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, Globe, Shield, Zap } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '10K+', label: 'Happy Clients' },
  { value: '500+', label: 'Premium Vehicles' },
  { value: '50+', label: 'Brand Partners' },
];

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We believe in transparent and honest dealings with every client.',
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'We strive for perfection in every aspect of our service.',
  },
  {
    icon: Users,
    title: 'Client Focus',
    description: 'Your needs and satisfaction are our top priorities.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Access to premium vehicles from around the world.',
  },
];

const timeline = [
  {
    year: '2009',
    title: 'Foundation',
    description: 'Autoglide was established with a vision to transform the luxury car buying experience.',
  },
  {
    year: '2014',
    title: 'Expansion',
    description: 'Opened our flagship showroom and established partnerships with 20+ luxury brands.',
  },
  {
    year: '2019',
    title: 'Innovation',
    description: 'Launched digital platform for virtual tours and online reservations.',
  },
  {
    year: '2024',
    title: 'Today',
    description: 'Recognized as a leader in premium automotive retail with global presence.',
  },
];

export default function AboutPage() {
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
              About Autoglide
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6">
              Redefining Luxury<br />Automotive Experience
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Since 2009, we've been passionate about connecting discerning clients with their dream vehicles,
              offering unparalleled service and an exceptional collection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-display font-bold text-primary-500">{stat.value}</p>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-4xl font-display font-bold text-white mt-2 mb-6">
                A Passion for Automotive Excellence
              </h2>
              <p className="text-gray-400 mb-6">
                Autoglide was born from a simple yet powerful idea: everyone deserves to experience the joy of owning a premium vehicle without the traditional dealership hassles.
              </p>
              <p className="text-gray-400 mb-6">
                Today, we've grown into a trusted name in luxury automotive retail, serving thousands of satisfied clients worldwide. Our commitment to excellence has earned us numerous awards and, more importantly, the loyalty of our clients.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                  <Award size={32} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Award-Winning Service</p>
                  <p className="text-gray-400 text-sm">Recognized by Industry Leaders</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80"
                alt="Luxury car showroom"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-dark-300 p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-display font-bold text-primary-500">15+</p>
                <p className="text-gray-400">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-4xl font-display font-bold text-white mt-2">What Drives Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-dark-200 p-8 rounded-2xl text-center hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-4xl font-display font-bold text-white mt-2">Milestones</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-600/30 hidden md:block" />
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16 text-left'} pl-16 md:pl-0`}>
                  <div className={`bg-dark-300 p-6 rounded-xl ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-primary-500 font-display font-bold text-2xl">{item.year}</span>
                    <h3 className="text-xl font-semibold text-white mt-2">{item.title}</h3>
                    <p className="text-gray-400 mt-2">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />

      <Footer />
    </div>
  );
}
