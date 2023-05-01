import React from "react";

type projectProps = {
  data: {
    img: string;
  };
};
const ProjectCard = ({ data }: projectProps) => {
  return (
    <div>
      <img src={data.img} alt="" className="w-[300px] h-[250px]" />
    </div>
  );
};

export default ProjectCard;
