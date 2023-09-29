import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getProductByIdKg,
  getProductsList,
  getTitles,
} from "../../redux/slices/products";
import { useTranslation } from "react-i18next";

const OtherProducts = ({ isProduct, style }) => {
  const navigate = useNavigate();
  const { titles, productsList, count } = useSelector(
    (state) => state.products
  );
  const [update, setUpdate] = useState(false);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);
  useEffect(() => {
    if (i18n.language === "kg") {
      setUpdate(!update);
    } else {
      dispatch(getProductsList());
    }
  }, [i18n.language]);
  useEffect(() => {
    if (productsList?.length === count) {
      productsList?.forEach((item) => {
        let kyP =
          item?.title_KY == null ||
          item?.title_KY?.length <= 5 ||
          item?.description_KY == null ||
          item?.description_KY?.length <= 5;
        if (i18n.language === "kg" && kyP) {
          dispatch(getProductByIdKg(item?.id));
        }
      });
    }
  }, [productsList?.length, update]);
  useEffect(() => {
    if (productsList?.length === count) {
      dispatch(getTitles(i18n.language));
    }
  }, [productsList]);
  return (
    <div className={isProduct ? "hidden" : style.product__other}>
      <h3 className={style.product__other_title}>
        {t("sections.product_page.frequentlySellingProducts")}
      </h3>
      <div className={style.product__other_list_p}>
        <div className={style.product__other_list}>
          {titles?.map((i) => (
            <div
              key={i?.id}
              onClick={() => {
                navigate("/product/" + i?.id);
              }}
              className={style.product__other_item}
            >
              {i?.title?.slice(0, 20)}
              ..
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherProducts;
