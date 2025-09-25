import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
} from "react-icons/fa";

const skills = [
  {
    name: "HTML",
    level: 90,
    icon: <FaHtml5 className="text-red-500 w-12 h-12" />,
  },
  {
    name: "CSS",
    level: 85,
    icon: <FaCss3Alt className="text-blue-500 w-12 h-12" />,
  },
  {
    name: "JavaScript",
    level: 60,
    icon: <FaJsSquare className="text-yellow-400 w-12 h-12" />,
  },
  {
    name: "React",
    level: 70,
    icon: <FaReact className="text-cyan-500 w-12 h-12" />,
  },
  {
    name: "GitHub",
    level: 60,
    icon: <FaGithub className="text-gray-700 w-12 h-12" />,
  },
];
const Skills = () => {
  const circleRadius = 40;
  const circumference = 2 * Math.PI * circleRadius;

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center py-20 overflow-hidden">
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.5, y: 10 }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 5 + 2,
              delay: Math.random() * 5,
              repeatType: "reverse",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <h1 className="text-5xl text-white font-bold mb-16 z-10">My Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center bg-gray-900/70 p-8 rounded-3xl shadow-2xl hover:scale-110 transform transition duration-500 cursor-pointer"
            whileHover={{ rotate: 5 }}
          >
            <svg className="w-32 h-32 mb-4">
              <circle
                cx="50%"
                cy="50%"
                r={circleRadius}
                stroke="#374151"
                strokeWidth="8"
                fill="transparent"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r={circleRadius}
                stroke="#3b82f6"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
                strokeLinecap="round"
                animate={{
                  strokeDashoffset: circumference * (1 - skill.level / 100),
                }}
                transition={{ duration: 1.5, delay: index * 0.3 }}
              />
            </svg>
            {skill.icon}
            <h2 className="text-2xl text-white font-semibold mt-4">
              {skill.name}
            </h2>
            <p className="text-gray-300 mt-1">{skill.level}%</p>
          </motion.div>
        ))}
      </div>
        <motion.a
          href="#home"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" bg-gray-900 hover:bg-[var(--darkblue)] text-white font-medium m-10 py-4 px-7 rounded-full shadow-lg transition"
        >
          Back to home
        </motion.a>
    </div>
  );
};

export default Skills;
