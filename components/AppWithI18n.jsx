import React, { useReducer, useEffect, useState } from 'react';
import { I18nProvider } from '@lingui/react';
import LanguageContext from './context/LanguageContext';
import SetLanguageContext from './context/SetLanguageContext';

function langReducer(state, action) {
  switch (action.type) {
    case 'switchLang':
      return { language: action.payload };
    default:
      throw new Error();
  }
}

const AppWithI18n = ({ children, initLanguage }) => {
  const [state, dispatch] = useReducer(langReducer, { language: initLanguage });
  const [catalogs, setCatalogs] = useState(null);
    // console.log("appi18n", state.language);

  const loadCatalog = async (language) => {
    const catalog = await import(
      /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
      // eslint-disable-next-line comma-dangle
      `@lingui/loader!./locales/${language}/messages.json`
    );
    setCatalogs({
      [state.language]: catalog,
    });
  };
  
  // второй аргумент у функции - пустой массив,
  // это нужно, что useEffect выполнилась только один раз
  useEffect(() => {
    loadCatalog(state.language);
  }, [state.language]);

  return (
    <I18nProvider language={state.language} catalogs={catalogs}>
      <LanguageContext.Provider value={state.language}>
        <SetLanguageContext.Provider value={dispatch}>
          {children}
        </SetLanguageContext.Provider>
      </LanguageContext.Provider>
    </I18nProvider>
  );
};

export default AppWithI18n;
