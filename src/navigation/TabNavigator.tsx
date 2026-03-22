import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { spacing } from '../design/tokens';
import Icon from '../components/atoms/Icon';
import CalculatorScreen from '../screens/CalculatorScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SettingsScreen from '../screens/SettingsScreen';
const Tab = createBottomTabNavigator();
const TabIcon: React.FC<{
  name: 'calculator' | 'history' | 'settings';
  label: string;
  focused: boolean;
}> = ({ name, label, focused }) => {
  const { colors } = useTheme();
  const iconColor = focused ? colors.primary : colors.textMuted;
  return (
    <View style={styles.iconContainer}>
      {}
      <Icon name={name} size={22} color={iconColor} />
      <Text style={[styles.label, { color: iconColor }]} numberOfLines={1}>
        {label}
      </Text>
      {focused && (
        <View style={[styles.dot, { backgroundColor: colors.primary }]} />
      )}
    </View>
  );
};
const TabNavigator: React.FC = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.bgSurface,
          borderTopColor: colors.borderDefault,
          borderTopWidth: 1,
          height: 72,
          paddingBottom: spacing.md,
          paddingTop: spacing.xs,
        },
      }}
    >
      {}
      <Tab.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="calculator"
              label={t('navigation.calculator')}
              focused={focused}
            />
          ),
        }}
      />
      {}
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="history"
              label={t('navigation.history')}
              focused={focused}
            />
          ),
        }}
      />
      {}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="settings"
              label={t('navigation.settings')}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: spacing.xs,
    position: 'relative',
    width: 80,
  },
  label: {
    fontSize: 10,
    fontWeight: '600',
    marginTop: 3,
    letterSpacing: 0.2,
  },
  dot: {
    position: 'absolute',
    bottom: -spacing.sm,
    width: 4,
    height: 4,
    borderRadius: 2,
  },
});
export default TabNavigator;
