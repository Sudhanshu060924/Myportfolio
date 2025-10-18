import React from "react";

const About = () => {
  return (
    <>
      <section
        id="About"
        className="min-h-screen bg-green-50  flex   w-full  justify-center "
      >
        <div className="flex  flex-col md:flex-row items-center justify-center  max-w-6xl ">
          {/* Left Side */}
          <div className=" mt-10 md:mt-35 w-full pl-5 md:pl-0 md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-[PPMondwest] leading-snug text-black">
              I’m a third-year BTech CSE student with a strong {""}
              <span className="text-red-600">passion</span> for full-stack web
              development and creating impactful digital communities through
              innovative technology solutions.
            </h1>
          </div>

          {/* Right Side */}
          <div className="flex flex-row md:flex-col p-10 md:p-0 w-full md:w-1/2 items-center md:items-center pl-10  justify-center space-y-8">
            <p className="text-sm mr-10 md:mr-0  md:text-xl text-gray-800 max-w-xs font-normal font-[PPMondwest] leading-[relaxed]">
              Turning ideas into engaging web solutions and collaborative online
              spaces.
            </p>
            
              <button className=" w-40 md:w-32 h-32 rounded-full bg-black text-white hover:bg-red-600 hover:opacity-80 transition-all duration-300 flex items-center justify-center text-lg font-medium">
                About me
              </button>
        
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
