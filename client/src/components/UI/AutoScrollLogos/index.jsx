import { getPhotosAPI } from "../../../redux/slices/swiper";
import { useDispatch, useSelector } from "react-redux";
import React, { useRef, useEffect } from "react";
import styles from "./logos.module.scss";
import Loader from "../Loader/Loader";

const AutoScrollingLogos = () => {
  const marqueeRef = useRef(null);
  const dispatch = useDispatch();
  const { logos, isLoading } = useSelector((state) => state.swiper);
  useEffect(() => {
    const marqueeElement = marqueeRef?.current;
    const marqueeGroupElement = marqueeElement?.querySelector(".marquee__group");
    const marqueeContentWidth = marqueeGroupElement?.offsetWidth;
    const marqueeContainerWidth = marqueeElement?.offsetWidth;
    const scrollDistance = marqueeContentWidth - marqueeContainerWidth;
    marqueeGroupElement?.style?.setProperty(
      "--scroll-end",
      `-${scrollDistance}px`
    );
  }, [logos]);
  useEffect(() => {
    dispatch(getPhotosAPI());
  }, [dispatch]);
  return isLoading ? <Loader/> : (
    <div
      className={`marquee ${styles.marquee}`}
      ref={marqueeRef}
      data-aos="fade-left"
    >  
      <div className={`marquee__group ${styles["marquee__group"]}`}>
        {[...logos, ...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo.image}
            alt="logo img"
            className={`h-14 w-40 sm:h-max sm:w-max mx-10 object-contain ${styles.marquee__logo}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollingLogos;
