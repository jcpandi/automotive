'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Phone } from 'lucide-react';
import BookAppointmentModal from './BookAppointmentModal';

const slides = [
  {
    id: 1,
    title: 'Experience Luxury',
    subtitle: 'Discover our exclusive collection of premium vehicles',
    description: 'From iconic brands to cutting-edge electric vehicles, find your perfect drive.',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&q=80',
    ctaPrimary: 'Browse Vehicles',
    ctaSecondary: 'Book Test Drive',
    stats: [
      { value: '500+', label: 'Premium Cars' },
      { value: '50+', label: 'Brands' },
      { value: '24/7', label: 'Support' },
    ],
  },
  {
    id: 2,
    title: 'Electric Future',
    subtitle: 'Embrace sustainable innovation without compromise',
    description: 'Experience the next generation of electric vehicles with unmatched performance.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80',
    ctaPrimary: 'Explore EVs',
    ctaSecondary: 'Learn More',
    stats: [
      { value: '100+', label: 'Electric Models' },
      { value: '500mi', label: 'Max Range' },
      { value: '15min', label: 'Fast Charge' },
    ],
  },
  {
    id: 3,
    title: 'Sports Excellence',
    subtitle: 'Unleash pure driving adrenaline',
    description: 'High-performance machines built for those who demand more.',
    image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?w=1920&q=80',
    ctaPrimary: 'View Sports Cars',
    ctaSecondary: 'Configure Yours',
    stats: [
      { value: '700+', label: 'Horsepower' },
      { value: '3.0s', label: '0-60 MPH' },
      { value: '200+', label: 'Top Speed' },
    ],
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {/* Slides */}
        <AnimatePresence initial={false} custom={direction}>
          {slides.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={slide.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: 'tween', duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-300/90 via-dark-300/70 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-300/50 to-transparent" />
                </motion.div>
              )
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <AnimatePresence mode="wait">
            {slides.map(
              (slide, index) =>
                index === currentSlide && (
                  <motion.div
                    key={slide.id}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="w-full"
                  >
                    {/* Stats */}
                    <motion.div variants={itemVariants} className="flex gap-8 mb-8 flex-wrap">
                      {slide.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-white">{stat.value}</p>
                            <p className="text-sm text-gray-400">{stat.label}</p>
                          </div>
                        </div>
                      ))}
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                      variants={itemVariants}
                      className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-4"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                      variants={itemVariants}
                      className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-2xl"
                    >
                      {slide.subtitle}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                      variants={itemVariants}
                      className="text-gray-400 mb-8 max-w-xl"
                    >
                      {slide.description}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                      <Link href="/vehicles">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="group flex items-center space-x-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                        >
                          <span>{slide.ctaPrimary}</span>
                          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsAppointmentModalOpen(true)}
                        className="flex items-center space-x-2 px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-colors"
                      >
                        <Phone size={20} />
                        <span>{slide.ctaSecondary}</span>
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary-500' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 right-8 hidden lg:block"
        >
          <div className="w-10 h-16 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Book Appointment Modal */}
      <BookAppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
}
