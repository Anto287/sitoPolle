import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from '@translation/en/translation.json';
import translationIT from '@translation/it/translation.json';
import translationDE from '@translation/de/translation.json';
import translationFR from '@translation/fr/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  it: {
    translation: translationIT
  },
  de: {
    translation: translationDE
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;