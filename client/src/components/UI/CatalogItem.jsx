import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ProjectCard = ({ arr, style, pair, index }) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={
        arr?.length === 2
          ? style.itemcf
          : arr?.length === 1
          ? style.itemcs
          : style.itemc
      }
      key={index}
    >
      <div className={pair?.[0]?.id ? style.item : "hidden"}>
        <div>
          <img className={style.img} src={pair?.[0]?.image} alt="" />
        </div>
        <div className={style.block}>
          <div className="over">
            <h3 className={style.h}>
              {pair?.[0]?.kg
                ? pair?.[0]?.title
                : [
                    i18n.language == "ru"
                      ? pair?.[0]?.title
                      : i18n.language == "en"
                      ? pair?.[0]?.title_EN
                      : pair?.[0]?.title_KY,
                  ]}
            </h3>
            <p className={style.p}>
              {pair?.[0]?.kg
                ? pair?.[0]?.description
                : [
                    i18n.language == "ru"
                      ? pair?.[0]?.description
                      : i18n.language == "en"
                      ? pair?.[0]?.description_EN
                      : pair?.[0]?.description_KY,
                  ]}
            </p>
          </div>
          <div className="mt-[8px]">
            <Link to={`/product/${pair?.[0]?.id}`}>
              <input
                className={style.btnone}
                type="button"
                value={t("sections.podk")}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className={pair?.[1]?.id ? style.item : "hidden"}>
        <div>
          <img className={style.img} src={pair?.[1]?.image} alt="" />
        </div>
        <div className={style.block}>
          <div className="over">
            <h3 className={style.h}>
              {pair?.[1]?.kg
                ? pair?.[1]?.title
                : [
                    i18n.language == "ru"
                      ? pair?.[1]?.title
                      : i18n.language == "en"
                      ? pair?.[1]?.title_EN
                      : pair?.[1]?.title_KY,
                  ]}
            </h3>
            <p className={style.p}>
              {pair?.[1]?.kg
                ? pair?.[1]?.description
                : [
                    i18n.language == "ru"
                      ? pair?.[1]?.description
                      : i18n.language == "en"
                      ? pair?.[1]?.description_EN
                      : pair?.[1]?.description_KY,
                  ]}
            </p>
          </div>
          <div className="mt-[8px]">
            <Link to={`/product/${pair?.[1]?.id}`}>
              <input
                className={style.btnone}
                type="button"
                value={t("sections.podk")}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
