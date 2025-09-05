import React from "react";
import pic1 from "../images/bg-photo.avif";
const MainPage = () => {
  return (
    <div>
      <div className="bg-[var(--darkblue)] justify-around items-center flex flex-row py-6 px-0">
        <logo>reyhaneh</logo>
        <ul className="flex flex-row  text-gray-400 gap-13 cursor-pointer">
          <li className=" hover:text-white transition-colors duration-300">
            Home
          </li>
          <li className=" hover:text-white transition-colors duration-300">
            Projects
          </li>
          <li className=" hover:text-white transition-colors duration-300">
            Skills
          </li>
          <li className=" hover:text-white transition-colors duration-300">
            About Me
          </li>
          <li className=" hover:text-white transition-colors duration-300">
            Contact Me
          </li>
        </ul>
        <button className="bg-[var(--iceblue)] px-5 py-1 rounded-2xl hover:bg-[var(--darkblue)] hover:text-gray-100 transition-colors duration-300">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default MainPage;
