import SwiperCertificates from "../../components/UI/Swipers/SharedSwiper";
import SwiperButtons from "../../components/UI/Swipers/SwiperButtons";
import style from "./certificates.module.scss";
import { useTranslation } from "react-i18next";
import "./SwiperCertificates.scss";
import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getAwardsAPI } from "../../redux/slices/awards";
// import Loader from "../../components/UI/Loader/Loader";

const Certificates = () => {
  const { certificates } = useSelector((state) => state.awards);
  // const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  // useEffect(() => {
  //   dispatch(getAwardsAPI());
  // }, [dispatch]);
  const slides = certificates?.map((obj) => (
    <div className={style.certificates__slide}>
      <img
        src={obj?.image.replace(/http:/, "https:")}
        alt="Certificate"
        className="w-full h-full object-cover rounded-[10px] xl:max-h-[350px] xl:object-contain"
      />
      <div className={style["certificates__slide-text"]} id="textincs">
        <div className={style["certificates__slide-title"]}>
          {i18n.language == "kg"
            ? obj.title_KY
            : i18n.language == "ru"
            ? obj.title
            : obj.title_EN}
        </div>
        <div className={style["certificates__slide-desc"]}>
          {i18n.language == "kg"
            ? obj?.description_KY
            : i18n.language == "ru"
            ? obj?.description
            : obj?.description_EN}
        </div>
      </div>
    </div>
  ));

  const swiperSettings = {
    speed: 250,
    spaceBetween: 10,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    className: "swiperCertificates",
    loop: certificates?.length >= 10 ? true : false,
    breakpoints: {
      1440: {
        slidesPerView: 5.2,
      },
      1280: {
        slidesPerView: 4.5,
      },
      1024: {
        slidesPerView: 3.5,
      },
      940: {
        slidesPerView: 2.8,
      },
      840: {
        slidesPerView: 2.7,
      },
      800: {
        slidesPerView: 2.6,
      },
      900: {
        slidesPerView: 2.5,
      },
      770: {
        slidesPerView: 2.3,
      },
      700: {
        slidesPerView: 2.2,
      },
      610: {
        slidesPerView: 2.15,
      },
      540: {
        slidesPerView: 2.05,
      },
      490: {
        slidesPerView: 1.6,
      },
      430: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <section className={style.certificates}>
      <h2 className="text-[28px] sm:text-[40px] font-medium mb-9">
        {t("sections.title.certificates")}
      </h2>
      <div className={style.slider}>
        <SwiperCertificates
          swiperSettings={swiperSettings}
          slides={slides}
          SwiperButtons={<SwiperButtons />}
        />
      </div>
    </section>
  );
};

export default Certificates;
