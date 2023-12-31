import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="w-screen min-h-screen bg-[#0a192f] flex items-center justify-center"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8">
        <div className="my-16 sm:my-32">
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] mb-4 sm:mb-8 sm:leading-tight">
            James Parrish
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] mb-4 sm:mb-8">
            Full-Stack Software Engineer
          </h2>
          <p className="text-[#8892b0] max-w-[700px] mb-8">
            I'm a full-stack software engineer with a passion for creating
            efficient and effective code.
          </p>
          <div>
            <button className="text-white group border-2 px-6 py-2 my-2 flex items-center hover:border-[#8892b0] hover:text-[#8892b0]">
              <Link to="projects" smooth={true} duration={500}>
                View Projects
              </Link>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
