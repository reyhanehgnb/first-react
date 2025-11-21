import React from "react";
import { motion } from "framer-motion";
import pic1 from "../images/about.webp";

const AboutMe = () => {
  return (
    <div className="w-full overflow-x-hidden">
    
      <div className="relative w-full h-60 md:h-96 lg:min-h-screen flex items-center">
        <img
          src={pic1}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover brightness-50 -z-10"
        />

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="p-6 md:p-10 max-w-2xl text-white"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight ml-0 md:ml-20">
            I<br /> was born on <br /> 2007
          </h2>
        </motion.div>
      </div>

    
      <div className="w-full py-20 px-6 sm:px-12 md:px-20 bg-[var(--lightcream)]">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto pb-20 text-[var(--brown)]"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Personal Life
          </h2>

          <div className="bg-[var(--darkbrown)] p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <p className="text-gray-300 text-base leading-relaxed">
              Hi, I'm <span className="font-semibold text-[var(--lightblue)]">Reyhaneh</span>, a passionate Front-End Developer based in{" "}
              <span className="font-semibold text-[var(--lightblue)]">Qazvin, Iran</span>.
              <br />
              I enjoy building responsive, modern web interfaces using HTML, CSS, JavaScript, and React.
              <br />
              I'm always learning new technologies to improve my skills and create better digital experiences.
              <br />
              My English level is{" "}
              <span className="font-semibold text-[var(--lightblue)]">B1</span>, which helps me understand technical documentation and collaborate effectively on projects.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-[var(--brown)]"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Education
          </h2>

          <div className="space-y-6">

            <div className="bg-[var(--darkbrown)] p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-white mb-2">High School</h3>
              <p className="text-gray-300">
                I completed my high school education in{" "}
                <span className="font-semibold text-[var(--lightblue)]">Empirical Science</span> and received my diploma in 1403–1404.
              </p>
            </div>

            <div className="bg-[var(--darkbrown)] p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-white mb-2">University</h3>
              <p className="text-gray-300">
                I'm currently studying Computer Engineering at{" "}
                <span className="font-semibold text-[var(--lightblue)]">
                  Qazvin Islamic Azad University
                </span>.
              </p>
            </div>

            <div className="bg-[var(--darkbrown)] p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-white mb-2">Programming Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                I completed the{" "}
                <span className="font-semibold text-[var(--lightblue)]">
                  HTML & CSS, JavaScript, and React
                </span>{" "}
                courses at{" "}
                <a href="https://jedu.ir" className="underline text-[var(--lightblue)]">
                  Jedu
                </a>
                .
                <br />HTML & CSS score:{" "}
                <span className="font-semibold text-[var(--lightblue)]">100/100</span>
                <br />JavaScript score:{" "}
                <span className="font-semibold text-[var(--lightblue)]">87/100</span>
                <br />React score:{" "}
                <span className="font-semibold text-[var(--lightblue)]">Coming soon…</span>
              </p>
            </div>
          </div>

          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="block text-center bg-[var(--darkbrown)] hover:bg-[var(--lightbrown)] text-white font-medium mt-14 py-3 px-8 rounded-full shadow-lg transition mx-auto w-fit"
          >
            Back to Home
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
