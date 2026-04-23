import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EnSidebar from './common/Sidebar/EnSidebar';
import EsSidebar from './common/Sidebar/EsSidebar';
import EnPersonalDetails from './pages/Profile/ViewPersonalDetails/EnPersonalDetails';
import EsPersonalDetails from './pages/Profile/ViewPersonalDetails/EsPersonalDetails';

type Lang = 'en' | 'es';

const getLang = (): Lang => (navigator.language.startsWith('es') ? 'es' : 'en');

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        sidebar: EnSidebar.sidebar,
        personalDetails: EnPersonalDetails.personalDetails,
      },
    },
    es: {
      translation: {
        sidebar: EsSidebar.sidebar,
        personalDetails: EsPersonalDetails.personalDetails,
      },
    },
  },
  lng: getLang(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = (lang: Lang) => {
  i18n.changeLanguage(lang);
};

export default i18n;
