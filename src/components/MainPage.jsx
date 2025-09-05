import React from "react";
import pic1 from "../images/photo.avif";
const MainPage = () => {
  return (
    <div>
      <div className="relative w-auto h-149">
        <img
          src={pic1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70 "></div>
        <div className="relative z-10 flex flex-row justify-around p-5 gap-3">
          <logo className="text-white px-6">reyhaneh</logo>
          <ul className=" flex flex-row items-center  space-x-9">
            <li className=" text-gray-50 hover:text-gray-500 cursor-pointer transition-colors duration-300">
              Home
            </li>
            <li className=" text-gray-50 hover:text-gray-500 cursor-pointer transition-colors duration-300">
              Projects
            </li>
            <li className=" text-gray-50 hover:text-gray-500 cursor-pointer transition-colors duration-300">
              Skills
            </li>
            <li className=" text-gray-50 hover:text-gray-500 cursor-pointer transition-colors duration-300">
              About Me
            </li>
            <li className=" text-gray-50 hover:text-gray-500 cursor-pointer transition-colors duration-300">
              Contact Me
            </li>
          </ul>
          <button className="bg-[var(--lightgray)] px-5.5 py-1 rounded-2xl hover:bg-[var(--darkblue)] hover:text-gray-100 transition-colors duration-300">
            Sign In
          </button>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
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
