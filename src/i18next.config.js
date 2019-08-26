import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import locI18next from 'loc-i18next';

import engTranslations from '../lang/en.json';
import espTranslations from '../lang/es.json';

i18next.use(LanguageDetector).init(
  {
    resources: {
      en: {
        translation: engTranslations,
      },
      es: {
        translation: espTranslations,
      },
    },
  },
  function() {
    const localize = locI18next.init(i18next);

    localize('header');
  }
);
