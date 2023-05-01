import React from "react";
import samy from "../.././assets/sampic.png";
import Button from "../Button/index";

const Home = () => {
  return (
    <section className="bg-blue">
      <header
        className="text-white flex justify-between  items-center p-5 text-xl font-serif
      "
      >
        <h1 className="">Egajivwie samuel</h1>
        <ul className="flex justify-around md:w-[380px] font-thin">
          <li className="menu">Home</li>
          <li className="menu">About</li>
          <li className="menu">Projects</li>
          <li className="menu">Skills</li>
          <li className="menu">Contact</li>
        </ul>
      </header>

      {/* intro and image section */}
      <div className="flex flex-col justify-center">
        <div className="flex justify-center  w-full  text-white mt-5">
          <div className="flex justify-around items-center  w-full ">
            <div className="flex md:flex-col">
              <span className=" mb-5">
                <p className="text-4xl tracking-wide">
                  I am the guy you come to <br /> when you
                  <strong> need things done</strong>.
                </p>
              </span>
              <span className="mt-5 ">
                <p className="text-md tracking-wide ">
                  I'm Egajivwie samuel an experienced UI/UX designer
                  <br /> with 2 years of experience in the design <br />
                  industry .Let's make awesome stuff together!
                </p>
              </span>
            </div>

            <div className="img-container">
              <img src={samy} alt="profile-img" className="img" />
            </div>
          </div>
        </div>
        <div className="flex md:w-[498px] justify-center mb-3">
          <Button
            text={"See My Works"}
            className="text-blue bg-white border-2 p-2 rounded-md w-[130px] m-2"
          />
          <Button
            text={"About Me"}
            className="text-white  border-[1px] border-white  p-2 rounded-md w-[130px] bg-transparent  m-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
