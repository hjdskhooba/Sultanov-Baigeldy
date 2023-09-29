import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import i18n from "i18next";
import translationEN from "/public/locales/en/translationEN.json";
import translationRU from "/public/locales/ru/translationRU.json";
import translationKG from "/public/locales/kg/translationKG.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  kg: {
    translation: translationKG,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbacking: "ru",
    resources,
    debug: false,
    lng: "ru",
    detection: {
      order: ["localStorage", "cookie"],
      cache: ["cookie"],
    },
    interpolation: { escapeValue: false },
    lng: localStorage.getItem("i18nextLng") || "ru",
  });

export default i18n;
