import { useForm, Controller } from "react-hook-form";
import style from "./contactForm.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { $mainApi } from "../../common";

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Поделить на компонентам
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      full_name: "",
      email: "",
      message: "",
      terms_agreement: true,
    },
  });
  const message = watch("message", "");
  const email = watch("email", "");
  const argee = watch("terms_agreement", "");
  const full_name = watch("full_name", "");
  const onSubmit = async (data) => {
    const response = await $mainApi.post("api/messages/", {
        name: data.full_name ? data.full_name : "Ivan Ivanovich Ivanov",
        mail: data.email,
        message: data.message ? data.message : "No message",
        considered: data.terms_agreement,
      })
    };
    if (response.status >= 500 || response.status < 300) {
      reset();
      setIsSubmitted(true);
    } else {
      const errorData = await response.json();
      setIsSubmitted("Error");
      throw new Error(errorData.message || "Something went wrong");
    }
  };

  return (
    <>
      <div className={style.tl}>
        <section className={style.collaborating + " container"}>
          <div className={style["collaborating-left"]}>
            <div className={style.cltop}>
              <h2 className="h-2">{t("sections.contacts.shallWeCooperate")}</h2>
              <p className={style.cldesc}>
                {t("sections.contacts.contactsDesc")}
              </p>
              <a
                href="tel:+996 312 653333"
                className="md:text-white text-[#88CB02]"
              >
                <b>+996 312 653333</b>
              </a>
            </div>
            {i18n.language === "kg" ? (
              <div className={style.clbottomKG}>
                {t("sections.contacts.weWillContactYouDuringtheDay")}
              </div>
            ) : (
              <div className={style.clbottom}>
                {t("sections.contacts.weWillContactYouDuringtheDay")}
              </div>
            )}
          </div>
          <form
            className={`${style["collaborating-form"]} ${
              isSubmitted && style.submitted
            }`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={style.ff}>
              <div className="mb-4">
                <label htmlFor="full_name" className={style.cflabel}>
                  {t("sections.contacts.fullName")}
                </label>
                <Controller
                  name="full_name"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="text"
                      id="full_name"
                      placeholder={t("sections.contacts.enterYourFullName")}
                      {...field}
                      maxLength={127}
                      className={style.cfinput}
                    />
                  )}
                />
                {full_name.length == 127 ? (
                  <p className="text-[#EF9761] absolute h-0 overflow-visible">
                    {t("sections.contacts.messagecharacterLimit")}
                  </p>
                ) : full_name.length ? (
                  <p className="text-gray-300 absolute  h-0 overflow-visible">
                    {t(`sections.contacts.quantitySymbols`)} {full_name.length}
                    {t("sections.contacts.from")} 127
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className={style.cflabel + " pl-1"}>
                  E-mail*
                </label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: t("sections.contacts.emailIsRequired"),
                    pattern: {
                      message: t("sections.contacts.invalideEmail"),
                      value: /^[^ ]+@[^ ]+\.[a-z]{2,100}$/,
                    },
                  }}
                  render={({ field }) => (
                    <input
                      type="text"
                      maxLength={127}
                      placeholder={t("sections.contacts.enterEmail")}
                      id="email"
                      {...field}
                      className={style.cfinput}
                    />
                  )}
                />
                {errors.email ? (
                  <span className="text-red-500 text-[12px] sm:text-sm block absolute h-0 overflow-visible">
                    {errors.email.message}
                  </span>
                ) : email.length == 127 ? (
                  <p className="text-[#EF9761] absolute h-0 overflow-visible">
                    {t("sections.contacts.messagecharacterLimit")}
                  </p>
                ) : email.length ? (
                  <p className="text-gray-300 absolute h-0 overflow-visible">
                    {t(`sections.contacts.quantitySymbols`)} {email.length}
                    {t("sections.contacts.from")} 127
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="mb-[11px]">
              <label htmlFor="message" className={style.cflabel}>
                {t("sections.contacts.message")}
              </label>
              <div className={style["cfinput-mes"]}>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      maxLength={255}
                      type="text"
                      placeholder={t(
                        "sections.contacts.youCanContactusWithaRequestOrAnOffer"
                      )}
                      className="h-[75px] -z-10 outline-none w-full translate-y-[-20px] resize-none bg-transparent placeholder:text-[15px]"
                      aria-label="idk"
                    />
                  )}
                />
              </div>
              {message.length == 255 ? (
                <p className="text-[#EF9761]">
                  {t("sections.contacts.messagecharacterLimit")}
                </p>
              ) : message.length ? (
                <p className="text-gray-300">
                  {t(`sections.contacts.quantitySymbols`)} {message.length}
                  {t("sections.contacts.from")} 255
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="mb-3">
              <Controller
                name="terms_agreement"
                control={control}
                rules={{ required: t("sections.contacts.thisFieldIsRequired") }}
                render={({ field }) => (
                  <label className={style.cflabel2}>
                    <input
                      {...field}
                      type="checkbox"
                      defaultChecked
                      className="w-5 cursor-pointer h-5 mr-2 flex-shrink-0 rounded-md checked:bg-lime-400 appearance-none border-[1px] after:w-full after:text-center border-gray-500 after:text-sm after:content-['✓'] text-white text-xl flex font-bold justify-center checked:border-none items-center"
                    />
                    <span className="text-gray-700 text-xs">
                      {t(
                        "sections.contacts.iAgreeWiththeTermsofThePrivacyPolicy"
                      )}
                    </span>
                  </label>
                )}
              />
              <br />
            </div>
            <div className="flex justify-center">
              <button
                disabled={argee === false || !email.length || isSubmitted}
                type="submit"
                className={
                  argee && email.length ? style.cfsendbtn2 : style.cfsendbtn
                }
              >
                {isSubmitted === true
                  ? t("sections.sended")
                  : isSubmitted == "Error"
                  ? t("sections.notSended")
                  : t("sections.send")}
              </button>
            </div>
          </form>
        </section>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default ContactForm;
