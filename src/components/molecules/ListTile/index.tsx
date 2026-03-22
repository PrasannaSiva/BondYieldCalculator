import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { radius, spacing, shadows } from '../../../design/tokens';
import { useTheme } from '../../../context/ThemeContext';
import AppText from '../../atoms/AppText';
import Badge from '../../atoms/Badge';
interface Props {
  title: string;
  subtitle: string;
  value: string;
  valueLabel: string;
  detail: string;
  badgeLabel: string;
  accentColor: string;
  onPress: () => void;
}
const ListTile: React.FC<Props> = ({
  title,
  subtitle,
  value,
  valueLabel,
  detail,
  badgeLabel,
  accentColor,
  onPress,
}) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={[
        styles.container,
        {
          backgroundColor: colors.bgSurface,
          borderColor: `${accentColor}30`,
          shadowColor: accentColor,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 12,
          elevation: 4,
        },
      ]}
    >
      {}
      <View style={styles.topRow}>
        <View style={[styles.dot, { backgroundColor: accentColor }]} />
        <Badge label={badgeLabel} color={accentColor} />
      </View>
      {}
      <AppText variant="h3" style={styles.title}>
        {title}
      </AppText>
      <AppText
        variant="caption"
        color={colors.textMuted}
        style={styles.subtitle}
      >
        {subtitle}
      </AppText>
      {}
      <View style={styles.valueRow}>
        <AppText variant="value" color={accentColor}>
          {value}
        </AppText>
        <AppText
          variant="caption"
          color={colors.textMuted}
          style={styles.valueLabel}
        >
          {valueLabel}
        </AppText>
      </View>
      {}
      <AppText variant="caption" color={colors.textMuted}>
        {detail}
      </AppText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 160,
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: spacing.md,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: radius.full,
  },
  title: {
    marginBottom: spacing.xs,
  },
  subtitle: {
    marginBottom: spacing.md,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: spacing.xs,
    marginBottom: spacing.xs,
  },
  valueLabel: {
    marginBottom: 2,
  },
});
export default ListTile;
