'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, Phone, Mail, Send, Check, Car } from 'lucide-react';

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM',
  '03:00 PM', '04:00 PM', '05:00 PM',
];

const services = [
  'Test Drive',
  'Vehicle Consultation',
  'Trade-In Evaluation',
  'Service Appointment',
  'Detailing Booking',
  'Delivery Pickup',
];

export default function BookAppointmentModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    message: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      setFormData({
        service: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        message: '',
      });
      onClose();
    }, 3000);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal - Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-dark-200 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh]"
            >
              {/* Progress Bar */}
              {!isSubmitted && (
                <div className="h-1 bg-dark-100">
                  <motion.div
                    className="h-full bg-primary-500"
                    initial={{ width: '33%' }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}

              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-dark-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-600/20 rounded-lg">
                    <Car size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-bold text-white">
                      {isSubmitted ? 'Appointment Confirmed!' : 'Book Appointment'}
                    </h2>
                    <p className="text-gray-400 text-sm">
                      {isSubmitted ? 'We\'ll see you soon!' : `Step ${step} of 3`}
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:bg-dark-100 rounded-lg transition-colors"
                >
                  <X size={24} className="text-gray-400" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <Check size={40} className="text-green-500" />
                    </motion.div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      Thank You, {formData.name}!
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Your appointment has been scheduled for<br />
                      <span className="text-primary-500 font-semibold">
                        {formData.date} at {formData.time}
                      </span>
                    </p>
                    <p className="text-gray-500 text-sm">
                      A confirmation email has been sent to {formData.email}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Service & Date */}
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Select Service *
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {services.map((service) => (
                              <button
                                key={service}
                                type="button"
                                onClick={() => setFormData((prev) => ({ ...prev, service }))}
                                className={`p-4 rounded-lg text-sm font-medium transition-all ${
                                  formData.service === service
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-dark-100 text-gray-300 hover:bg-dark-50'
                                }`}
                              >
                                {service}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                              Preferred Date *
                            </label>
                            <input
                              type="date"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              min={new Date().toISOString().split('T')[0]}
                              required
                              className="w-full p-3 bg-dark-100 border border-dark-100 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                              Preferred Time *
                            </label>
                            <select
                              name="time"
                              value={formData.time}
                              onChange={handleChange}
                              required
                              className="w-full p-3 bg-dark-100 border border-dark-100 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                            >
                              <option value="">Select time</option>
                              {timeSlots.map((slot) => (
                                <option key={slot} value={slot}>
                                  {slot}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Interested Vehicle (Optional)
                          </label>
                          <input
                            type="text"
                            name="vehicle"
                            value={formData.vehicle}
                            onChange={handleChange}
                            placeholder="e.g., BMW M4 Competition"
                            className="w-full p-3 bg-dark-100 border border-dark-100 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Contact Info */}
                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full p-3 bg-dark-100 border border-dark-100 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
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
                              placeholder="john@example.com"
                              className="w-full p-3 bg-dark-100 border border-dark-100 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              placeholder="+1 (555) 000-0000"
                              className="w-full p-3 bg-dark-100 border border-dark-100 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Additional Message (Optional)
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Any special requests or notes..."
                            className="w-full p-3 bg-dark-100 border border-dark-100 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Confirmation */}
                    {step === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <div className="bg-dark-100 rounded-xl p-6 mb-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Appointment Summary</h3>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <Car size={18} className="text-primary-500" />
                              <span className="text-gray-400">Service:</span>
                              <span className="text-white">{formData.service}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Calendar size={18} className="text-primary-500" />
                              <span className="text-gray-400">Date:</span>
                              <span className="text-white">{formData.date}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Clock size={18} className="text-primary-500" />
                              <span className="text-gray-400">Time:</span>
                              <span className="text-white">{formData.time}</span>
                            </div>
                            {formData.vehicle && (
                              <div className="flex items-center gap-3">
                                <MapPin size={18} className="text-primary-500" />
                                <span className="text-gray-400">Vehicle:</span>
                                <span className="text-white">{formData.vehicle}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="bg-dark-100 rounded-xl p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <Mail size={18} className="text-primary-500" />
                              <span className="text-gray-400">Email:</span>
                              <span className="text-white">{formData.email}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Phone size={18} className="text-primary-500" />
                              <span className="text-gray-400">Phone:</span>
                              <span className="text-white">{formData.phone}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                      {step > 1 ? (
                        <motion.button
                          type="button"
                          onClick={prevStep}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-6 py-3 border-2 border-dark-100 text-gray-300 hover:border-white font-medium rounded-lg transition-colors"
                        >
                          Back
                        </motion.button>
                      ) : (
                        <div />
                      )}

                      {step < 3 ? (
                        <motion.button
                          type="button"
                          onClick={nextStep}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={
                            (step === 1 && (!formData.service || !formData.date || !formData.time)) ||
                            (step === 2 && (!formData.name || !formData.email || !formData.phone))
                          }
                          className="px-8 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-600/50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                        >
                          <span>Continue</span>
                        </motion.button>
                      ) : (
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-8 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-600/50 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>Booking...</span>
                            </>
                          ) : (
                            <>
                              <Send size={18} />
                              <span>Confirm Booking</span>
                            </>
                          )}
                        </motion.button>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
