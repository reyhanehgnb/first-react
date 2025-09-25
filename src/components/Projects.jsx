import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/reyhanehgnb/repos")
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <p className="text-center mt-20 text-xl text-gray-400 animate-pulse">
        Loading projects...
      </p>
    );

  if (!projects.length)
    return <p className="text-center mt-20 text-xl text-gray-400">No projects found.</p>;

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-6 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-white mb-16 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative bg-gray-800 rounded-3xl p-6 shadow-2xl hover:scale-105 transform transition-all duration-500">
              <h2 className="text-2xl font-semibold text-white mb-3 truncate">{project.name}</h2>
              <p className="text-gray-300 mb-5 line-clamp-4">
                {project.description || "No description available."}
              </p>

              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-gray-400 font-medium">
                  <FaCode /> {project.language || "N/A"}
                </span>
                <span className="flex items-center gap-2 text-blue-400 font-semibold group-hover:text-blue-500 transition">
                  <FaExternalLinkAlt /> View
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none" />
            </div>
          </a>
        ))}
      </div>
      <motion.a
        href="#home"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gray-800 hover:bg-[var(--darkblue)] text-white font-medium mt-16 py-4 px-7 rounded-full shadow-lg transition"
      >
        Back to home
      </motion.a>
    </div>
  );
};

export default Projects;
