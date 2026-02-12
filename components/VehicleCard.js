'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Eye, ChevronRight } from 'lucide-react';

const vehicleTypes = {
  SUV: 'bg-blue-500',
  Sedan: 'bg-green-500',
  Sports: 'bg-red-500',
  Luxury: 'bg-purple-500',
  Electric: 'bg-emerald-500',
  Coupe: 'bg-orange-500',
};

const typeIcons = {
  SUV: '🚙',
  Sedan: '🚗',
  Sports: '🏎️',
  Luxury: '✨',
  Electric: '⚡',
  Coupe: '🏁',
};

const fuelIcons = {
  Gasoline: '⛽',
  Diesel: '🛢️',
  Electric: '🔌',
  Hybrid: '🌱',
  'Plug-in Hybrid': '🔋',
};

const formatPrice = (price) => {
  if (!price) return 'Price on Request';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const formatNumber = (num) => {
  if (!num) return '0';
  return new Intl.NumberFormat('en-US').format(num);
};

export default function VehicleCard({ vehicle, index = 0 }) {
  const {
    title,
    slug,
    vehicleFields: fields = {},
  } = vehicle;

  const {
    brand = 'Unknown',
    model = '',
    year = 2024,
    price,
    mileage,
    engine,
    transmission,
    fuelType,
    exteriorColor,
    featuredImage,
  } = fields;

  const imageUrl = featuredImage?.sourceUrl || 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80';
  const type = fields.type || 'Sedan';
  const typeColor = vehicleTypes[type] || 'bg-gray-500';
  const fuelIcon = fuelIcons[fuelType] || '⛽';
  const transIcon = transmission?.includes('Auto') ? '⚙️' : '🔧';
  const mileageIcon = mileage ? '🛣️' : '📍';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group bg-dark-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${brand} ${model}`}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300/80 to-transparent" />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className={`${typeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
            {type}
          </span>
          <span className="text-lg" title={type}>
            {typeIcons[type] || '🚗'}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-dark-300/80 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 transition-colors"
          >
            <Heart size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-dark-300/80 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 transition-colors"
          >
            <Eye size={18} />
          </motion.button>
        </div>

        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <span className="text-2xl font-bold text-white">
            {formatPrice(price)}
          </span>
          {price && <span className="text-gray-400 text-sm ml-1">MSRP</span>}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
          {brand} {model}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{year}</p>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-gray-400" title="Fuel Type">
            <span>{fuelIcon}</span>
            <span className="text-xs">{fuelType || 'Gasoline'}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400" title="Transmission">
            <span>{transIcon}</span>
            <span className="text-xs">{transmission || 'Automatic'}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400" title="Mileage">
            <span>{mileageIcon}</span>
            <span className="text-xs">{mileage ? formatNumber(mileage) + ' mi' : '0 mi'}</span>
          </div>
        </div>

        {/* Color indicator */}
        {exteriorColor && (
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-400 text-sm">Color:</span>
            <div
              className="w-4 h-4 rounded-full border-2 border-dark-100"
              style={{ backgroundColor: exteriorColor.toLowerCase() }}
              title={exteriorColor}
            />
            <span className="text-gray-300 text-sm">{exteriorColor}</span>
          </div>
        )}

        {/* VIN */}
        {fields.vin && (
          <p className="text-gray-500 text-xs mb-4">
            VIN: {fields.vin}
          </p>
        )}

        {/* Action Button */}
        <Link href={`/vehicles/${slug}`}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 py-3 bg-dark-100 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors group/btn"
          >
            <span>View Details</span>
            <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
