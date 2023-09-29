// import arrowDown from "../../../assets/layout/menu/select.svg";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [availableLanguages] = useState(["ru", "en", "kg"]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  const otherLanguages = availableLanguages.filter(
    (lang) => lang !== selectedLanguage
  );

  const languageLabels = {
    ru: "Ru",
    kg: "Kg",
    en: "En",
  };

  return (
    <div className="relative z-50 text-center bg-transparent focus:outline-none cursor-pointer active:cursor-default mr-[20px]">
      <div
        className={`hover:text-[#88CB02] transition-none duration-500 arrow_down_btn ${
          isMenuOpen ? "after:rotate-180" : ""
        } flex items-center gap-2 text-gray-700`}
        onClick={toggleMenu}
      >
        {languageLabels[selectedLanguage]}
      </div>
      <div
        className={`${
          isMenuOpen ? "opacity-1 z-[-5000] w-16" : "opacity-0 z-[5000] w-0"
        } absolute left-0 p-2 w-16 text-start -translate-x-2 px-10px rounded-[10px] bg-white shadow-md transition-all`}
      >
        {otherLanguages.map((language) => (
          <div
            key={language}
            className="cursor-pointer first:mb-3 first:mt-2 text-xl font-semibold"
            onClick={() => {
              handleLanguageChange(language);
              setIsMenuOpen(false);
            }}
          >
            {languageLabels[language]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
