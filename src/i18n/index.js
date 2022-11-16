import i18next from "i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptBRJson from "./translations/ptBR.json";
import enJson from "./translations/en.json";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: enJson,
    ptBR: ptBRJson,
  },
});

export default i18n;
