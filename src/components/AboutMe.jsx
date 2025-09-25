import React from "react";
import { motion } from "framer-motion";
import pic1 from "../images/about.jpg";

const AboutMe = () => {
  return (
    <div>
      <div className="relative w-full h-60 md:h-90 lg:min-h-screen overflow-x-hidden flex items-center">
        <img
          src={pic1}
          alt="Background"
          className="h-full w-full object-cover brightness-50 absolute top-0 left-0 -z-10"
        />
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="p-6 md:p-10 max-w-xl text-white"
        >
          <h2 className="text-3xl/normal md:text5xl/normal lg:text-7xl/normal font-semibold mb-4 text-white  ml-0 md:ml-20 lg:ml-30">
            I<br /> was born on <br /> June16,2007
          </h2>
        </motion.div>
      </div>
      <div className="w-full py-12 px-6 sm:px-12 md:px-20 bg-[var(--lightcream)] text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col justify-center items-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[var(--brown)]">
            Education
          </h2>

          <div className="space-y-6">
            <div className="bg-[var(--darkbrown)] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">High School</h3>
              <p className="text-sm sm:text-base text-gray-300">
                I completed my high school educaion in{" "}
                <span className="font-semibold text-[var(--lightblue)]">
                  Empirical Science
                </span>{" "}
                and obtined my empirical science diploma in 1403-1404.
              </p>
            </div>
            <div className="bg-[var(--darkbrown)] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Programming Learning</h3>
              <p className="text-sm sm:text-base text-gray-300">
                I have completed the{" "}
                <span className="font-semibold text-[var(--lightblue)]">
                  HtmlCss,JavaScript and React{" "}
                </span>{" "}
                courses at <a href="https://jedu.ir" className="underline">Jedu</a>. <br />I have
                passed the{" "}
                <span className="font-semibold text-[var(--lightblue)]">
                  {" "}
                  HtmlCss
                </span>{" "}
                coures with a score of{" "}
                <span className="font-semibold text-[var(--lightblue)]">
                  {" "}
                  100/100
                </span>
                . <br />I have passed the{" "}
                <span className="font-semibold text-[var(--lightblue)]">
                  JavaScript
                </span>{" "}
                coures with a score of{" "}
                <span className="font-semibold text-[var(--lightblue)]">
                  {" "}
                  87/100
                </span>
                . <br />I have passed the{" "}
                <span className="font-semibold text-[var(--lightblue)]">
                  React
                </span>{" "}
                coures with a score of{" "}
                <span className="font-semibold text-[var(--lightblue)]">
                  ....
                </span>{" "}
                . <br />
              </p>
            </div>
          </div>

          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className=" bg-[var(--darkblue)] hover:bg-[var(--lightbrown)] text-white font-medium m-10 py-3 px-6 rounded-full shadow-lg transition"
          >
            Back to home
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
