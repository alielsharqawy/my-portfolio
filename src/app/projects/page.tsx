"use client";

import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
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
  image: any;
  description: string;
  url: string;
};

// Project Card Component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.div
    className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100/50 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
    whileHover={{ scale: 1.05, rotate: 1 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative w-full h-60">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
          <p className="text-white text-sm font-medium drop-shadow-md">{project.description}</p>
        </div>
      </div>
      <div className="p-5 bg-gradient-to-br from-white/90 to-gray-100/90">
        <h3 className="text-xl font-bold text-gray-800 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-500">
          {project.title}
        </h3>
      </div>
    </a>
  </motion.div>
);

// Projects Page
const Projects: NextPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  // Static project data with URLs and descriptions
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
    <section className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-teal-50 text-gray-800 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-500 drop-shadow-lg">
            My Projects
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-6 max-w-3xl mx-auto font-light leading-relaxed">
            Dive into my world of innovation and creativity through these meticulously crafted projects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full text-lg">
              No projects available yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;