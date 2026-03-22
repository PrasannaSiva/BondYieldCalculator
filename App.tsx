import React, { useState } from 'react';
import './src/localization/i18n';
import { View, StyleSheet } from 'react-native';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import AppText from './src/components/atoms/AppText';
import ShowcaseScreen from './src/screens/ShowCaseComponents';
import SplashScreen from './src/screens/SplashScreen';
import CalculatorScreen from './src/screens/CalculatorScreen';
import { LanguageProvider } from './src/context/LanguageContext';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
const AppContent = () => {
  const { colors } = useTheme();
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          primary: colors.primary,
          background: colors.bgBase,
          card: colors.bgSurface,
          text: colors.textPrimary,
          border: colors.borderDefault,
          notification: colors.primary,
        },
        fonts: {
          regular: {
            fontFamily: 'System',
            fontWeight: '400',
          },
          medium: {
            fontFamily: 'System',
            fontWeight: '500',
          },
          bold: {
            fontFamily: 'System',
            fontWeight: '700',
          },
          heavy: {
            fontFamily: 'System',
            fontWeight: '800',
          },
        },
      }}
    >
      {}
      <RootNavigator />
    </NavigationContainer>
  );
};
export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
        {}
      </LanguageProvider>
    </ThemeProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
