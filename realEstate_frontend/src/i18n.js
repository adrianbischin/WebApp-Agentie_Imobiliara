import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// @ts-ignore
import translationEN from './locales/translationEN.json';
// @ts-ignore
import translationRO from './locales/translationRO.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ro: {
    translation: translationRO
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language'),

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;