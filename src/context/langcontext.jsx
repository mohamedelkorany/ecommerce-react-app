import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("english");

  useEffect(() => {
    document.documentElement.dir = lang === "arabic" ? "rtl" : "ltr";
  }, [lang]);

  const ToggleLanguage = () => {
    setLang((prevLang) => (prevLang === "english" ? "arabic" : "english"));
  };

  return (
    <LanguageContext.Provider value={[lang, ToggleLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
};
