import * as RNLocalize from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import enTranslation from './locales/en.json';
//@ts-ignore
import IntlPolyfill from 'intl-pluralrules';
import ukTranslation from './locales/uk.json';
import { initReactI18next } from 'react-i18next';
import i18n, { LanguageDetectorAsyncModule, Services, InitOptions, } from 'i18next';

if (!global.Intl.PluralRules) {
  global.Intl.PluralRules = IntlPolyfill;
}

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  // If this is set to true, your detect function receives a callback function that you should call with your language,
  //useful to retrieve your language stored in AsyncStorage for example
  async: true,
  init: (
    _services: Services,
    _detectorOptions: object,
    _i18nextOptions: InitOptions,
  ) => {
    /* use services and options */
  },
  detect: (callback: (lng: string) => void) => {
    AsyncStorage.getItem('@language', (err, lng) => {
      // Error fetching stored data or no language was stored
      if (err || !lng) {
        if (err) {
          console.log('Error fetching "@language" from async store', err);
        } else {
          console.log(
            'No language is set, choosing the best available or English as fallback',
          );
        }
        const bestLng = RNLocalize.findBestLanguageTag(['en', 'uk']);

        callback(bestLng?.languageTag ?? 'uk');
        return;
      }
      callback(lng);
    });
  },
  cacheUserLanguage: (lng: string) => {
    AsyncStorage.setItem('@language', lng);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      uk: {
        translation: ukTranslation,
      },
    },
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });