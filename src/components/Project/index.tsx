import React from "react";
import Button from "../Button/button";
import { projects } from "../../Data";
import ProjectCard from "./ProjectCard";
const Project = () => {
  return (
    <section className="bg-blue p-2" id="projects">
      <div className="flex justify-center m-2">
        <Button className="text-white  md:border-[1px] border-white  p-2 rounded-md w-[130px] bg-transparent  m-2">
          {" "}
          Project
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 gap-6 content-center ">
          {projects.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
