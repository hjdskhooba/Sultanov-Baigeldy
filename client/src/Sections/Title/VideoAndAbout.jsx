import { useTranslation } from "react-i18next";
import VideoAboutMe from "./VideoAboutMe.jsx";
import "./SwiperAbout.scss";

const VideoAndAbout = () => {
  const { t, i18n } = useTranslation();

  return (
    <section>
      <section className="container flex-col md:flex-row overflow-hidden">
        <div className="mt-[56px] flex-col md:flex-row ">
          <div className="flex justify-between md:flex-row lg:w-full items-center gap-3">
            <h3 className="font-[nunito] text-black text-[28px] sm:text-[40px] font-medium">
              {t("links.o")}
            </h3>
            {i18n.language === "kg" ? (
              <div className="mb-[15px] relative">
                <span className="pl-[5.3em] sm:pl-[2.8em] lg:pl-[120px] text-[20px] sm:text-3xl">
                  2016
                </span>
                <h3 className="text-[16px] lg:text-xl tracking-tight justify-end text-black max-w-full">
                  {t("sections.about.workingSince")}
                </h3>
              </div>
            ) : (
              <div className="relative mb-[15px]">
                <h3 className="font-light md:text-xl text-black max-w-full">
                  {t("sections.about.workingSince")}
                </h3>
                <span className="absolute right-0 text-[20px] font-normal md:text-3xl">
                  2016
                </span>
              </div>
            )}
          </div>

          <div className="flex overflow-hidden md:gap-[20px] justify-between rounded-md mt-3 flex-col lg:flex-row max-w-full ">
            {/* <div className="container">
              <div className="h-full">
                <div
                  onClick={() => {
                    playButton == "plyr-btn-block"
                      ? playVideo(playerRef.current)
                      : stopVideo(playerRef.current);
                    setPlayButton(
                      playButton == "plyr-btn-block"
                        ? "plyr-btn-hidden"
                        : "plyr-btn-block"
                    );
                  }}
                  className={style["video-div"]}
                >
                  <div
                    ref={videoRef}
                    id="player"
                    style={{
                      width: "100%",
                      maxHeight: "100%",
                      overflow: "hidden",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <iframe
                      title="YouTube Video"
                      className={style.vide}
                      src={`https://www.youtube.com/embed/${videoId}`}
                      allowFullScreen
                      width="100%"
                      height="100%"
                    ></iframe>
                    <button className={style[playButton]} aria-label="Play">
                      <img src={playBtn} alt="plyr-btn" />
                    </button>
                  </div>
                  <p className={style.video__title}>
                    {t("sections.video.title")}
                  </p>
                </div>
              </div>
            </div> */}
            <VideoAboutMe />
            <div className="flex-col md:flex-row">
              <p
                className={`lg:max-w-[620px] w-[100%] md:text-[20px] text-[18px] md:leading-[1.7rem] dz ${
                  i18n.language === "ru" && "ru"
                }`}
              >
                {t("sections.about.descAronia")}
              </p>
              {i18n.language !== "ru" && <br />}
              <p className="lg:max-w-[620px] w-[100%] md:text-[20px] text-[18px] leading-6 dz">
                {t("sections.about.secondDescAronia")}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <MyFrontendSkills /> */}
    </section>
  );
};

export default VideoAndAbout;
