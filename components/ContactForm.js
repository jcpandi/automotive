'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

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

const vehicleTypes = [
  'Sedan',
  'SUV',
  'Sports Car',
  'Luxury',
  'Electric',
  'Truck',
  'Van',
  'Not Sure',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicleType: '',
    message: '',
    preferredContact: 'email',
    interestedVehicles: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitStatus('success');
    setIsSubmitting(false);

    // Reset form after success
    setTimeout(() => {
      setSubmitStatus(null);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        vehicleType: '',
        message: '',
        preferredContact: 'email',
        interestedVehicles: [],
      });
    }, 3000);
  };

  return (
    <section className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="text-4xl font-display font-bold text-white mt-2 mb-6">
              Contact Us Today
            </h2>
            <p className="text-gray-400 mb-8">
              Have questions about our vehicles or services? Our team of automotive experts is
              here to help you find the perfect car and provide exceptional service.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-200 rounded-xl p-4 hover:bg-dark-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-primary-600/20 rounded-lg shrink-0">
                      <info.icon size={22} className="text-primary-500" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-white font-semibold text-sm mb-0.5">{info.title}</h4>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-gray-300 text-xs leading-tight">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Live Chat CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
            >
              <MessageCircle size={20} />
              <span>Start Live Chat</span>
            </motion.button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-200 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Send Us a Message
            </h3>

            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} className="text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-gray-400">
                  Thank you for your inquiry. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-300 border border-dark-100 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-300 border border-dark-100 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-300 border border-dark-100 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-300 border border-dark-100 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Vehicle Type */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Interested Vehicle Type
                  </label>
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-300 border border-dark-100 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select a vehicle type</option>
                    {vehicleTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-300 border border-dark-100 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell us about your ideal vehicle..."
                  />
                </div>

                {/* Preferred Contact */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    {['email', 'phone', 'text'].map((method) => (
                      <label
                        key={method}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={handleChange}
                          className="w-4 h-4 text-primary-500 focus:ring-primary-500 rounded-full"
                        />
                        <span className="text-gray-300 capitalize">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-600/50 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
