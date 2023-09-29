// import playBtn from "../../assets/Buttons/Button (1).svg";
// import { useEffect, useRef, useState } from "react";
// import { getVideosAPI } from "../../redux/slices/videos";
// import { useTranslation } from "react-i18next";
// import style from "./workedCompanies.module.scss";
// import { useDispatch, useSelector } from "react-redux";
// import "plyr/dist/plyr.css";
// import Plyr from "plyr";
// import Loader from "../../components/UI/Loader/Loader";

const WorkedCompanies = () => {
  //
  //
  // И ДОБАВИТЬ СЛЕЖКУ ЗА СКРОЛЛОМ КАК У ДЖЕКА !!!
  //
  //

  // const { videoId1, videoId2, isLoading } = useSelector(
  //   (state) => state.videos
  // );
  // const dispatch = useDispatch();
  // const [playButton, setPlayButton] = useState({
  //   one: "plyr-btn-block",
  //   two: "plyr-btn-block",
  // });
  // const { t } = useTranslation();
  // const videoRef1 = useRef(null);
  // const playerRef1 = useRef(null);
  // const videoRef2 = useRef(null);
  // const playerRef2 = useRef(null);
  // useEffect(() => {
  //   if (videoId1 && videoId2) {
  //     playerRef1.current = new Plyr(videoRef1.current, {
  //       controls: [],
  //       muted: false,
  //     });
  //     playerRef2.current = new Plyr(videoRef2.current, {
  //       controls: [],
  //       muted: false,
  //     });
  //   }
  //   return () => {
  //     if (playerRef1 && playerRef2) {
  //       playerRef1.current.destroy();
  //       playerRef2.current.destroy();
  //     }
  //   };
  // }, [videoId1, videoId2]);
  // useEffect(() => {
  //   dispatch(getVideosAPI());
  // }, [dispatch]);
  // const playVideo = (player) => {
  //   if (player) {
  //     player.play();
  //   }
  // };
  // const stopVideo = (player) => {
  //   if (player) {
  //     player.stop();
  //   }
  // };
  return (
    <></>
    //   <div className="container">
    //     {isLoading ? (
    //       <Loader />
    //     ) : (
    //       <div className={style.videos}>
    //         <div
    //           onClick={() => {
    //             playButton.one == "plyr-btn-block"
    //               ? playVideo(playerRef1.current)
    //               : stopVideo(playerRef1.current);
    //             setPlayButton({
    //               ...playButton,
    //               one:
    //                 playButton.one == "plyr-btn-block"
    //                   ? "plyr-btn-hidden"
    //                   : "plyr-btn-block",
    //             });
    //           }}
    //           className={style["video-div"]}
    //         >
    //           <div
    //             ref={videoRef1}
    //             className={style.videoWrapper}
    //             id="player"
    //             style={{ width: "100%" }}
    //           >
    //             <iframe
    //               title="YouTube Video 1"
    //               className={style.vide}
    //               src={`https://www.youtube.com/embed/${videoId1}`}
    //               allowFullScreen
    //               width="100%"
    //               height="100%"
    //             ></iframe>
    //             <button className={style[playButton.one]} aria-label="Play">
    //               <img src={playBtn} alt="" />
    //             </button>
    //           </div>
    //           <p className={style.video__title}>{t("sections.video.title")}</p>
    //         </div>
    //         <br />
    //         <div
    //           onClick={() => {
    //             playButton.two == "plyr-btn-block"
    //               ? playVideo(playerRef2.current)
    //               : stopVideo(playerRef2.current);
    //             setPlayButton({
    //               ...playButton,
    //               two:
    //                 playButton.two == "plyr-btn-block"
    //                   ? "plyr-btn-hidden"
    //                   : "plyr-btn-block",
    //             });
    //           }}
    //           className={style["video-div"]}
    //         >
    //           <div
    //             ref={videoRef2}
    //             className={style.videoWrapper}
    //             id="player"
    //             style={{ width: "100%" }}
    //           >
    //             <iframe
    //               title="YouTube Video 2"
    //               src={`https://www.youtube.com/embed/${videoId2}`}
    //               className={style.vide}
    //               allowFullScreen
    //               width="100%"
    //               height="100%"
    //             ></iframe>
    //             <button className={style[playButton.two]} aria-label="Play">
    //               <img src={playBtn} alt="" />
    //             </button>
    //           </div>
    //           <p className={style.video__title}>{t("sections.video.text")}</p>
    //         </div>
    //       </div>
    //     )}
    // </div>
  );
};

export default WorkedCompanies;
