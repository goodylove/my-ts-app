import Button from "./../Button/index";
import { ImTwitter } from "react-icons/im";

const Contact = () => {
  return (
    <section className="bg-blue p-3">
      <div className="flex justify-center m-2">
        <Button
          text={"Skill"}
          className="text-white  border-[1px] border-white  p-2 rounded-md w-[130px] bg-transparent  m-2"
        />
      </div>
      <div>
        <h2>Contact Infomation</h2>
        <ul>
          <li>+2348182342665</li>
          <li>Egajivwiesamuel123@gmail.com</li>
          <li>Egajivwie Samuel</li>
          <li>samuel akpevwe</li>
          <li>
            <a href="https://twitter.com/@akpevwe102">
              <ImTwitter />
              @akpevwe102
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
