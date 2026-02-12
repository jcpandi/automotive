'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (800) 555-0123', '+1 (310) 555-0147'],
    subtext: 'Available 24/7',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@autoglide.com', 'sales@autoglide.com'],
    subtext: 'We respond within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Showroom',
    details: ['123 Automotive Blvd', 'Los Angeles, CA 90001'],
    subtext: 'Free parking available',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Mon-Fri: 9AM - 8PM', 'Sat-Sun: 10AM - 6PM'],
    subtext: 'Extended by appointment',
  },
];

export default function ContactPage() {
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have questions about our vehicles or services? Our team of automotive experts is
              here to help you find the perfect car and provide exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-200 rounded-xl p-6 hover:bg-dark-100 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-600/20 rounded-lg">
                    <info.icon size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    {info.details.map((detail) => (
                      <p key={detail} className="text-gray-300 text-sm">
                        {detail}
                      </p>
                    ))}
                    <p className="text-gray-500 text-xs mt-2">{info.subtext}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-dark-200 rounded-2xl overflow-hidden"
            >
              <div className="relative h-full min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80"
                  alt="Showroom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dark-300/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MapPin size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      Visit Our Showroom
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Experience our premium vehicles in person
                    </p>
                    <p className="text-gray-400">
                      123 Automotive Blvd<br />
                      Los Angeles, CA 90001
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="py-12 bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-primary-600/10 rounded-2xl border border-primary-500/30"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">Need Immediate Assistance?</h3>
                <p className="text-gray-400">Start a live chat with our team</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <MessageCircle size={20} />
              <span>Start Live Chat</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
