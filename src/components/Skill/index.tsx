import React, { useEffect, useRef } from "react";
import Button from "../Button/button";
import { skills } from "../../Data";
import { useInView } from "framer-motion";
import Bar from "./Bar";

const Skill = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section
      className="bg-blue flex justify-center w-full"
      id="skills"
      ref={ref}
    >
      <div className="w-[80%] flex flex-col justify-center ">
        <div className="flex justify-center m-3">
          <Button className="text-white  md:border-[1px] border-white  p-1 rounded-md w-[100px] bg-transparent  m-2">
            Skills
          </Button>
        </div>
        {inView && (
          <div className="grid grid-cols-2 content-center gap-4">
            {skills.map((skill, index) => {
              return <Bar skill={skill} key={index} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skill;
