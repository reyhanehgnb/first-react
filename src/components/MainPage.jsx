import React, { useRef } from "react";
import pic1 from "../images/bg-photo.webp";
import pic2 from "../images/logo.webp";

const MainPage = () => {
  const githubPagesBase = "/first-react";
  const homeRef = useRef(null);
  return (
    <div className="w-full">
      <section>
        <div className="relative w-full">
          <img
            src={pic1}
            alt="Background"
            className="absolute inset-0 w-full h-66 sm:h-90 md:h-119 lg:h-148.5 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60 h-66 sm:h-90 md:h-119 lg:h-148.5"></div>

          <div className="flex flex-row justify-around">
            <img
              className="relative w-12 h-11 sm:w-17 md:w-25 lg:w-31 sm:h-15 md:h-20 lg:h-28 z-10"
              src={pic2}
              alt="logo"
            />
            <div className="relative z-10 flex flex-row px-1 py-4 sm:h-15 md:h-18 lg:h-22.5 sm:p-5 md:p-6 lg:p-9 gap-10 sm:gap-26 md:gap-40 lg:gap-50 text-[10px] sm:text-[15px] lg:text-[19px]">
              <div>
                <ul className="flex flex-row items-center space-x-3 sm:space-x-7 md:space-x-8 lg:space-x-9">
                  <li
                    className="cursor-pointer text-gray-50 hover:text-[var(--lightpurple)] transition-colors duration-300"
                    onClick={() =>
                      homeRef.current.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Home
                  </li>
                  <li className="text-gray-50 hover:text-[var(--lightpurple)] cursor-pointer transition-colors duration-300">
                    <a
                      href={`${githubPagesBase}/#/projects`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Projects
                    </a>
                  </li>

                  <li className="text-gray-50 hover:text-[var(--lightpurple)] cursor-pointer transition-colors duration-300">
                    <a
                      href={`${githubPagesBase}/#/skills`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Skills
                    </a>
                  </li>

                  <li className="text-gray-50 hover:text-[var(--lightpurple)] cursor-pointer transition-colors duration-300">
                    <a
                      href={`${githubPagesBase}/#/about-me`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      About Me
                    </a>
                  </li>

                  <li className="text-gray-50 hover:text-[var(--lightpurple)] cursor-pointer transition-colors duration-300">
                    <a
                      href={`${githubPagesBase}/#/contact-me`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <button className="bg-[var(--lightgray)] px-1.5 py-0.5 sm:px-2.5 sm:py-1 md:px-3.5 md:py-1 lg:px-5.5 lg:py-0.5 rounded-2xl hover:bg-[var(--lightpurple)] hover:text-gray-100 transition-colors duration-300 float-left">
                  Sign In
                </button>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center h-40 sm:h-60 md:h-90 lg:h-120">
            <h1 className="text-white text-3xl md:text-6xl font-bold mb-4">
              Welcome to My Website
            </h1>
            <p className="text-white text-lg md:text-2xl">
              You are here to get to know me.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
