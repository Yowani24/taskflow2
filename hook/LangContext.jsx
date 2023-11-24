import React, { createContext, useState, useContext, useEffect } from "react";

const LangContext = createContext();
// const aqui = require("./translations/translations_en.json")

export const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt");
  const [translations, setTranslations] = useState({});

  const switchLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    // Load translations based on the selected language
    const loadTranslations = async () => {
      try {
        const response = await import(
          `./translations/translations_${language}.json`
        );
        setTranslations(response.default);
      } catch (error) {
        console.error(`Error loading translations for ${language}:`, error);
      }
    };

    loadTranslations();
  }, [language]);

  return (
    <LangContext.Provider value={{ language, switchLanguage, translations }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  return useContext(LangContext);
};
