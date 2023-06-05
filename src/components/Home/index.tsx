import React from "react";
import samy from "../.././assets/sampic.png";
import Button from "../Button/index";

const Home = () => {
  return (
    <section className="bg-blue p-5">
      <header
        className="text-white flex justify-center  md:justify-between  items-center p-5 text-xl font-serif
      "
        id="top"
      >
        <h1 className="">Egajivwie samuel</h1>
        <ul className="md:flex justify-around md:w-[380px] font-thin hidden">
          <li className="menu">
            <a href="#">Home</a>
          </li>
          <li className="menu">
            <a href="#about">About</a>
          </li>
          <li className="menu">
            <a href="#projects">Projects</a>
          </li>
          <li className="menu">
            <a href="#skills">Skills</a>
          </li>
          <li className="menu">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>

      {/* intro and image section */}
      <div className="flex flex-col justify-center">
        <div className="flex justify-center  w-full  text-white mt-5">
          <div className="flex md:justify-around items-center  w-full flex-col-reverse md:flex-row ">
            <div className="flex flex-col  ">
              <span className=" md:mb-5 text-center m-3 ">
                <p className="md:text-4xl md:tracking-wide text-2xl pl-3 pr-3 text-center">
                  I am the guy you come to <br /> when you
                  <strong> need things done</strong>.
                </p>
              </span>
              <span className="md:mt-5  text-center mt-3 mb-5">
                <p className="text-md md:tracking-wide text-center ">
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
          <a href="#projects">
            <Button
              text={"See My Works"}
              className="text-blue bg-white border-2 p-2 rounded-md w-[130px] m-2"
            />
          </a>
          <a href="#about">
            <Button
              text={"About Me"}
              className="text-white  border-[1px] border-white  p-2 rounded-md w-[130px] bg-transparent  m-2"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
