"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub,
  FaFigma,  FaNodeJs, FaPython, FaFireAlt, FaServer, FaCogs, FaTools
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiFirebase, SiDjango, 
} from "react-icons/si";
import { MdApi } from "react-icons/md";

const SkillIcon = ({ name, icon, color }: { name: string; icon: React.ReactNode; color: string }) => (
  <motion.div
    className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
    whileHover={{ y: -5 }}
  >
    <div className={`text-4xl ${color} drop-shadow-sm`}>{icon}</div>
    <span className="text-sm font-semibold text-gray-700 mt-2 tracking-tight">{name}</span>
  </motion.div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-600" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-600" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
        { name: "ReactJS", icon: <FaReact />, color: "text-cyan-400" },
        { name: "NextJS", icon: <SiNextdotjs />, color: "text-black" },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
        { name: "Django", icon: <SiDjango />, color: "text-emerald-800" },
        { name: "REST API", icon: <MdApi />, color: "text-gray-800" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
        { name: "GitHub", icon: <FaGithub />, color: "text-gray-800" },
        { name: "Figma", icon: <FaFigma />, color: "text-pink-500" },
        { name: "Vercel", icon: <FaServer />, color: "text-black" },
      ],
    },
    {
      title: "Programming & Professional",
      skills: [
        { name: "Python", icon: <FaPython />, color: "text-yellow-600" },
        { name: "OOP", icon: <FaCogs />, color: "text-gray-700" },
        { name: "Data Structures", icon: <FaTools />, color: "text-gray-500" },
        { name: "Problem Solving", icon: <FaFireAlt />, color: "text-red-500" },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Teamwork", icon: <FaTools />, color: "text-green-500" },
        { name: "Agile", icon: <FaTools />, color: "text-orange-400" },
      ],
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 py-24 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-500">
          My Skills
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore my expertise across various domains of development and professional skills.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 ${
                activeTab === index
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-white rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            {skillCategories[activeTab].title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillCategories[activeTab].skills.map((skill) => (
              <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;