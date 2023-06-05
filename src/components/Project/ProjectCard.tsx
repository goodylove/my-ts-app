import React from "react";

type projectProps = {
  data: {
    img: string;
    link: string;
  };
};
const ProjectCard = ({ data }: projectProps) => {
  return (
    <div>
      <a href={`${data.link}`} target="_blank">
        <img src={data.img} alt="" className="w-[300px] h-[250px] rounded" />
      </a>
    </div>
  );
};

export default ProjectCard;
