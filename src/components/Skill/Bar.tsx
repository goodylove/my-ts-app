type BarProps = {
  skill: {
    name: string;
    level: string;
    colors: string;
  };
};

const Bar = ({ skill }: BarProps) => {
  return (
    <div className="m-2 w-full">
      <div className="md:w-9/12 rounded-full  h-2 border-[1px] border-white w-full">
        <div
          style={{ width: skill.level, background: skill.colors }}
          className={`rounded-full  h-full`}
        ></div>
      </div>
      <span className="text-white text-sm pl-2">{skill.name}</span>
    </div>
  );
};

export default Bar;
