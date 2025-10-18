import React, { useState } from "react";
import { Link } from "react-scroll";
import Projects from "./Projects";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [ "About", "Projects", "Contact"];

  return (
    <div className="nav fixed bg-white/40 top-0 z-20  w-full    ">
      <div className="flex justify-between items-center pl-10 pr-10 md:px-10 py-2">
        <div className="logo font-[grotesk] uppercase font-semibold text-3xl cursor-pointer leading-[75%]">
          <Link to="Home" smooth={true} duration={500}>
            Sudhanshu <br />
            Singh
          </Link>
        </div>

        <nav className="hidden md:flex gap-8 font-[PNeueBit] text-3xl">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-blue-400 border-b-2 border-blue-400"
              className="cursor-pointer hover:text-blue-400 transition-colors"
            >
              {section}
            </Link>
          ))}
        </nav>

        <button className="hidden md:block px-4 py-1 border-2 rounded-md   text-2xl font-[PNeueBit] hover:bg-black/20 transition-all duration-300">
          Let's Talk
        </button>

        {/* mobile menu button */}
        <div
          className="md:hidden flex flex-col justify-between w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-full bg-black transform transition duration-300 ${
              isOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-black transition duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-black transform transition duration-300 ${
              isOpen ? "-rotate-45 -translate-y-4 " : ""
            }`}
          />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-200 justify-center items-center font-[PNeueBit] text-lg pb-4 flex flex-col gap-4">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-blue-400 transition-colors"
            >
              {section}
            </Link>
          ))}
          <button className="px-4 py-1 border-2 rounded-md text-base hover:bg-black/20 transition-all duration-300">
            Let's Talk
          </button>
        </div>
      )}
    </div>
  );
}

export default Nav;
