import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Star, X, ArrowRight } from "lucide-react";

const fadeDelay = {
  hidden: { opacity: 0, y: 6 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.25 },
  }),
};

const ServiceModal = ({ service, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Customer carousel
  const carouselRef = useRef();
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setScrollWidth(carouselRef.current.scrollWidth / 2);
    }
  }, [service?.customers]);

  // Close modal on ESC key
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full p-8 overflow-y-auto max-h-[90vh] shadow-lg outline-none"
        role="dialog"
        aria-labelledby="service-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-black dark:hover:text-white transition"
        >
          <X size={22} />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4"
          >
            {service.icon ? (
              <img src={service.icon} alt={service.title} className="w-8 h-8" />
            ) : (
              <Star size={28} />
            )}
          </motion.div>

          <h2
            id="service-title"
            className="text-2xl font-semibold text-gray-900 dark:text-white"
          >
            {service.title}
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Banner */}
        {service.image && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-56 overflow-hidden rounded-xl mb-8"
            >
              <img
                src={service.image}
                alt={service.title}
                onLoad={() => setImageLoaded(true)}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        )}

        {/* Features */}
        {service.features && (
          <motion.section initial="hidden" animate="visible" className="mb-8">
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">
              Features
            </h3>
            <ul className="space-y-2">
              {service.features.map((feat, idx) => (
                <motion.li
                  key={idx}
                  custom={idx}
                  variants={fadeDelay}
                  className="flex items-start gap-3"
                >
                  <Check size={16} className="mt-1 text-indigo-600" />
                  <span className="text-gray-700 dark:text-gray-300">{feat}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Benefits */}
        {service.benefits && (
          <motion.section initial="hidden" animate="visible" className="mb-8">
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">
              Benefits
            </h3>
            <ul className="space-y-2">
              {service.benefits.map((benefit, idx) => (
                <motion.li
                  key={idx}
                  custom={idx}
                  variants={fadeDelay}
                  className="flex items-start gap-3"
                >
                  <Star size={16} className="mt-1 text-yellow-500" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Pricing */}
        {service.pricing && (
          <section className="mb-8">
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">
              Pricing
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {service.pricing.map((plan, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 text-center hover:shadow-md cursor-pointer"
                >
                  <h4 className="font-semibold">{plan.plan}</h4>
                  <p className="text-indigo-600 font-semibold mt-1 mb-2">{plan.price}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{plan.details}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Ideal For */}
        {service.targetUsers && (
          <section className="mb-10">
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">
              Ideal For
            </h3>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              {service.targetUsers.map((user, idx) => (
                <li key={idx}>• {user}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Customers Carousel */}
        {service.customers && (
          <section className="mb-10">
            <h3 className="font-medium text-gray-900 dark:text-white mb-4 text-center">
              Our Customers
            </h3>

            <div className="overflow-hidden">
              <motion.div
                ref={carouselRef}
                className="flex gap-6"
                animate={{ x: [0, -scrollWidth] }}
                transition={{
                  repeat: Infinity,
                  duration: service.customers.length * 3,
                  ease: "linear",
                }}
              >
                {[...service.customers, ...service.customers].map((customer, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition"
                    style={{ width: "200px" }}
                  >
                    <img
                      src={customer.image}
                      alt={customer.name}
                      className="w-50 h-40 object-cover rounded-lg grayscale hover:grayscale-0 transition"
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400">{customer.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Reviews */}
        {service.reviews && (
          <section className="mb-10">
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">
              Customer Reviews
            </h3>

            <div className="space-y-4">
              {service.reviews.map((review, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{review.company}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{review.reviewer}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    “{review.comment}”
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Button */}
        <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition flex items-center justify-center gap-2"
        onClick={() => {
          const contactSection = document.getElementById('contact-us');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
          onClose(); // optional: close the modal if needed
        }}
      >
        Get Started
        <ArrowRight size={18} />
      </motion.button>
      </motion.div>
    </div>
  );
};

export default ServiceModal;
