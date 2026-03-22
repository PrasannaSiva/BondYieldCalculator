import React from 'react';
import { Text, TextStyle } from 'react-native';
import { typography } from '../../../design/tokens';
import { useTheme } from '../../../context/ThemeContext';
type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'label'
  | 'value'
  | 'caption'
  | 'error'
  | 'badge';
interface Props {
  variant: TextVariant;
  children: React.ReactNode;
  color?: string;
  align?: TextStyle['textAlign'];
  style?: TextStyle;
  numberOfLines?: number;
}
const variantStyles: Record<TextVariant, TextStyle> = {
  h1: {
    fontFamily: 'Outfit-ExtraBold',
    fontSize: typography.size.h1,
    fontWeight: typography.weight.extrabold,
    letterSpacing: -0.5,
  },
  h2: {
    fontFamily: 'Outfit-ExtraBold',
    fontSize: typography.size.h2,
    fontWeight: typography.weight.extrabold,
    letterSpacing: -0.5,
  },
  h3: {
    fontFamily: 'Outfit-Bold',
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
    letterSpacing: -0.3,
  },
  body: {
    fontFamily: 'Inter-Regular',
    fontSize: typography.size.md,
    fontWeight: typography.weight.regular,
    lineHeight: typography.size.md * 1.5,
  },
  label: {
    fontFamily: 'Inter-SemiBold',
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semibold,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  value: {
    fontFamily: 'Outfit-Bold',
    fontSize: typography.size.xxl,
    fontWeight: typography.weight.bold,
    letterSpacing: -0.5,
  },
  caption: {
    fontFamily: 'Inter-Regular',
    fontSize: typography.size.xs,
    fontWeight: typography.weight.regular,
    letterSpacing: 0.3,
  },
  error: {
    fontFamily: 'Inter-Medium',
    fontSize: typography.size.xs,
    fontWeight: typography.weight.medium,
  },
  badge: {
    fontFamily: 'Inter-Bold',
    fontSize: typography.size.xs,
    fontWeight: typography.weight.bold,
    letterSpacing: 0.5,
  },
};
const AppText: React.FC<Props> = ({
  variant,
  children,
  color,
  align,
  style,
  numberOfLines,
}) => {
  const { colors } = useTheme();
  const variantColors: Record<TextVariant, string> = {
    h1: colors.textPrimary,
    h2: colors.textPrimary,
    h3: colors.textPrimary,
    body: colors.textSecondary,
    label: colors.textSecondary,
    value: colors.textPrimary,
    caption: colors.textMuted,
    error: colors.danger,
    badge: colors.textPrimary,
  };
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        variantStyles[variant],
        { color: color ?? variantColors[variant] },
        align && { textAlign: align },
        style,
      ]}
    >
      {children}
    </Text>
  );
};
export default AppText;
