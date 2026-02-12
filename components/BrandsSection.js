'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const brands = [
  {
    name: 'BMW',
    logo: 'https://logo.clearbit.com/bmw.com',
    vehicleCount: 45,
    featured: 'M4 Competition',
  },
  {
    name: 'Mercedes-Benz',
    logo: 'https://logo.clearbit.com/mercedes-benz.com',
    vehicleCount: 52,
    featured: 'S-Class',
  },
  {
    name: 'Audi',
    logo: 'https://logo.clearbit.com/audi.com',
    vehicleCount: 38,
    featured: 'RS e-tron GT',
  },
  {
    name: 'Porsche',
    logo: 'https://logo.clearbit.com/porsche.com',
    vehicleCount: 28,
    featured: '911 GT3',
  },
  {
    name: 'Tesla',
    logo: 'https://logo.clearbit.com/tesla.com',
    vehicleCount: 15,
    featured: 'Model S Plaid',
  },
  {
    name: 'Lamborghini',
    logo: 'https://logo.clearbit.com/lamborghini.com',
    vehicleCount: 12,
    featured: 'Huracán STO',
  },
  {
    name: 'Ferrari',
    logo: 'https://logo.clearbit.com/ferrari.com',
    vehicleCount: 8,
    featured: '296 GTB',
  },
  {
    name: 'Rolls-Royce',
    logo: 'https://logo.clearbit.com/rolls-royce.com',
    vehicleCount: 5,
    featured: 'Phantom',
  },
];

export default function BrandsSection() {
  return (
    <section className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div className="text-center md:text-left mb-6 md:mb-0">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Our Partners
            </span>
            <h2 className="text-4xl font-display font-bold text-white mt-2">
              World-Class Brands
            </h2>
            <p className="text-gray-400 mt-2 max-w-xl">
              We partner with the most prestigious automotive manufacturers to bring you
              exceptional vehicles.
            </p>
          </div>
          <motion.a
            href="/brands"
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-primary-500 hover:text-primary-400 font-medium transition-colors"
          >
            <span>View All Brands</span>
            <ChevronRight size={20} />
          </motion.a>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <motion.a
              key={brand.name}
              href={`/brands/${brand.name.toLowerCase()}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-dark-200 rounded-xl p-6 text-center hover:bg-dark-100 transition-all duration-300"
            >
              {/* Logo */}
              <div className="relative h-16 mb-4 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Brand Name */}
              <h3 className="text-white font-semibold mb-1 group-hover:text-primary-400 transition-colors">
                {brand.name}
              </h3>

              {/* Vehicle Count */}
              <p className="text-gray-500 text-sm mb-3">
                {brand.vehicleCount} vehicles available
              </p>

              {/* Featured Model */}
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary-600/20 rounded-full">
                <span className="text-primary-400 text-xs font-medium">Featured:</span>
                <span className="text-white text-xs">{brand.featured}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-8 bg-gradient-to-r from-primary-600/20 to-primary-700/20 rounded-2xl border border-primary-500/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Don't See Your Preferred Brand?
              </h3>
              <p className="text-gray-400">
                Contact us to inquire about vehicles from over 50+ premium brands worldwide.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              Request Information
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
