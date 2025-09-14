import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import pl from './locales/pl.json';
import en from './locales/en.json';

const resources = {
  pl: {
    translation: pl
  },
  en: {
    translation: en
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pl', // domyślny język - polski
    fallbackLng: 'pl',
    debug: false,

    interpolation: {
      escapeValue: false, // React już sam escapuje
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    }
  });

export default i18n;