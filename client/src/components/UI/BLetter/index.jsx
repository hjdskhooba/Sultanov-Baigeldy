import { Link } from "react-scroll";
import BLetterSvg from "../../../assets/images/layout/png-transparent-colorful-letters-b-letter-colour-b-thumbnail-removebg-preview.png";

const BLetter = ({className}) => {
  return (
    <Link to="aboutme" smooth className="h-full">
      <img
        src={BLetterSvg}
        alt="logo letter"
        className={"max-w-8 sm:max-w-12 -translate-x-3 h-[90%] sm:max-h-full object-contain" + className}
      />
    </Link>
  );
};

export default BLetter;
