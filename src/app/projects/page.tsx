"use client";
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import one from "./assets/1.jpeg"; // Electro Store
import two from "./assets/2.jpeg"; // Lawer
import three from "./assets/3.jpeg"; // Healthtic
import four from "./assets/4.jpeg"; // Fashioniza
import five from "./assets/5.jpeg"; // Legends
import six from "./assets/6.jpeg"; // Portfolio

type Project = {
  id: string;
  title: string;
  image: StaticImageData;
  description: string;
  url: string;
};

const ProjectCard: React.FC<{ project: Project; isDarkMode: boolean }> = ({ project, isDarkMode }) => (
  <motion.div
    className={`rounded-2xl shadow-lg overflow-hidden border transition-all duration-500 hover:shadow-2xl
      ${isDarkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100'
          : 'bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 text-gray-800'}`}
    whileHover={{ scale: 1.05, y: -5 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="relative w-full h-60">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
          <p className="text-white text-sm font-medium drop-shadow-md">
            {project.description}
          </p>
        </div>
      </div>
      <div
        className={`p-5
          ${isDarkMode
            ? 'bg-gradient-to-br from-gray-800/90 to-gray-700/90'
            : 'bg-gradient-to-br from-white/90 to-gray-100/90'}`}
      >
        <h3
          className={`text-xl font-bold text-center bg-clip-text text-transparent
            ${isDarkMode
              ? 'bg-gradient-to-r from-purple-400 via-indigo-400 to-teal-300'
              : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-500'}`}
        >
          {project.title}
        </h3>
      </div>
    </a>
  </motion.div>
);

const Projects: NextPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
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

  useEffect(() => {
    const staticProjects: Project[] = [
      {
        id: "1",
        title: "Electro Store",
        image: one,
        description: "A sleek e-commerce platform for electronics enthusiasts.",
        url: "https://landing-store.vercel.app/",
      },
      {
        id: "2",
        title: "Healthtic",
        image: three,
        description: "Track your wellness with this intuitive health app.",
        url: "https://calories-two.vercel.app/",
      },
      {
        id: "3",
        title: "Lawer",
        image: two,
        description: "Professional legal services at your fingertips.",
        url: "https://lawer-app-ten.vercel.app/",
      },
      {
        id: "4",
        title: "Fashioniza",
        image: four,
        description: "Explore the latest trends in fashion retail.",
        url: "https://fourth-py.vercel.app/",
      },
      {
        id: "5",
        title: "Legends",
        image: five,
        description: "A tribute to legendary stories and experiences.",
        url: "https://legends-mauve.vercel.app/",
      },
      {
        id: "6",
        title: "Portfolio",
        image: six,
        description: "Showcasing my skills and projects in style.",
        url: "https://portfolio-seven-puce-13.vercel.app/",
      },
    ];
    setProjects(staticProjects);
  }, []);

  return (
    <section
      id="projects"
      className={`w-full py-20 md:py-28 px-6 md:px-12 lg:px-20 transition-colors duration-300
        ${isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100'
          : 'bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 text-gray-700'}`}
    >
      <motion.div
        className="text-center mb-16 md:mb-24"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1
          className={`text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent drop-shadow-lg
            ${isDarkMode
              ? 'bg-gradient-to-r from-purple-400 via-indigo-400 to-teal-300'
              : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-500'}`}
        >
          My Projects
        </h1>
        <p
          className={`text-lg md:text-xl mt-6 max-w-2xl mx-auto font-light leading-relaxed
            ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
          A collection of my work showcasing creativity and technical expertise.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} isDarkMode={isDarkMode} />
        ))}
      </div>
    </section>
  );
};

export default Projects;