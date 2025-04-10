"use client";
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:alielsharqawy250@gmail.com?subject=${encodeURIComponent(
      "New Contact Message"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
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

const Contact: NextPage = () => {
  const { formData, handleChange, handleSubmit } = useContactForm();
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

  return (
    <section
      id="contact"
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
          Contact Me
        </h2>
        <p
          className={`text-lg md:text-xl mt-6 max-w-2xl mx-auto font-light leading-relaxed
            ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
          Let’s connect! Drop me a message, and I’ll get back to you soon.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className={`max-w-xl mx-auto space-y-6 p-8 rounded-xl shadow-lg border
          ${isDarkMode
            ? 'bg-gray-800/90 text-gray-100 border-gray-700'
            : 'bg-white/90 text-gray-800 border-gray-100/50'}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name*"
          value={formData.name}
          onChange={handleChange}
          required
          className={`w-full bg-transparent p-3 text-inherit placeholder-gray-500 focus:outline-none transition-colors duration-300
            ${isDarkMode
              ? 'border-b-2 border-gray-600 focus:border-indigo-400'
              : 'border-b-2 border-gray-300 focus:border-indigo-600'}`}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email*"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full bg-transparent p-3 text-inherit placeholder-gray-500 focus:outline-none transition-colors duration-300
            ${isDarkMode
              ? 'border-b-2 border-gray-600 focus:border-indigo-400'
              : 'border-b-2 border-gray-300 focus:border-indigo-600'}`}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full bg-transparent p-3 text-inherit placeholder-gray-500 focus:outline-none transition-colors duration-300
            ${isDarkMode
              ? 'border-b-2 border-gray-600 focus:border-indigo-400'
              : 'border-b-2 border-gray-300 focus:border-indigo-600'}`}
        />
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message*"
          value={formData.message}
          onChange={handleChange}
          required
          className={`w-full bg-transparent p-3 text-inherit placeholder-gray-500 focus:outline-none transition-colors duration-300 rounded-md
            ${isDarkMode
              ? 'border-2 border-gray-600 focus:border-indigo-400'
              : 'border-2 border-gray-300 focus:border-indigo-600'}`}
        />
        <motion.button
          type="submit"
          className={`w-full px-6 py-3 font-semibold rounded-full transition-all duration-300
            ${isDarkMode
              ? 'bg-indigo-500 text-white hover:bg-indigo-600'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;