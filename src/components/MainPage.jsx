import React, { useRef } from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import profilePic from "../images/girl.webp";
import logo from "../images/reyhane.webp"; 

const MainPage = () => {
  const githubPagesBase = "/first-react";
  const homeRef = useRef(null);
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];
  return (
    <div className="w-full">
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[var(--darkpink)] via-[var(--middlepink)] to-black
 backdrop-blur-md text-white shadow-lg z-50">
        <div className="flex items-center justify-between px-10">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-20 h-20 object-contain filter brightness-90 contrast-100" />
          </div>
          <ul className="flex justify-center space-x-8 py-4 font-semibold">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group cursor-pointer"
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors duration-300"
                >
                  {item}
                </a>

                <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-[var(--lightpink)] transition-all duration-300 group-hover:w-full"></span>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
      <div ref={homeRef}>
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 pt-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">  
              Hi, I’m <span className="text-[var(--lightpink)]">Reyhane</span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold mb-6">
              <ReactTyped
                strings={[
                  "Web Developer 💻",
                  "Creative Designer 🎨",
                  "Problem Solver 🧩",
                  "Dreamer ✨",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </h2>

            <p className="text-lg text-gray-300 mb-6 max-w-md">
              Passionate about building interactive, user-friendly web
              experiences with a touch of creativity and clean design.
            </p>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[var(--lightpink)] hover:bg-[var(--darkpink)] text-white font-medium py-3 px-6 rounded-full shadow-lg transition"
            >
              View My Work
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-10 md:mt-0 md:ml-10"
          >
            <motion.img
              src={profilePic}
              alt="Reyhane"
              className="w-64 h-64 object-cover rounded-full border-4 border-[var(--lightpink)] shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
