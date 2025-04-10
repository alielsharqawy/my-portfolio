"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub,
  FaFigma, FaNodeJs, FaPython, FaFireAlt, FaServer, FaCogs, FaTools
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiFirebase, SiDjango } from "react-icons/si";
import { MdApi } from "react-icons/md";

const SkillIcon = ({ name, icon, color }: { name: string; icon: React.ReactNode; color: string }) => (
  <motion.div
    className={`flex flex-col items-center p-6 rounded-lg shadow-md border transition-all duration-500
      ${color} // Apply the color prop directly for icons
      dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 
      bg-white/90 text-gray-700 border-gray-100/50 hover:shadow-xl`}
    whileHover={{ scale: 1.05, y: -5 }}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className={`text-4xl drop-shadow-sm`}>{icon}</div>
    <span className="text-sm font-semibold mt-3 tracking-tight dark:text-gray-200 text-gray-700">{name}</span>
  </motion.div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
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

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-600 dark:text-orange-400" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-600 dark:text-blue-400" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500 dark:text-yellow-400" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500 dark:text-blue-300" },
        { name: "ReactJS", icon: <FaReact />, color: "text-cyan-400 dark:text-cyan-300" },
        { name: "NextJS", icon: <SiNextdotjs />, color: "text-black dark:text-gray-200" },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600 dark:text-green-400" },
        { name: "Django", icon: <SiDjango />, color: "text-emerald-800 dark:text-emerald-400" },
        { name: "REST API", icon: <MdApi />, color: "text-gray-800 dark:text-gray-200" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500 dark:text-yellow-400" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-500 dark:text-orange-400" },
        { name: "GitHub", icon: <FaGithub />, color: "text-gray-800 dark:text-gray-200" },
        { name: "Figma", icon: <FaFigma />, color: "text-pink-500 dark:text-pink-400" },
        { name: "Vercel", icon: <FaServer />, color: "text-black dark:text-gray-200" },
      ],
    },
    {
      title: "Programming & Professional",
      skills: [
        { name: "Python", icon: <FaPython />, color: "text-yellow-600 dark:text-yellow-400" },
        { name: "OOP", icon: <FaCogs />, color: "text-gray-700 dark:text-gray-300" },
        { name: "Data Structures", icon: <FaTools />, color: "text-gray-500 dark:text-gray-400" },
        { name: "Problem Solving", icon: <FaFireAlt />, color: "text-red-500 dark:text-red-400" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`w-full py-20 md:py-28 px-6 md:px-12 lg:px-20 transition-colors duration-300
        ${isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100'
          : 'bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 text-gray-800'}`}
    >
      <motion.div
        className="text-center mb-16 md:mb-24"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2
          className={`text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent drop-shadow-lg
            ${isDarkMode
              ? 'bg-gradient-to-r from-purple-400 via-indigo-400 to-teal-300'
              : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-500'}`}
        >
          My Skills
        </h2>
        <p className={`text-lg md:text-xl mt-6 max-w-2xl mx-auto font-light leading-relaxed
          ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          A showcase of my technical expertise and professional capabilities.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300
                ${activeTab === index
                  ? (isDarkMode ? 'bg-indigo-500 text-white shadow-lg' : 'bg-indigo-600 text-white shadow-lg')
                  : (isDarkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-8 rounded-xl shadow-md border
            ${isDarkMode
              ? 'bg-gray-800/90 text-gray-100 border-gray-700'
              : 'bg-white/90 text-gray-800 border-gray-100/50'}`}
        >
          <h3
            className={`text-2xl font-semibold mb-6 text-center bg-clip-text text-transparent
              ${isDarkMode
                ? 'bg-gradient-to-r from-purple-400 to-teal-300'
                : 'bg-gradient-to-r from-purple-600 to-teal-500'}`}
          >
            {skillCategories[activeTab].title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillCategories[activeTab].skills.map((skill) => (
              <SkillIcon key={skill.name} {...skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;