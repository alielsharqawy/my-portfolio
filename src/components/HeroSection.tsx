"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import My from "@/assets/p.png";

// Type definition for social links
type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

// Centralized social links data
const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "mailto:alielsharqawy250@gmail.com",
    label: "Email",
    icon: <FaEnvelope />,
  },
  {
    href: "https://github.com/alielsharqawy",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/ali-elsharqawy-63a9ba21b/",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
];

// Reusable Social Icon component
const SocialIcon: React.FC<SocialLink> = ({ href, label, icon }) => (
  <motion.div whileHover={{ scale: 1.1, y: -3 }} transition={{ duration: 0.3 }}>
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center bg-gray-200 text-gray-800 rounded-full p-3 hover:bg-indigo-600 hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-indigo-500 transition-all duration-300"
    >
      {icon}
    </Link>
  </motion.div>
);

// Main HeroSection component
const HeroSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
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

  // Full about text
  const fullText =
    "I’m Ali Elsharqawy, a Junior Front-End Developer with a Bachelor’s degree in Computer Science and Information from Mansoura University. I am passionate about crafting responsive, scalable, and visually appealing web applications using modern front-end technologies. With a strong foundation in problem-solving, attention to detail, and a keen eye for UI/UX design, I strive to deliver seamless user experiences. I have professional experience working with Fourth Pyramid and Nexus Agency, where I contributed to developing and optimizing front-end solutions. My background also includes experience in mobile app development using Flutter, which has enriched my perspective on cross-platform design and performance. I’m eager to grow within a collaborative and innovative development environment, constantly learning and applying new technologies to build impactful digital products.";

  // Preview text (short version)
  const previewText =
    "I’m Ali Elsharqawy, a Junior Front-End Developer with a Bachelor’s degree in Computer Science from Mansoura University. I’m passionate about crafting responsive and visually appealing web applications.";

  return (
    <section
      className={`w-full transition-colors duration-300
        ${isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100'
          : 'bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 text-gray-800'}`}
    >
      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-10 py-12 md:py-16">
        {/* Left Side: Text, Social Links, and About Me */}
        <motion.div
          className="w-full md:w-1/2 space-y-8 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting, Name, and Title */}
          <div className="space-y-4">
            <h2 className={`text-lg md:text-xl font-semibold
              ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Hi, I am
            </h2>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent
              ${isDarkMode 
                ? 'bg-gradient-to-r from-indigo-400 to-teal-300' 
                : 'bg-gradient-to-r from-indigo-600 to-teal-500'}`}>
              Ali Elsharqawy
            </h1>
            <p className={`text-base md:text-lg font-medium
              ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Front-end Developer / UI Designer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            {SOCIAL_LINKS.map((link) => (
              <SocialIcon key={link.label} {...link} />
            ))}
          </div>

          {/* About Me Section */}
          <div className={`rounded-lg shadow-lg p-6
            ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'}`}>
            <motion.h2
              className="text-lg md:text-xl font-semibold tracking-widest mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              About Me
            </motion.h2>

            {/* Animated Text Expansion */}
            <AnimatePresence mode="wait">
              <motion.p
                key={isExpanded ? "full" : "preview"}
                className={`text-sm md:text-base mb-6 leading-relaxed
                  ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {isExpanded ? fullText : previewText}
              </motion.p>
            </AnimatePresence>

            {/* Read More Button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`text-sm md:text-base py-2 px-6 rounded-full transition-all duration-300
                ${isDarkMode 
                  ? 'bg-indigo-500 text-white hover:bg-indigo-600' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side: Circular Image */}
        <motion.div
          className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={`relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl border-4
            ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-black/20 border-gray-200'}`}>
            <Image
              src={My}
              alt="Ali Elsharqawy"
              fill
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;