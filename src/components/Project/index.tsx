import React from "react";
import Button from "./../Button/index";
import { projects } from "../../Data";
import ProjectCard from "./ProjectCard";
const Project = () => {
  return (
    <section className="bg-blue p-3">
      <div className="flex justify-center m-2">
        <Button
          text={"project"}
          className="text-white  border-[1px] border-white  p-2 rounded-md w-[130px] bg-transparent  m-2"
        />
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
