import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import AppText from '../../components/atoms/AppText';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
const OptionRow: React.FC<{
  label: string;
  active: boolean;
  onPress: () => void;
  showDivider?: boolean;
}> = ({ label, active, onPress, showDivider }) => {
  const { colors } = useTheme();
  return (
    <>
      <TouchableOpacity
        style={styles.row}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <AppText
          variant="body"
          color={active ? colors.textPrimary : colors.textSecondary}
        >
          {label}
        </AppText>
        {}
        <View
          style={[
            styles.radio,
            {
              borderColor: active ? colors.primary : colors.borderDefault,
            },
          ]}
        >
          {active && (
            <View
              style={[styles.radioDot, { backgroundColor: colors.primary }]}
            />
          )}
        </View>
      </TouchableOpacity>
      {}
      {showDivider && (
        <View
          style={[styles.rowDivider, { backgroundColor: colors.borderSubtle }]}
        />
      )}
    </>
  );
};
const InfoRow: React.FC<{
  label: string;
  value: string;
  showDivider?: boolean;
}> = ({ label, value, showDivider }) => {
  const { colors } = useTheme();
  return (
    <>
      <View style={styles.row}>
        <AppText variant="body" color={colors.textSecondary}>
          {label}
        </AppText>
        <AppText variant="body" color={colors.textMuted}>
          {value}
        </AppText>
      </View>
      {showDivider && (
        <View
          style={[styles.rowDivider, { backgroundColor: colors.borderSubtle }]}
        />
      )}
    </>
  );
};
const SettingsScreen: React.FC = () => {
  const { colors, themeMode, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  return (
    <View style={[styles.container, { backgroundColor: colors.bgBase }]}>
      {}
      <View style={[styles.header, { borderBottomColor: colors.borderSubtle }]}>
        <AppText variant="h2">{t('settings.title')}</AppText>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {}
        <AppText
          variant="caption"
          color={colors.textMuted}
          style={styles.sectionLabel}
        >
          {t('settings.theme.title')}
        </AppText>
        <View
          style={[
            styles.group,
            {
              backgroundColor: colors.bgSurface,
              borderColor: colors.borderDefault,
            },
          ]}
        >
          <OptionRow
            label={t('settings.theme.dark')}
            active={themeMode === 'dark'}
            onPress={() => setTheme('dark')}
            showDivider
          />
          <OptionRow
            label={t('settings.theme.light')}
            active={themeMode === 'light'}
            onPress={() => setTheme('light')}
            showDivider
          />
          <OptionRow
            label={t('settings.theme.system')}
            active={themeMode === 'system'}
            onPress={() => setTheme('system')}
          />
        </View>
        {}
        <AppText
          variant="caption"
          color={colors.textMuted}
          style={styles.sectionLabel}
        >
          {t('settings.language.title')}
        </AppText>
        <View
          style={[
            styles.group,
            {
              backgroundColor: colors.bgSurface,
              borderColor: colors.borderDefault,
            },
          ]}
        >
          <OptionRow
            label={t('settings.language.english')}
            active={language === 'en'}
            onPress={() => setLanguage('en')}
            showDivider
          />
          <OptionRow
            label={t('settings.language.arabic')}
            active={language === 'ar'}
            onPress={() => setLanguage('ar')}
          />
        </View>
        {}
        <AppText
          variant="caption"
          color={colors.textMuted}
          style={styles.sectionLabel}
        >
          {t('settings.about.title')}
        </AppText>
        <View
          style={[
            styles.group,
            {
              backgroundColor: colors.bgSurface,
              borderColor: colors.borderDefault,
            },
          ]}
        >
          <InfoRow label="App" value={t('settings.about.app')} showDivider />
          <InfoRow
            label="Version"
            value={t('settings.about.version')}
            showDivider
          />
          {}
        </View>
      </ScrollView>
    </View>
  );
};
export default SettingsScreen;
