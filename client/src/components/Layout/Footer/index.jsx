// import { useTranslation } from "react-i18next";
// import facebookLogo_not_active from "../../../assets/images/Footer/facebookLogo_not_active.svg";
// import instagramLogo_not_active from "../../../assets/images/Footer/instagramLogo_not_active.svg";
// import whatsappLogo_not_active from "../../../assets/images/Footer/whatsappLogo_not_active.svg";
// import instagramLogo_active from "../../../assets/images/Footer/instagramLogo_active.svg";
// import facebookLogo_active from "../../../assets/images/Footer/facebookLogo_active.svg";
// import whatsappLogo_active from "../../../assets/images/Footer/whatsappLogo_active.svg";
// import Links from "../Links";
// import "./footer.scss";
// import { useState } from "react";
// import Map from "./map";

const Footer = () => {
  // const { t } = useTranslation();

  // const [isFacebookActive, setIsFacebookActive] = useState(false);
  // const [isInstagramActive, setIsInstagramActive] = useState(false);
  // const [isWhatsappActive, setIsWhatsappActive] = useState(false);

  return (
    <h1 className="mt-auto">Все, пусь</h1>
    // <footer className="max-h-screen w-full bg-black bg-opacity-100 text-white text-opacity-100 footer">
    //   <div className="container bg-black">
    //     <div className="md:flex justify-between py-[50px] gap-3">
    //       <div className="md:block flex justify-between">
    //         <ul>
    //           <Links />
    //         </ul>
    //         <div>
    //           <ul className="flex flex-col md:flex-row md:mt-[100px] mt-0 md:gap-[16px] gap-[17px] md:ml-0 ">
    //             <li className="footer_logo">
    //               <a
    //                 href="https://www.facebook.com/aronia.pharm"
    //                 className="flex items-center"
    //               >
    //                 <img
    //                   src={
    //                     isFacebookActive
    //                       ? facebookLogo_active
    //                       : facebookLogo_not_active
    //                   }
    //                   alt=""
    //                   className="hidden md:block transition duration-300 transform hover:scale-105"
    //                   onMouseEnter={() => setIsFacebookActive(true)}
    //                   onMouseLeave={() => setIsFacebookActive(false)}
    //                 />
    //                 <img
    //                   src={facebookLogo_active}
    //                   alt=""
    //                   className="block md:hidden transition duration-300 transform hover:scale-105"
    //                 />
    //               </a>
    //             </li>
    //             <li className="footer_logo">
    //               <a
    //                 href="https://www.instagram.com/aronia_pharm_/"
    //                 className="flex items-center"
    //               >
    //                 <img
    //                   src={
    //                     isInstagramActive
    //                       ? instagramLogo_active
    //                       : instagramLogo_not_active
    //                   }
    //                   alt=""
    //                   className="hidden md:block transition duration-300 transform hover:scale-105"
    //                   onMouseEnter={() => setIsInstagramActive(true)}
    //                   onMouseLeave={() => setIsInstagramActive(false)}
    //                 />
    //                 <img
    //                   src={instagramLogo_active}
    //                   alt=""
    //                   className="block md:hidden transition duration-300 transform hover:scale-105"
    //                 />
    //               </a>
    //             </li>
    //             <li className="footer_logo">
    //               <a
    //                 href="https://api.whatsapp.com/send/?phone=996505653333&text&type=phone_number&app_absent=0"
    //                 className="flex items-center"
    //               >
    //                 <img
    //                   src={
    //                     isWhatsappActive
    //                       ? whatsappLogo_active
    //                       : whatsappLogo_not_active
    //                   }
    //                   alt=""
    //                   className="hidden md:block transition duration-300 transform hover:scale-105"
    //                   onMouseEnter={() => setIsWhatsappActive(true)}
    //                   onMouseLeave={() => setIsWhatsappActive(false)}
    //                 />
    //                 <img
    //                   src={whatsappLogo_active}
    //                   alt=""
    //                   className="block md:hidden transition duration-300 transform hover:scale-105"
    //                 />
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>

    //       <div className="mb-[6px]">
    //         <p className="mt-[36px] md:mt-0">{t("sections.contacts.title")}</p>
    //         <a
    //           href="tel:+996 312 653333"
    //           className="md:text-white text-[#88CB02]"
    //         >
    //           +996 312 653333
    //         </a>
    //         <br />
    //         <a
    //           href="tel:+996 505 653333"
    //           className="md:text-white text-[#88CB02]"
    //         >
    //           +996 505 653333{" "}
    //         </a>
    //         <p className="mt-[24px] md:mt-[24px]">
    //           {t("sections.title.emailAddress")}
    //         </p>
    //         <a
    //           href="mailto:aronia_2016@mail.ru"
    //           className="md:text-white text-[#88CB02]"
    //         >
    //           aronia_2016@mail.ru
    //         </a>
    //         <p className="mt-[24px] md:mt-[24px]">
    //           {t("sections.title.schedule")}
    //         </p>
    //         <p>
    //           {t("sections.title.workingday")}
    //           <br />
    //           {t("sections.title.saturday")}
    //         </p>
    //       </div>
    //       <Map />
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
