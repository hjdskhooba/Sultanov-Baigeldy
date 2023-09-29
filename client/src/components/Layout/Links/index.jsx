import { useTranslation } from "react-i18next";
import { Link as Slink } from "react-scroll";

const Links = ({ menu, handleCloseMenu }) => {
  const { t } = useTranslation();
  return (
    <>
      <li className={`header__link ${menu && "text-[20px]"}`}>
        <Slink to="aboutme" duration={420} smooth onClick={handleCloseMenu}>
          {/* {t("links.o")} */}
          Обо мне
        </Slink>
      </li>
      <li className={`header__link ${menu && "text-[20px] "}`}>
        <Slink to="skills" duration={420} smooth onClick={handleCloseMenu}>
          {/* {t("links.p")} */}
          Навыки
        </Slink>
      </li>
      <li className={`header__link ${menu && "text-[20px] "}`}>
        <Slink to="projects" duration={420} smooth onClick={handleCloseMenu}>
          {/* {t("links.s")} */}
          Проекты
        </Slink>
      </li>
      <li className={`header__link ${menu && "text-[20px] "}`}>
        <Slink to="experience" duration={420} smooth onClick={handleCloseMenu}>
          {/* {t("links.s")} */}
          Опыт работы
        </Slink>
      </li>
      {menu && (
        <li className="header__link">
          <Slink
            to="experience"
            duration={420}
            smooth
            onClick={handleCloseMenu}
          >
            {/* {t("links.f")} */}
            Контакты
          </Slink>
        </li>
      )}
    </>
  );
};

export default Links;
