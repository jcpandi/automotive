'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael Rodriguez',
    title: 'CEO, Tech Innovations',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    rating: 5,
    content: 'The team at Autoglide made my dream of owning a Porsche a reality. Their expertise and transparency throughout the process were exceptional. I couldn\'t be happier with my new 911 GT3.',
    vehicle: 'Porsche 911 GT3',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    title: 'Executive, Global Finance',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    rating: 5,
    content: 'From test drive to delivery, every interaction was professional and personalized. The S-Class they helped me select exceeds all my expectations. Truly five-star service!',
    vehicle: 'Mercedes-Benz S-Class',
  },
  {
    id: 3,
    name: 'David Park',
    title: 'Entrepreneur',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    rating: 5,
    content: 'I\'ve purchased luxury vehicles from dealerships worldwide, but Autoglide offers an experience unlike any other. Their inventory is unmatched and their staff truly knows cars.',
    vehicle: 'Tesla Model S Plaid',
  },
  {
    id: 4,
    name: 'Emily Watson',
    title: 'Attorney at Law',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    rating: 5,
    content: 'The buying process was seamless. They handled all the paperwork and even arranged delivery to my office. Highly recommend for anyone seeking a premium car buying experience.',
    vehicle: 'BMW M4 Competition',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-dark-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl font-display font-bold text-white mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don\'t just take our word for it. Hear from our satisfied clients who have experienced
            the Autoglide difference.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 p-3 bg-dark-300 hover:bg-primary-600 rounded-full text-white transition-colors hidden md:block"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 p-3 bg-dark-300 hover:bg-primary-600 rounded-full text-white transition-colors hidden md:block"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-dark-300 rounded-2xl p-8 md:p-12 shadow-2xl"
            >
              {/* Quote Icon */}
              <Quote size={48} className="text-primary-500/30 mb-6" />

              {/* Content */}
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-500"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentIndex].title}
                  </p>
                  <p className="text-primary-400 text-sm mt-1">
                    Purchased: {testimonials[currentIndex].vehicle}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-500' : 'bg-dark-100 hover:bg-primary-500/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { value: '98%', label: 'Customer Satisfaction' },
            { value: '10K+', label: 'Happy Clients' },
            { value: '15+', label: 'Years Experience' },
            { value: '50+', label: 'Brand Partners' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-display font-bold text-primary-500">{stat.value}</p>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
