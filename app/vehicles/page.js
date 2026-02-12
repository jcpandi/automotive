'use client';

import { motion } from 'framer-motion';
import { Filter, ArrowUpDown } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VehicleCard from '../../components/VehicleCard';

const vehicles = [
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
      featuredImage: { sourceUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80' },
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
      featuredImage: { sourceUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80' },
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
      featuredImage: { sourceUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80' },
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
      featuredImage: { sourceUrl: 'https://images.unsplash.com/photo-1503376763036-066120622c74?w=800&q' },
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
      featuredImage: { sourceUrl: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80' },
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
      featuredImage: { sourceUrl: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80' },
    },
  },
];

const filters = {
  types: ['All', 'SUV', 'Sedan', 'Sports', 'Luxury', 'Electric'],
  brands: ['All', 'BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Tesla', 'Lamborghini'],
  prices: ['All', 'Under $50K', '$50K - $100K', '$100K - $200K', 'Over $200K'],
};

export default function VehiclesPage() {
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
              Our Inventory
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6">
              Premium Vehicles
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our curated selection of exceptional vehicles, each representing the pinnacle
              of automotive engineering and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-dark-300 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {filters.types.map((type) => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    type === 'All'
                      ? 'bg-primary-600 text-white'
                      : 'bg-dark-200 text-gray-300 hover:bg-dark-100 hover:text-white'
                  }`}
                >
                  {type}
                </motion.button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-dark-200 text-gray-300 hover:bg-dark-100 rounded-lg transition-colors"
              >
                <Filter size={16} />
                <span>More Filters</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-dark-200 text-gray-300 hover:bg-dark-100 rounded-lg transition-colors"
              >
                <ArrowUpDown size={16} />
                <span>Sort</span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-12 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="py-12 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-colors"
          >
            Load More Vehicles
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
