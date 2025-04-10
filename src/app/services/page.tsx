"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPaintBrush, FaMobileAlt, FaTachometerAlt } from "react-icons/fa";

// Type definition for each service item
type ServiceItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

// Centralized data for services
const SERVICE_ITEMS: ServiceItem[] = [
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description:
      "I create visually appealing and user-friendly interfaces, ensuring a seamless user experience with modern design principles and tools like Figma.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Development",
    description:
      "I build fully responsive web applications that work flawlessly across all devices, from mobile phones to desktops, using frameworks like Tailwind CSS.",
  },
  {
    icon: <FaTachometerAlt />,
    title: "Performance Optimization",
    description:
      "I optimize web applications for speed and efficiency, ensuring fast load times and smooth interactions with techniques like lazy loading and code splitting.",
  },
];

// Reusable card component for each service item
const ServiceCard: React.FC<ServiceItem> = ({ icon, title, description }) => (
  <motion.div
    className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    whileHover={{ scale: 1.05, y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-4xl md:text-5xl text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-lg md:text-xl font-bold tracking-wider text-gray-800">
      {title}
    </h3>
    <p className="text-xs md:text-sm text-gray-600 mt-2 px-2 text-center">
      {description}
    </p>
  </motion.div>
);

// Main Services component
const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-800 py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-500">
          My Services
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-3 md:mt-4 max-w-xl mx-auto">
          I provide a range of front-end development services to help you build modern, responsive, and high-performing web applications.
        </p>
      </motion.div>

      {/* Explore Button */}
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <button className="px-6 py-2 md:px-8 md:py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 font-semibold tracking-widest rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300">
          Get in Touch
        </button>
      </motion.div>

      {/* Grid of Service Items */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
        {SERVICE_ITEMS.map((item, index) => (
          <ServiceCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Services;