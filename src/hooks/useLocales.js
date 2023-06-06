import { useTranslation } from "react-i18next";

// ----------------------------------------------------------------------

const allLangs = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Español",
    value: "es",
  },
];

const defaultLang = 1;

export default function useLocales() {
  const { i18n, t } = useTranslation("global");

  const langStorage = localStorage.getItem("i18nextLng");

  const currentLang =
    allLangs.find((_lang) => _lang.value === langStorage) ||
    allLangs[defaultLang];

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    currentLang,
    allLangs,
    t,
  };
}
