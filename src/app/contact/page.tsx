"use client";

import type { NextPage } from "next";
import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

// Type definition for form data
type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

// Custom hook to manage form logic
const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:alielsharqawy250@gmail.com?subject=${encodeURIComponent(
      "New Contact Message"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    Swal.fire({
      icon: "success",
      title: "Opening Email App...",
      text: "Please complete sending your message from your email client.",
    });
  };

  return { formData, handleChange, handleSubmit };
};

// Main Contact component
const Contact: NextPage = () => {
  const { formData, handleChange, handleSubmit } = useContactForm();

  return (
    <section className="w-full bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-800 py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-500">
          Contact Me
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-3 md:mt-4 max-w-xl mx-auto">
          Feel free to reach out to me using the form below!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name*"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-b-2 border-gray-400 p-3 text-sm md:text-base placeholder-gray-500 focus:border-indigo-600 focus:outline-none transition-colors duration-300"
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email*"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-b-2 border-gray-400 p-3 text-sm md:text-base placeholder-gray-500 focus:border-indigo-600 focus:outline-none transition-colors duration-300"
        />

        {/* Phone Input */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-transparent border-b-2 border-gray-400 p-3 text-sm md:text-base placeholder-gray-500 focus:border-indigo-600 focus:outline-none transition-colors duration-300"
        />

        {/* Message Textarea */}
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message*"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-2 border-gray-400 rounded-md p-3 text-sm md:text-base placeholder-gray-500 focus:border-indigo-600 focus:outline-none transition-colors duration-300"
        ></textarea>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 font-semibold tracking-widest rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SUBMIT
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;