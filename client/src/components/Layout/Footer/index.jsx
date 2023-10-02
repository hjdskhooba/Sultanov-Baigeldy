import telegramSvg from "../../../assets/images/layout/telegram.svg";
import linkedInSvg from "../../../assets/images/layout/linkedIn.svg";
import githubSvg from "../../../assets/images/layout/github.svg";
import phoneSvg from "../../../assets/images/layout/phone.svg";
import emailSvg from "../../../assets/images/layout/email.svg";
import BLetter from "../../UI/BLetter";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="max-h-screen w-full bg-opacity-100 text-white text-opacity-100 overflow-hidden">
      <div className="container max-h-20 h-20 bg-black flex items-center justify-between">
        <BLetter />
        <ul className="flex flex-col md:flex-row md:gap-[16px] gap-[17px] h-full py-3 overflow-visible">
          <li className="footer_logo">
            <a
              target="_blank"
              name="linkedIn"
              href="https://www.linkedin.com/in/baigeldy-abdyhashymov-549467257/"
            >
              <img
                alt="LinkedIn"
                src={linkedInSvg}
                className="-translate-y-1 hover:scale-105 h-full"
              />
            </a>
          </li>
          <li className="footer_logo">
            <a
              target="_blank"
              name="telegram"
              href="https://t.me/baigeldysultanov"
            >
              <img
                alt="telegram"
                src={telegramSvg}
                className="hover:scale-105 h-full"
              />
            </a>
          </li>
          <li className="footer_logo">
            <a
              target="_blank"
              name="github"
              href="https://github.com/hjdskhooba"
            >
              <img
                alt="github"
                src={githubSvg}
                className="  hover:scale-105 h-full"
              />
            </a>
          </li>
        </ul>

        <div className="mb-[6px] h-20 flex">
          <a
            target="_blank"
            name="phone"
            href="tel:+996 772 72 07 72"
            className="md:text-white text-[#88CB02]"
          >
            <img src={phoneSvg} alt="phone" className="h-full w-auto" />
          </a>
          <a
            target="_blank"
            name=""
            href="mailto:sultanboga4@gmail.com"
            className="md:text-white text-[#88CB02]"
          >
            <img src={emailSvg} alt="email" className="h-full w-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
