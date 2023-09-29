import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link as SLink } from "react-scroll";
import Navbar from "./Navbar";
import Menu from "./Menu";
import burger from "../../../assets/layout/burger.svg";
import baigeldy_logo from "../../../assets/main/title/png-transparent-colorful-letters-b-letter-colour-b-thumbnail-removebg-preview.png";
import LanguageSelector from "./LanguageSelect";
import "./header.scss";
import ThemeChangeBtn from "./ChangeTheme";

const Header = (props) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const headerRef = useRef(null);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 55) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen, headerRef]);

  return (
    <>
      <header
        ref={headerRef}
        className={
          "header shadow-lg items-center max-h-full min-w-full flex justify-between sticky top-0 transition-all z-[100000000] " +
          (props.darkThemeEnabled ? "shadow-2xl" : "") +
          (isScrolled ? " h-[60px] sm:h-[58px]" : " h-[82px]")
        }
      >
        <div
          className="flex items-center justify-between container bg-white h-full"
          style={{ overflow: "visible" }}
        >
          <SLink to="aboutme" smooth className="h-full">
            <img
              src={baigeldy_logo}
              alt="logo letter"
              className="max-w-8 sm:max-w-12 -translate-x-3 h-[90%] sm:max-h-full object-contain"
            />
          </SLink>
          <div className="flex items-center lg:justify-between justify-end max-w-[837px] md:w-[837px] text-xl sm:text-lg h-full">
            <Navbar />
            <LanguageSelector />
            <ThemeChangeBtn {...props} />
            <SLink to="contact" smooth>
              <button className=" bg-lime-500 px-[30px] text-lg h-[41px] w-[145px] rounded-full items-center justify-center text-white my-[16px] hidden lg:flex hover:bg-[#9ED434] transition-all">
                {t("links.f")}
              </button>
            </SLink>
            <button className="lg:hidden ml-[38px]" onClick={toggleMenu}>
              <img
                src={burger}
                alt="burger menu"
                className="max-w-full h-auto"
              />
            </button>
          </div>
        </div>
      </header>
      <Menu menuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu} />
    </>
  );
};

export default Header;
