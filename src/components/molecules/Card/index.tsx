import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { radius, spacing, shadows } from '../../../design/tokens';
import { useTheme } from '../../../context/ThemeContext';
import AppText from '../../atoms/AppText';
import Icon from '../../atoms/Icon';
import { IconName } from '../../../assets/icons';
interface Props {
  label: string;
  value: string;
  icon: IconName;
  accentColor: string;
  subValue?: string;
  delay?: number;
}
const Card: React.FC<Props> = ({
  label,
  value,
  icon,
  accentColor,
  subValue,
  delay = 0,
}) => {
  const { colors } = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(24)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, [delay, fadeAnim, slideAnim]);
  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: colors.bgSurface,
          borderColor: colors.borderDefault,
          shadowColor: colors.cardShadow,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 1,
          shadowRadius: 8,
          elevation: 4,
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      {}
      {}
      <View style={[styles.accentBar, { backgroundColor: accentColor }]} />
      {}
      <View
        style={[
          styles.iconCircle,
          {
            backgroundColor: `${accentColor}18`,
          },
        ]}
      >
        <Icon name={icon} size={16} color={accentColor} />
      </View>
      {}
      <AppText
        variant="label"
        color={colors.textSecondary}
        style={styles.label}
      >
        {label}
      </AppText>
      {}
      <AppText variant="value" color={accentColor} style={styles.value}>
        {value}
      </AppText>
      {}
      {subValue && (
        <View
          style={[styles.subValueRow, { borderTopColor: colors.borderSubtle }]}
        >
          <AppText variant="caption" color={colors.textMuted} numberOfLines={1}>
            {subValue}
          </AppText>
        </View>
      )}
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: radius.lg,
    borderWidth: 1,
    overflow: 'hidden',
  },
  accentBar: {
    height: 3,
    width: '100%',
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: radius.full,
    justifyContent: 'center',
    alignItems: 'center',
    margin: spacing.md,
    marginBottom: spacing.xs,
  },
  label: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.xs,
  },
  value: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  subValueRow: {
    borderTopWidth: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
});
export default Card;
