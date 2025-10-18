"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "Yantra Cartographer",
    role: "Design & Development",
    img: "Yantra.png",
    desc: "An interactive web app that generates accurate 3D models and dimensions of ancient astronomical instruments (Yantras) using React, Three.js, and trigonometric algorithms.",
    link: "https://astronomicalyantra.netlify.app/",
  },
  {
    name: "AI-Enabled Marine Data Integration Platform",
    role: "Smart India Hackathon 2025 Project (Group Project)",
    img: "marine.png",
    desc: "An AI-driven unified platform to integrate and analyze marine datasets such as ocean, fisheries, and DNA data. Implemented automated pipelines, AI/ML models, and interactive dashboards for data insights.",
    link: "https://marinedata.netlify.app/",
  },
  {
    name: "Krrid",
    role: "Design & Development",
    img: "Krrid.png",
    desc: "Developed an e-learning chess platform offering live 1-on-1 sessions, student-teacher dashboards, and gamified learning modules using React, Node.js, and MongoDB.",
    link: "https://www.krrid.com/",
  },
  {
    name: "Personal Portfolio",
    role: "Design & Development",
    img: "Portfolio.png",
    desc: "Created a personal portfolio website using React and Tailwind CSS, featuring smooth animations, responsive design, and modern UI showcasing my projects and skills.",
    link: "https://sudhanshusingh0624.netlify.app/", 
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-sm font-semibold font-[PPMondwest] tracking-widest mb-6">
          RECENT WORK
        </h2>

        <div className="divide-y divide-black border-t border-b border-black">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-6 cursor-pointer"
              onMouseEnter={() => setHovered(project)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3 className="text-4xl font-semibold font-[PNeueBit] hover:text-gray-500 transition-colors">
                {project.name}
              </h3>
              <p className="text-base font-[grotesk] text-gray-700">
                {project.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Center Popup Card */}
      <AnimatePresence>
        {hovered && (
          <motion.a
            href={hovered.link}
            
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-40"
          >
            <div className="bg-gray-200 rounded-xl shadow-2xl w-[300px] md:w-[420px] p-4">
              <img
                src={hovered.img}
                alt={hovered.name}
                className="rounded-lg w-full h-56 object-cover"
              />
              <div className="mt-3 text-center">
                <h4 className="text-2xl font-[grotesk] font-semibold">
                  {hovered.name}
                </h4>
                <p className="text-sm font-[PPMondwest] leading-5 text-gray-600 mt-1">
                  {hovered.desc}
                </p>
              </div>
            </div>
          </motion.a>
        )}
      </AnimatePresence>
    </section>
  );
}
