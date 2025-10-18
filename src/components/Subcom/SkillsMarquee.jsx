"use client";
import React from "react";
import { motion } from "framer-motion";
import {

  SiJavascript,
  SiTypescript,
  SiC,
  SiMongodb,
  SiMysql,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiGit,
} from "react-icons/si";

const skills = [
  
  { name: "JavaScript", icon: <SiJavascript size={150} color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript size={150} color="#3178C6" /> },
  { name: "C", icon: <SiC size={150} color="#A8B9CC" /> },
  { name: "MongoDB", icon: <SiMongodb size={150} color="#47A248" /> },
  { name: "MySQL", icon: <SiMysql size={150} color="#4479A1" /> },
  { name: "React JS", icon: <SiReact size={150} color="#61DAFB" /> },
  { name: "Node JS", icon: <SiNodedotjs size={150} color="#339933" /> },
  { name: "Express JS", icon: <SiExpress size={150} color="#000000" /> },
  { name: "Git", icon: <SiGit size={150} color="#F05032" /> },
];

const SkillsMarquee = () => {
  return (
    <div className="overflow-hidden bg-gray-100 py-10 relative">
      <h2 className="text-3xl font-bold font-[grotesk] text-center mb-8">
        My Skills
      </h2>

      <div className="flex overflow-hidden whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="flex gap-16 items-center"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 min-w-[180px]"
              >
                {skill.icon}
                <span className="text-xl font-medium">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
