import AutoScrollLogos from "../../components/UI/AutoScrollLogos";
import { useTranslation } from "react-i18next";
import "swiper/css/pagination";
import "./banner.scss";
import "swiper/css";

const MyFrontendSkills = () => {
  const { t } = useTranslation();
  return (
    <div className="container mb-10">
      <h2 className="h-2 mb-20 mt-5">
        {/* {t("sections.title.myFrontSkills")} */}
        My Skills
        </h2>
      <AutoScrollLogos />
    </div>
  );
};
export default MyFrontendSkills;
