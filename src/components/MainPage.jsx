import React from "react";
import pic1 from "../images/bg-photo.webp";
import pic2 from "../images/logo.webp";
const MainPage = () => {
  return (
    <div>
      <div className="relative w-screen h-60 sm:h-80 md:h-110 lg:h-118.5">
        <img
          src={pic1}
          alt="Background"
          className="absolute inset-0 w-screen h-full object-cover "
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex flex-row justify-around">
          <img className="relative w-12 h-11 sm:w-17 md:w-25 lg:w-30 sm:h-15 md:h-20 lg:h-25 z-10" src={pic2} alt="logo" />
          <div className="relative z-10 flex flex-row px-1 py-4 sm:h-15 md:h-18 lg:h-22.5 sm:p-5 md:p-7 lg:p-8 gap-18 sm:gap-35 md:gap-45 lg:gap-50 text-[8px] sm:text-[13px] md:text-[13px] lg:text-[15px]">
            <div>
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
            </div>
            <div>
            <button className="bg-[var(--lightgray)] px-1.5 py-0.5 sm:px-2.5 sm:py-1 md:px-3.5 md:py-1 lg:px-5.5 lg:py-0.5 rounded-2xl hover:bg-[var(--lightpurple)] hover:text-gray-100 transition-colors duration-300 float-left ">
              Sign In
            </button>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-40 sm:h-60 md:h-90 lg:h-85">
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
