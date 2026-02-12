'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Share2, Phone, Mail, Check, Calendar, Clock, Car } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BookAppointmentModal from '../../../components/BookAppointmentModal';

const vehicleData = {
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
    interiorColor: 'Black Merino Leather',
    drivetrain: 'Rear-Wheel Drive',
    type: 'Sports',
    vin: 'WBS33CH0RCD12345',
    featuredImage: { sourceUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1920&q=80' },
    description: 'The BMW M4 Competition represents the pinnacle of performance engineering. Powered by a 3.0-liter twin-turbocharged inline-6 engine producing 503 horsepower, this track-focused sports coupe delivers exhilarating performance while maintaining everyday drivability.',
    features: [
      'M Carbon Bucket Seats',
      'M Driver\'s Package',
      'Executive Package',
      'Parking Assistant',
      'Harman Kardon Premium Audio',
      'Wireless Charging',
      'Head-Up Display',
      'Adaptive M Suspension',
    ],
  },
};

const specs = [
  { label: 'Engine', value: '3.0L Twin-Turbo I6' },
  { label: 'Horsepower', value: '503 hp @ 6,250 rpm' },
  { label: 'Torque', value: '479 lb-ft @ 2,750 rpm' },
  { label: '0-60 mph', value: '3.8 seconds' },
  { label: 'Top Speed', value: '180 mph (155 mph with M Driver\'s Package)' },
  { label: 'Transmission', value: '8-Speed M Steptronic' },
  { label: 'Drivetrain', value: 'Rear-Wheel Drive' },
  { label: 'MPG (City/Hwy)', value: '16/24' },
];

export default function VehicleDetailPage({ params }) {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const { vehicleFields } = vehicleData;
  const {
    brand,
    model,
    year,
    price,
    mileage,
    engine,
    transmission,
    fuelType,
    exteriorColor,
    interiorColor,
    drivetrain,
    type,
    vin,
    featuredImage,
    description,
    features,
  } = vehicleFields;

  const formatPrice = (price) => {
    if (!price) return 'Price on Request';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-dark-300">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="h-[60vh] relative overflow-hidden">
          <img
            src={featuredImage?.sourceUrl || 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1920&q=80'}
            alt={`${brand} ${model}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-dark-300/50 to-transparent" />
          
          {/* Back Button */}
          <Link href="/vehicles">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-24 left-8 flex items-center gap-2 px-4 py-2 bg-dark-300/80 backdrop-blur-sm rounded-lg text-white"
            >
              <ArrowLeft size={20} />
              <span>Back to Vehicles</span>
            </motion.button>
          </Link>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-24 right-8 flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-dark-300/80 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 transition-colors"
            >
              <Heart size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-dark-300/80 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 transition-colors"
            >
              <Share2 size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Info */}
      <section className="relative -mt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-dark-200 rounded-2xl p-8"
              >
                {/* Title and Price */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-primary-600/20 text-primary-400 text-sm rounded-full">
                        {type}
                      </span>
                      <span className="text-gray-500 text-sm">VIN: {vin}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-white">
                      {year} {brand} {model}
                    </h1>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-display font-bold text-primary-500">
                      {formatPrice(price)}
                    </p>
                    <p className="text-gray-500 text-sm">MSRP</p>
                  </div>
                </div>

                {/* Quick Specs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Mileage', value: mileage ? `${mileage.toLocaleString()} mi` : '0 mi' },
                    { label: 'Engine', value: engine },
                    { label: 'Transmission', value: transmission },
                    { label: 'Fuel Type', value: fuelType },
                  ].map((spec) => (
                    <div key={spec.label} className="bg-dark-100 p-4 rounded-xl">
                      <p className="text-gray-500 text-sm mb-1">{spec.label}</p>
                      <p className="text-white font-medium">{spec.value}</p>
                    </div>
                  ))}
                </div>

                {/* Tabs */}
                <div className="flex gap-4 border-b border-dark-100 mb-6">
                  {['overview', 'specs', 'features'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-3 font-medium capitalize transition-colors ${
                        activeTab === tab
                          ? 'text-primary-500 border-b-2 border-primary-500'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <p className="text-gray-300 leading-relaxed">{description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'Exterior Color', value: exteriorColor },
                        { label: 'Interior Color', value: interiorColor },
                        { label: 'Drivetrain', value: drivetrain },
                        { label: 'VIN', value: vin },
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between py-2 border-b border-dark-100">
                          <span className="text-gray-400">{item.label}</span>
                          <span className="text-white font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'specs' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between py-3 border-b border-dark-100">
                        <span className="text-gray-400">{spec.label}</span>
                        <span className="text-white font-medium text-right">{spec.value}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'features' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  >
                    {features?.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 py-2">
                        <Check size={20} className="text-primary-500" />
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-dark-200 rounded-2xl p-6"
              >
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  Interested in this vehicle?
                </h3>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsAppointmentModalOpen(true)}
                    className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar size={20} />
                    <span>Schedule Test Drive</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Car size={20} />
                    <span>Request Info</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-dark-200 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                <div className="space-y-4">
                  <a href="tel:+18005550123" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <Phone size={20} className="text-primary-500" />
                    <span>+1 (800) 555-0123</span>
                  </a>
                  <a href="mailto:sales@autoglide.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <Mail size={20} className="text-primary-500" />
                    <span>sales@autoglide.com</span>
                  </a>
                </div>
              </motion.div>

              {/* Dealer Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-dark-200 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Autoglide</h3>
                <p className="text-gray-400 text-sm mb-4">
                  123 Automotive Blvd<br />
                  Los Angeles, CA 90001
                </p>
                <div className="flex items-center gap-2 text-primary-500 text-sm">
                  <Clock size={16} />
                  <span>Open Today: 9AM - 8PM</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Appointment Modal */}
      <BookAppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />

      <Footer />
    </div>
  );
}
