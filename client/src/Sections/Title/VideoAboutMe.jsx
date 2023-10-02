import playBtn from "../../assets/images/main/title/playbtn.svg";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./videoViewer.module.scss";
import "plyr/dist/plyr.css";
import Plyr from "plyr";

const YouTubeVideo = () => {
  const videoId1 = "UXLkfG_FYmY";
  const [playButton, setPlayButton] = useState({
    class: "plyr-btn-block",
  });
  const { t } = useTranslation();
  const videoRef1 = useRef(null);
  const playerRef1 = useRef(null);
  useEffect(() => {
    if (videoId1) {
      playerRef1.current = new Plyr(videoRef1.current, {
        controls: [],
        muted: false,
      });
    }
    return () => {
      if (playerRef1) {
        playerRef1.current.destroy();
      }
    };
  }, [videoId1]);

  const playVideo = (player) => {
    if (player) {
      player.play();
    }
  };
  const stopVideo = (player) => {
    if (player) {
      player.stop();
    }
  };
  return (
    <div className="overflow-hidden min-w-[50%]">
      <div className={style.videos}>
        <div
          onClick={() => {
            playButton.class == "plyr-btn-block"
              ? playVideo(playerRef1.current)
              : stopVideo(playerRef1.current);
            setPlayButton({
              ...playButton,
              class:
                playButton.class == "plyr-btn-block"
                  ? "plyr-btn-hidden"
                  : "plyr-btn-block",
            });
          }}
          className={style["video-div"]}
        >
          <div
            ref={videoRef1}
            className={style.videoWrapper}
            id="player"
            style={{ width: "100%", height: "100%" }}
          >
            <iframe
              title="YouTube Video 1"
              className={style.vide}
              src={`https://www.youtube.com/embed/${videoId1}`}
              allowFullScreen
              width="100%"
              height="100%"
            ></iframe>
            <button className={style[playButton.class]} aria-label="Play">
              <img src={playBtn} alt="" />
            </button>
          </div>
          <p className={style.video__title}>{t("sections.video.title")}</p>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideo;
