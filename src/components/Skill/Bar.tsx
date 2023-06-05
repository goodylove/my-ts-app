import React from "react";
import { motion as m } from "framer-motion";
import { container, item } from "../../components/Animation ";

type BarProps = {
  skill: {
    name: string;
    level: string;
    colors: string;
  };
};

const Bar = ({ skill }: BarProps) => {
  const widthValue = `${skill.level}`;
  const variants = {
    hidden: {
      width: 0,
      transition: {
        ease: "easeInOut",
      },
    },

    show: {
      width: widthValue,

      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,

        stiffness: 100,
      },
    },
  };
  return (
    <div className="m-2 w-full p-5">
      <m.div
        className="md:w-9/12 rounded-full  h-2 border-[1px] border-white w-full"
        variants={item}
        initial="hidden"
        animate="show"
      >
        <m.div
          style={{ background: skill.colors }}
          className={`rounded-full  h-full`}
          variants={variants}
          initial="hidden"
          animate="show"
        ></m.div>
      </m.div>
      <span className="text-white text-sm pl-2">{skill.name}</span>
    </div>
  );
};

export default Bar;
