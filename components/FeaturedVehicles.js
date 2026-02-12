'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';
import VehicleCard from './VehicleCard';

// Demo vehicles data with reliable image URLs
const demoVehicles = [
  {
    id: '1',
    title: 'BMW M4 Competition',
    slug: 'bmw-m4-competition',
    vehicleFields: {
      brand: 'BMW',
      model: 'M4 Competition',
      year: 2024,
      price: 78900,
      mileage: 0,
      engine: '3.0L Twin-Turbo I6',
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      exteriorColor: 'Toronto Red',
      type: 'Sports',
      vin: 'WBS33CH0RCD12345',
      featuredImage: {
        sourceUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      },
    },
  },
  {
    id: '2',
    title: 'Mercedes-Benz S-Class',
    slug: 'mercedes-s-class',
    vehicleFields: {
      brand: 'Mercedes-Benz',
      model: 'S-Class',
      year: 2024,
      price: 109800,
      mileage: 0,
      engine: '3.0L Inline-6 Hybrid',
      transmission: 'Automatic',
      fuelType: 'Hybrid',
      exteriorColor: 'Obsidian Black',
      type: 'Luxury',
      vin: 'WDDLJ7DB5CD45678',
      featuredImage: {
        sourceUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
      },
    },
  },
  {
    id: '3',
    title: 'Tesla Model S Plaid',
    slug: 'tesla-model-s-plaid',
    vehicleFields: {
      brand: 'Tesla',
      model: 'Model S Plaid',
      year: 2024,
      price: 89990,
      mileage: 0,
      engine: 'Tri-Motor Electric',
      transmission: 'Single Speed',
      fuelType: 'Electric',
      exteriorColor: 'Pearl White',
      type: 'Electric',
      vin: '5YJSA1E47FF78901',
      featuredImage: {
        sourceUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      },
    },
  },
  {
    id: '4',
    title: 'Porsche 911 GT3',
    slug: 'porsche-911-gt3',
    vehicleFields: {
      brand: 'Porsche',
      model: '911 GT3',
      year: 2024,
      price: 182900,
      mileage: 0,
      engine: '4.0L Flat-6',
      transmission: 'PDK Dual-Clutch',
      fuelType: 'Gasoline',
      exteriorColor: 'Guards Red',
      type: 'Sports',
      vin: 'WP0AF2A95RS23456',
      featuredImage: {
        sourceUrl: 'https://images.unsplash.com/photo-1503376763036-066120622c74?w=800&q=80',
      },
    },
  },
  {
    id: '5',
    title: 'Audi Q8 e-tron',
    slug: 'audi-q8-e-tron',
    vehicleFields: {
      brand: 'Audi',
      model: 'Q8 e-tron',
      year: 2024,
      price: 74900,
      mileage: 0,
      engine: 'Dual Motor Electric',
      transmission: 'Single Speed',
      fuelType: 'Electric',
      exteriorColor: 'Daytona Gray',
      type: 'SUV',
      vin: 'WA1VAAGL0RD34567',
      featuredImage: {
        sourceUrl: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80',
      },
    },
  },
  {
    id: '6',
    title: 'Lamborghini Huracán',
    slug: 'lamborghini-huracan',
    vehicleFields: {
      brand: 'Lamborghini',
      model: 'Huracán STO',
      year: 2024,
      price: 327444,
      mileage: 0,
      engine: '5.2L V10',
      transmission: '7-Speed Dual-Clutch',
      fuelType: 'Gasoline',
      exteriorColor: 'Verde Mantis',
      type: 'Sports',
      vin: 'ZHWUF4ZDXNL45678',
      featuredImage: {
        sourceUrl: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
      },
    },
  },
];

const categories = ['All', 'SUV', 'Sedan', 'Sports', 'Luxury', 'Electric'];

export default function FeaturedVehicles() {
  return (
    <section className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Featured Collection
          </span>
          <h2 className="text-4xl font-display font-bold text-white mt-2 mb-4">
            Premium Vehicles
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our curated selection of exceptional vehicles, each representing the pinnacle
            of automotive engineering and design.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                index === 0
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-200 text-gray-300 hover:bg-dark-100 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-2 bg-dark-200 text-gray-300 hover:bg-dark-100 rounded-full font-medium transition-colors"
          >
            <Filter size={16} />
            <span>More Filters</span>
          </motion.button>
        </motion.div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoVehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a href="/vehicles">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-all"
            >
              <span>View All Vehicles</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
