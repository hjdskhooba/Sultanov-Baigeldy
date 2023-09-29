import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import baigeldy from "../../assets/main/title/abdyhashymov.jpg";
import "./SwiperAbout.scss";

const Title = () => {
  const { t } = useTranslation();
  return (
    <div className="ifda">
      <section className="flex h-max container items-center flex-col lg:flex-row gap-[24px]">
        <div className="mt-[105px] mb-[13px] w-full text-left mr-auto md:mr-0 fsadj">
          <h6 className="font-bold font-[cormorant] w-full sm:text-[54px] text-[32px] leading-tight mb-3">
            {/* {t("sections.title.title")} */}
            Hello I am Baigeldy !
          </h6>
          <h6 className="sm:text-[32px] text-[20px] font-semibold pt-[12px]">
            {/* {t("sections.title.desc")} */}
            FullStack Web-Developer
          </h6>
          <ScrollLink to="contact" smooth>
            <button
              className="mt-[16px] h-12 w-full text-[18px] lg:w-[413px]
            bg-lime-500 rounded-full md:items-center text-center 
            text-white hover:bg-[#9ED434] transition-all"
            >
              {/* {t("sections.title.btn")} */}
              Contact
            </button>
          </ScrollLink>
        </div>
        <img
          src={baigeldy}
          className="w-[400px] object-cover rounded-[50%] max-h-[270px] pt-10 pr-14"
          alt=""
        />
      </section>
    </div>
  );
};

export default Title;
