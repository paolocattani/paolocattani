import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Components
import App from './App';

// FontAwesome 6
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
// i18n
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import common_eng from "./translations/en-US/common.json";
import common_ita from "./translations/it-IT/common.json";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(LanguageDetector).init({
    interpolation: { escapeValue: false },
    lng: 'it',
    resources: {
        en: {
            common: common_eng,
        },
        it: {
            common: common_ita,
        },
    },
});

library.add(fas, far, fab);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </StrictMode>,
);
