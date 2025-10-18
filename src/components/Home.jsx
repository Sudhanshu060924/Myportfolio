import React from "react";
import { Link } from "react-scroll";
import Nav from "./Nav";
import {BubbleBackground} from "./BubbleBackground";
import { motion } from "framer-motion";



function Home() {
  return (
    <>
      <div
        id="Home"
        className=" relative mt-20 md:mt-0 h-[50vh] md:h-[100vh]  w-full  flex flex-col items-center justify-center "
      >
        <BubbleBackground interactive={true} />

        <Nav />
        <div className="absolute  text-[100px] md:text-[180px]  font-[PNeueBit] leading-[75%]  h-[45vh]   z-10     uppercase   ">
          Explore My <br /> Portfolio
        </div>
      </div>
    </>
  );
}

export default Home;
