import React from "react";
import Button from "../Button/button";

const About = () => {
  return (
    <section className="relative m-5  p-2" id="about">
      <div className="flex justify-center m-2">
        <Button className=" md:border-[1px] border-blue  rounded p-2 font-bold text-blue w-28">
          About
        </Button>
      </div>
      <div className="flex justify-center p-2">
        <div className="absolute bg-gray h-40 w-40  top-[50%] rounded-full -z-10"></div>
        <div className="absolute bg-gray h-10 w-10  top-0  left-9  md:left-40  rounded-full -z-10"></div>
        <p className="md:w-[80%] text-blue font-bold text-center leading-8">
          I am a UI/UX designer with 2 years of experience in the design
          industry.I good at at create easy-to- use and aesthetically pleasant
          interface by analyzing the users' needs and researching the best ways
          to create usable and successful products. User-centered designs come
          from a user-centered workflow: as a UI/UX Designer I Understand the
          importance of data analysis, research wireframing prototyping. and
          usability testing .Pixels aren't but a small yet fascinating part of
          Product Design. Project Skills Adobe Page Maker Adobe Photoshop
          Microsoft Word Office Adobe Illustrator Microsoft Excel Office Figma
          Corel Draw Adobe XD Contact. Let's make awesome stuff together!
          {/* Contact Information Contact me for a job well done +2348182342665
          Egajivwiesamuel123@gmail.com Egajivwie Samuel samuel akpevwe
          @akpevwe102 */}
        </p>
        <div className="absolute bg-gray top-2 left-[-70px] h-[200px] w-[200px] rounded-full -z-10"></div>
        <div className="absolute bg-gray top-60 left-[40px]  h-20 w-20 rounded-full -z-10"></div>
        <div className="absolute bg-gray top-40 right-0  h-20 w-20 rounded-full -z-10"></div>
      </div>
    </section>
  );
};

export default About;
