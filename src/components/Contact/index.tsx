import Button from "./../Button/index";
import { ImTwitter } from "react-icons/im";
import { BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="bg-blue p-3 w-full" id="contact">
      <div className="flex justify-center m-2">
        <Button
          text={"Contact"}
          className="text-white  border-[1px] border-white  p-2 rounded-md w-[130px] bg-transparent  m-2"
        />
      </div>
      <div className="flex p-6 justify-center ml-9 ">
        <div className="text-white w-full ">
          <h2 className="my-6 text-[20px] font-[700]">Contact Infomation</h2>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="tel:+2348182342665" className="flex items-center gap-2">
                <BsFillTelephoneFill /> <span>+2348182342665</span>
              </a>
            </li>
            <li>
              <a
                href="mailTo:Egajivwiesamuel123@gmail.com"
                className="flex items-center gap-2"
              >
                <AiOutlineMail />
                <span>Egajivwiesamuel123@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/Egajivwie Samuel"
                className="flex items-center gap-2"
                target="_blank"
              >
                <BsFacebook />
                Egajivwie Samuel
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/samuel-egajivwie-14288a273"
                className="flex items-center gap-2"
                target="_blank"
              >
                <AiFillLinkedin />
                samuel akpevwe
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/@akpevwe102"
                className="flex items-center gap-2"
                target="_blank"
              >
                <ImTwitter />
                @akpevwe102
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
