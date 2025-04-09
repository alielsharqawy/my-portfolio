"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

// Navbar component
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <header className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-4 sm:px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50">
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
      <nav className="hidden md:flex items-center space-x-8">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="#about"
            className="text-lg font-medium hover:text-indigo-400 transition-colors"
          >
            About
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="#skills"
            className="text-lg font-medium hover:text-indigo-400 transition-colors"
          >
            Skills
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="#projects"
            className="text-lg font-medium hover:text-indigo-400 transition-colors"
          >
            Projects
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="#contact"
            className="text-lg font-medium bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors"
          >
            Contact
          </Link>
        </motion.div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <motion.button
          onClick={toggleMenu}
          className="text-2xl focus:outline-none"
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
            className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 py-6 md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Link
              href="#about"
              onClick={toggleMenu}
              className="text-lg font-medium hover:text-indigo-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              onClick={toggleMenu}
              className="text-lg font-medium hover:text-indigo-400 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              onClick={toggleMenu}
              className="text-lg font-medium hover:text-indigo-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              onClick={toggleMenu}
              className="text-lg font-medium bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors"
            >
              Contact
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;