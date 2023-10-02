import { useTranslation } from "react-i18next";
import closeIcon from "../../../assets/images/layout/menu/x.svg";
import Links from "../Links";

const Menu = ({ menuOpen, handleCloseMenu }) => {
  const { t } = useTranslation();
  return (
    menuOpen && (
      <div
        className={`fixed rounded-lg bg-white shadow-md lg:hidden right-4 top-[22vh] h-fit w-fit leading-7 p-[24px] transition-transform z-50 ${
          menuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <h3 className="text-orange-500 text-[28px] mb-[20px]">{t("hm")}</h3>
        <ul className="flex lg:flex-row flex-col gap-[18px] text-gray-700">
          <Links handleCloseMenu={handleCloseMenu} menu={true} />
        </ul>
        <button className="z-50 lg:hidden absolute" onClick={handleCloseMenu}>
          <img
            className="top-[27px] fixed right-[16px]"
            src={closeIcon}
            alt="close menu"
          />
        </button>
      </div>
    )
  );
};

export default Menu;
