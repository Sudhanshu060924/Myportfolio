"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi"; // Using a simple user icon for the avatar placeholder

// --- Component Start ---
const Contact = () => {
  // Animation for the pulsing red circle
  const circleVariants = {
    animate: {
      scale: [1, 1.1, 1], // Scale up and down
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="Contact"
      className=" relative bg-black h-screen text-white flex flex-col justify-center items-center  "
    >
      <div className="max-w-5xl   w-full text-center">
        <div className="">
          <div className="flex items-center pl-5 md:pl-0 mb-4">
            <div className="bg-red-600 rounded-full p-2 mr-4 border-2 border-red-600">
              <FiUser size={32} className="text-black" />
            </div>

            <h1 className="text-3xl md:text-7xl font-bold text-white leading-tight font-[PNeueBit] tracking-widest">
              Let's Work {""} together
            </h1>
          </div>
        </div>

        <div className="relative flex items-center justify-center my-16">
          <div className="absolute w-full h-px bg-gray-700 top-1/2 transform -translate-y-1/2"></div>

          <motion.a
            href="/"
            className="relative z-10 w-40 h-40 bg-red-600 rounded-full flex items-center justify-center font-semibold text-white shadow-lg cursor-pointer"
            variants={circleVariants}
            animate="animate"
            whileHover={{ scale: 1.15 }}
          >
            About me
          </motion.a>
        </div>

        <div className="flex flex-col md:flex-row tracking-wider  justify-center items-center gap-6 mt-20">
          <a
            href="mailto:sudhanshusingh0624@gmail.com"
            className="py-4 px-8 font-[grotesk] border border-white rounded-full text-white text-lg hover:bg-white hover:text-black transition duration-300 "
          >
            sudhanshusingh0624@gmail.com
          </a>

          <a
            href="tel:+917348147357"
            className="py-4 font-[grotesk] px-8 border border-white rounded-full text-white text-lg hover:bg-white hover:text-black transition duration-300 "
          >
            +91 7348147357
          </a>
        </div>
      </div>

      <footer className=" absolute bottom-0  w-full  left-0 right-0 p-4 border-t border-gray-900 flex flex-col md:flex-row justify-between text-xs text-gray-500 font-mono">
        <div className="flex flex-row  md:gap-8">
          <span>VERSION</span>
          <span>2025 O Edition</span>
        </div>

        <div className="flex gap-4">
          <span>SOCIALS</span>

          {/* <a href="#" className="hover:text-white">
            LinkedIn
          </a> */}
          <a
            href="https://github.com/Sudhanshu060924"
            className="hover:text-white"
          >
            GitHub
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
