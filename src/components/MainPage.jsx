import React from "react";
import pic1 from "../images/bg-photo.webp";
const MainPage = () => {
  return (
    <div>
      <div className="relative w-auto h-60 sm:h-80 md:h-120 lg:h-164.5">
        <img
          src={pic1}
          alt="Background"
          className="absolute inset-0 w-screen h-full object-cover "
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-row justify-around p-3 sm:p-4 md:p-6 lg:p-10  gap-0.5 sm:gap-1 md:gap-2 lg:gap-3  text-[8px] sm:text-[13px] md:text-[13px] lg:text-[18px]">
          <logo className="text-white px-6">reyhaneh</logo>
          <ul className=" flex flex-row items-center  space-x-3 sm:space-x-7 md:space-x-8 lg:space-x-9">
            <li className=" text-gray-50 hover:text-[var(--lightpurple)] cursor-pointer transition-colors duration-300">
              Home
            </li>
            <li className=" text-gray-50 hover:text-[var(--lightpurple)] cursor-pointer transition-colors duration-300">
              Projects
            </li>
            <li className=" text-gray-50 hover:text-[var(--lightpurple)] cursor-pointer transition-colors duration-300">
              Skills
            </li>
            <li className=" text-gray-50 hover:text-[var(--lightpurple)] cursor-pointer transition-colors duration-300">
              About Me
            </li>
            <li className=" text-gray-50 hover:text-[var(--lightpurple)] cursor-pointer transition-colors duration-300">
              Contact Me
            </li>
          </ul>
          <button className="bg-[var(--lightgray)] px-1.5 py-0.5 sm:px-2.5 sm:py-1 md:px-3.5 md:py-1 lg:px-5.5 lg:py-1 rounded-2xl hover:bg-[var(--lightpurple)] hover:text-gray-100 transition-colors duration-300">
            Sign In
          </button>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-40 sm:h-60 md:h-90 lg:h-110">
          <h1 className="text-white text-4xl md:text-7xl font-bold mb-4">
            Welcome to My Site
          </h1>
          <p className="text-white text-lg md:text-2xl">
            You are here to get to know me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
