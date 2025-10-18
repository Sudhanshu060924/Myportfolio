import React from "react";
import ProjectsCarousel from "./Subcom/ProjectsCarousel";
import SkillsMarquee from "./Subcom/SkillsMarquee";



function Projects() {
  return (
    <>
      <div id="Projects" className="  w-full   ">
       
        <ProjectsCarousel />
        <SkillsMarquee />
      </div>
    </>
  );
}

export default Projects;
