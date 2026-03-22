import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { useColorScheme } from 'react-native';
import { darkColors, lightColors, ColorTokens } from '../design/tokens';
type ThemeMode = 'light' | 'dark' | 'system';
interface ThemeContextType {
  colors: ColorTokens;
  isDark: boolean;
  themeMode: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemScheme = useColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const isDark = useMemo(() => {
    // When "system" is picked, follow the OS appearance setting.
    if (themeMode === 'system') {
      return systemScheme === 'dark';
    }
    return themeMode === 'dark';
  }, [systemScheme, themeMode]);
  const colors = useMemo(() => (isDark ? darkColors : lightColors), [isDark]);
  const setTheme = useCallback((mode: ThemeMode) => setThemeMode(mode), []);
  const toggleTheme = useCallback(() => {
    setThemeMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);
  const value = useMemo(
    () => ({
      colors,
      isDark,
      themeMode,
      setTheme,
      toggleTheme,
    }),
    [colors, isDark, themeMode, setTheme, toggleTheme],
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
