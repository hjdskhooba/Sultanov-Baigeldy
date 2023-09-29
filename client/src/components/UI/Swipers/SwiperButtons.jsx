import { useSwiper } from "swiper/react";

const SwiperButtons = ({ activeSlide = 0, slidesLength = "f" }) => {
    const swiper = useSwiper();
    return (
        <div className="forel mt-0 grid">
            <div className="forel mr-0 ml-auto">
                <button
                    className={`${activeSlide === 0 ? " swiper2-button-disabled " : ""} ${
                        slidesLength !== "f" ? " swiper2-button-prev " : ""
                    } ${activeSlide == slidesLength - 1 ? " nana " : ""} swiper-button-one swiper-button-one cursor-pointer`}
                    onClick={() => swiper.slidePrev()}
                >
                    <svg
                        className="svgshka1"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 12C20 11.4477 19.5523 11 19 11L5 11C4.44771 11 4 11.4477 4 12C4 12.5523 4.44771 13 5 13L19 13C19.5523 13 20 12.5523 20 12Z"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071C13.0976 19.3166 13.0976 18.6834 12.7071 18.2929L6.41421 12L12.7071 5.70711C13.0976 5.31658 13.0976 4.68342 12.7071 4.29289Z"
                            fill="white"
                        />
                    </svg>
                </button>

                <button
                    className={`${
                        activeSlide == slidesLength - 1 ? " swiper2-button-disabled " : ""
                    } ${
                        slidesLength !== "f" ? " swiper2-button-next " : ""
                    } swiper-button-two cursor-pointer`}
                    onClick={() => swiper.slideNext()}
                >
                    <svg
                        className="svgshka2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4 12C4 11.4477 4.44772 11 5 11L19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13L5 13C4.44772 13 4 12.5523 4 12Z"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SwiperButtons;
