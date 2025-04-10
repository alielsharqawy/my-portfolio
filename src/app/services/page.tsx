"use client";
import React, { useState, useEffect } from "react";
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
    className="flex flex-col items-center p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:text-gray-100 bg-white text-gray-800"
    whileHover={{ scale: 1.05, y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.2 }}
  >
    <div className="text-4xl md:text-5xl mb-4 dark:text-indigo-400 text-indigo-600">
      {icon}
    </div>
    <h3 className="text-lg md:text-xl font-bold tracking-wider dark:text-gray-100 text-gray-800">
      {title}
    </h3>
    <p className="text-xs md:text-sm mt-2 px-2 text-center dark:text-gray-300 text-gray-600">
      {description}
    </p>
  </motion.div>
);

// Main Services component
const Services: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync with document's dark mode class
  useEffect(() => {
    const handleDarkModeChange = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Initial check
    handleDarkModeChange();

    // Listen for changes
    const observer = new MutationObserver(handleDarkModeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className={`w-full py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 transition-colors duration-300
        ${
          isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100'
          : 'bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 text-gray-800'}`}
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-16"
      >
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent
            ${
              isDarkMode
                ? "bg-gradient-to-r from-indigo-400 to-teal-300"
                : "bg-gradient-to-r from-indigo-600 to-teal-500"
            }`}
        >
          My Services
        </h2>
        <p
          className={`text-sm sm:text-base md:text-lg mt-3 md:mt-4 max-w-xl mx-auto
          ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          I provide a range of front-end development services to help you build
          modern, responsive, and high-performing web applications.
        </p>
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
