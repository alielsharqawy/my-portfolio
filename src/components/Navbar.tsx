"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark/light mode to the document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Smooth scroll function
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (isOpen) toggleMenu();
  };

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <header className={`w-full px-4 sm:px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50
      ${isDarkMode 
        ? 'bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white' 
        : 'bg-gradient-to-r from-white via-gray-100 to-white text-gray-900'}`}>
      
      {/* Logo/Title */}
      <motion.h1
        className="text-xl sm:text-2xl font-bold tracking-wide"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="hover:text-indigo-400 transition-colors">
          Ali Elsharqawy
        </Link>
      </motion.h1>

      {/* Desktop Navigation */}
      <div className="flex items-center space-x-4 md:space-x-8">
        <nav className="hidden md:flex items-center space-x-8">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "services")}
              className="text-lg font-medium hover:text-indigo-400 transition-colors"
            >
              Services
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <a
              href="#skills"
              onClick={(e) => handleScroll(e, "skills")}
              className="text-lg font-medium hover:text-indigo-400 transition-colors"
            >
              Skills
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="text-lg font-medium hover:text-indigo-400 transition-colors"
            >
              Projects
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className={`text-lg font-medium px-4 py-2 rounded-full transition-colors
                ${isDarkMode 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'bg-indigo-500 text-white hover:bg-indigo-600'}`}
            >
              Contact
            </a>
          </motion.div>
        </nav>

        {/* Dark Mode Toggle */}
        <motion.button
          onClick={toggleDarkMode}
          className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className={`absolute top-16 left-0 w-full flex flex-col items-center space-y-4 py-6 md:hidden
              ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "services")}
              className="text-lg font-medium hover:text-indigo-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#skills"
              onClick={(e) => handleScroll(e, "skills")}
              className="text-lg font-medium hover:text-indigo-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="text-lg font-medium hover:text-indigo-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className={`text-lg font-medium px-4 py-2 rounded-full transition-colors
                ${isDarkMode 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'bg-indigo-500 text-white hover:bg-indigo-600'}`}
            >
              Contact
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;