'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const brands = [
  {
    name: 'BMW',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/200px-BMW.svg.png',
    description: 'The Ultimate Driving Machine. BMW combines sporty performance with luxury comfort.',
    vehicleCount: 45,
    featured: 'M4 Competition',
    vehicles: ['3 Series', '5 Series', '7 Series', 'X3', 'X5', 'X7', 'M3', 'M4', 'M5', 'i4', 'i7'],
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
  },
  {
    name: 'Mercedes-Benz',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/200px-Mercedes-Logo.svg.png',
    description: 'The Best or Nothing. Mercedes-Benz defines luxury automotive excellence.',
    vehicleCount: 52,
    featured: 'S-Class',
    vehicles: ['C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE', 'GLS', 'AMG GT', 'EQS', 'EQE'],
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
  },
  {
    name: 'Audi',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo.svg/200px-Audi-Logo.svg.png',
    description: 'Vorsprung durch Technik. Audi delivers cutting-edge technology and refined luxury.',
    vehicleCount: 38,
    featured: 'RS e-tron GT',
    vehicles: ['A3', 'A4', 'A6', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tron', 'RS5', 'RS6'],
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80',
  },
  {
    name: 'Porsche',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Porsche_logo.svg/200px-Porsche_logo.svg.png',
    description: 'There is No Substitute. Porsche is the epitome of sports car excellence.',
    vehicleCount: 28,
    featured: '911 GT3',
    vehicles: ['718 Cayman', '718 Boxster', '911', 'Panamera', 'Cayenne', 'Macan', 'Taycan'],
    image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?w=800&q=80',
  },
  {
    name: 'Tesla',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.svg/200px-Tesla_logo.svg.png',
    description: 'Accelerating the World\'s Transition to Sustainable Energy.',
    vehicleCount: 15,
    featured: 'Model S Plaid',
    vehicles: ['Model S', 'Model 3', 'Model X', 'Model Y', 'Cybertruck', 'Roadster'],
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
  },
  {
    name: 'Lamborghini',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Lamborghini_Logo.svg/200px-Lamborghini_Logo.svg.png',
    description: 'Expect the Unexpected. Lamborghini creates extreme supercars.',
    vehicleCount: 12,
    featured: 'Huracán STO',
    vehicles: ['Huracán', 'Aventador', 'Urus', 'Revuelto', 'Sterrato'],
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
  },
  {
    name: 'Ferrari',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Ferrari_Logo.svg/200px-Ferrari_Logo.svg.png',
    description: 'Prancing Horse. Ferrari is the essence of Italian performance.',
    vehicleCount: 8,
    featured: '296 GTB',
    vehicles: ['296 GTB', 'SF90 Stradale', 'Roma', 'Portofino', '812 Superfast', 'Daytona SP3'],
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
  },
  {
    name: 'Rolls-Royce',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rolls-Royce_logo.svg/200px-Rolls-Royce_logo.svg.png',
    description: 'Putting the World\'s Best Cars on the Road. Ultimate luxury and bespoke craftsmanship.',
    vehicleCount: 5,
    featured: 'Phantom',
    vehicles: ['Phantom', 'Ghost', 'Wraith', 'Dawn', 'Cullinan', 'Spectre'],
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
  },
];

export default function BrandsPage() {
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
              Our Partners
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6">
              World-Class Brands
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We partner with the most prestigious automotive manufacturers to bring you
              exceptional vehicles that define excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 bg-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-4">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-16 h-16 object-contain bg-white/10 backdrop-blur-sm rounded-lg p-2"
                    />
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white">{brand.name}</h3>
                      <p className="text-primary-400 text-sm">{brand.vehicleCount} vehicles available</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-400 mb-6">{brand.description}</p>
                  <div className="mb-6">
                    <p className="text-gray-500 text-sm mb-3">Featured Model: <span className="text-white">{brand.featured}</span></p>
                    <div className="flex flex-wrap gap-2">
                      {brand.vehicles.slice(0, 6).map((vehicle) => (
                        <span key={vehicle} className="px-3 py-1 bg-dark-100 rounded-full text-xs text-gray-300">
                          {vehicle}
                        </span>
                      ))}
                      {brand.vehicles.length > 6 && (
                        <span className="px-3 py-1 bg-primary-600/20 rounded-full text-xs text-primary-400">
                          +{brand.vehicles.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                  <Link href={`/vehicles?brand=${brand.name.toLowerCase()}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
                    >
                      View {brand.name} Vehicles
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Don't See Your Preferred Brand?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Contact us to inquire about vehicles from over 50+ premium brands worldwide.
              We can source virtually any luxury vehicle you desire.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
              >
                Request Information
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
