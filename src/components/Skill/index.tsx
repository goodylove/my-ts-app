import Button from "../Button";
import { skills } from "../../Data";
import Bar from "./Bar";

const skill = () => {
  return (
    <section className="bg-blue flex justify-center w-full" id="skills">
      <div className="w-[80%] flex flex-col justify-center ">
        <div className="flex justify-center m-3">
          <Button
            className="text-white  border-[1px] border-white  p-1 rounded-md w-[100px] bg-transparent  m-2"
            text="Skill"
          />
        </div>
        <div className="grid grid-cols-2 content-center gap-4">
          {skills.map((skill, index) => {
            return <Bar skill={skill} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default skill;
