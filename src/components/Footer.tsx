"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaArrowAltCircleUp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// Type definition for social links
type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

// Centralized social links data
const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.facebook.com/profile.php?id=100007324187612",
    label: "Facebook",
    icon: <FaFacebookF />,
  },
  {
    href: "https://linkedin.com/in/ali-elsharqawy-63a9ba21b/",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://www.instagram.com/_ali.elsharqawy/",
    label: "Instagram",
    icon: <FaInstagram />,
  },
  {
    href: "mailto:alielsharqawy250@gmail.com",
    label: "Email",
    icon: <HiOutlineMail />,
  },
];

// Reusable Social Icon component
const SocialIcon: React.FC<SocialLink & { isDarkMode: boolean }> = ({ href, label, icon, isDarkMode }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -3 }}
    transition={{ duration: 0.3 }}
  >
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex items-center justify-center rounded-full p-2 transition-all duration-300
        ${isDarkMode
          ? 'border border-gray-500 text-gray-300 hover:bg-white hover:text-black'
          : 'border border-gray-400 text-gray-600 hover:bg-indigo-600 hover:text-white'}`}
    >
      {icon}
    </Link>
  </motion.div>
);

// Main Footer component with smooth scroll
const Footer: React.FC = () => {
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

  // Function to handle smooth scrolling to the top
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`w-full py-8 px-4 sm:px-6 md:px-12 lg:px-20 text-center transition-colors duration-300
        ${isDarkMode
          ? 'bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white' 
        : 'bg-gradient-to-r from-white via-gray-100 to-white text-gray-900'}`}
    >
      {/* Back to Top Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <a
          href="#"
          onClick={handleScrollToTop}
          className={`flex justify-center items-center mb-2
            ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-indigo-600'}`}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowAltCircleUp size={24} />
          </motion.div>
        </a>
        <p
          className={`text-xs md:text-sm font-semibold tracking-wider
            ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
        >
          BACK TO TOP
        </p>
      </motion.div>

      {/* Social Links */}
      <div className="flex justify-center flex-wrap gap-4 md:gap-6 mb-6">
        {SOCIAL_LINKS.map((link) => (
          <SocialIcon key={link.label} {...link} isDarkMode={isDarkMode} />
        ))}
      </div>

      {/* Copyright */}
      <p
        className={`text-xs md:text-sm
          ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}
      >
        ©2024 Ali Elsharqawy. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;