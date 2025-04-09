"use client";

import React from "react";
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
    href: "https://facebook.com",
    label: "Facebook",
    icon: <FaFacebookF />,
  },
  {
    href: "https://linkedin.com/in/ali-elsharqawy-63a9ba21b/",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://instagram.com",
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
const SocialIcon: React.FC<SocialLink> = ({ href, label, icon }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -3 }}
    transition={{ duration: 0.3 }}
  >
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center border border-gray-500 rounded-full p-2 text-gray-300 hover:bg-white hover:text-black transition-all duration-300"
    >
      {icon}
    </Link>
  </motion.div>
);

// Main Footer component with smooth scroll
const Footer: React.FC = () => {
  // Function to handle smooth scrolling to the top
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-8 px-4 sm:px-6 md:px-12 lg:px-20 text-center">
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
          className="text-gray-400 hover:text-white flex justify-center items-center mb-2"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowAltCircleUp size={24} />
          </motion.div>
        </a>
        <p className="text-xs md:text-sm font-semibold tracking-wider text-gray-300">
          BACK TO TOP
        </p>
      </motion.div>

      {/* Social Links */}
      <div className="flex justify-center flex-wrap gap-4 md:gap-6 mb-6">
        {SOCIAL_LINKS.map((link) => (
          <SocialIcon key={link.label} {...link} />
        ))}
      </div>

      {/* Copyright */}
      <p className="text-xs md:text-sm text-gray-500">
        ©2024 Ali Elsharqawy. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;