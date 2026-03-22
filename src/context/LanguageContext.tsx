import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import { I18nManager } from 'react-native';
import i18n from '../localization/i18n';
export type Language = 'en' | 'ar';
interface LanguageContextType {
  language: Language;
  isRTL: boolean;
  setLanguage: (lang: Language) => void;
}
const LanguageContext = createContext<LanguageContextType>(
  {} as LanguageContextType,
);
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>('en');
  const isRTL = language === 'ar';
  useEffect(() => {
    // Flip the layout direction when Arabic is selected.
    I18nManager.forceRTL(isRTL);
  }, [isRTL]);
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    // Keep the i18n runtime in sync with context state.
    i18n.changeLanguage(lang);
  }, []);
  const value = useMemo(
    () => ({ language, isRTL, setLanguage }),
    [language, isRTL, setLanguage],
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = () => useContext(LanguageContext);
