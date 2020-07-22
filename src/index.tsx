import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import * as serviceWorker from './serviceWorker';
import eng from "./translations/en-US/common.json";
import ita from "./translations/it-IT/common.json";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(LanguageDetector).init({
    interpolation: { escapeValue: false },  
    // lng: 'it',                               language to use
    resources: {
        en: { eng },
        it: { ita },
    },
});

ReactDOM.render(
    <StrictMode>
            <I18nextProvider i18n={i18next}>
                <App />
            </I18nextProvider>
    </StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
