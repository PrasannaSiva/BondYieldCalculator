import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../../atoms/AppText';
import { radius, spacing } from '../../../design/tokens';
import { useTheme } from '../../../context/ThemeContext';
interface Options<T extends string> {
  label: string;
  value: T;
}
interface Props<T extends string> {
  label?: string;
  options: Options<T>[];
  value: T;
  onChange: (value: T) => void;
}
function SegmentControl<T extends string>({
  label,
  options,
  value,
  onChange,
}: Props<T>) {
  const { colors } = useTheme();
  return (
    <View style={styles.wrapper}>
      {label && (
        <AppText variant="label" style={styles.label}>
          {label}
        </AppText>
      )}
      <View
        style={[
          styles.track,
          {
            backgroundColor: colors.bgInput,
            borderColor: colors.borderDefault,
          },
        ]}
      >
        {options.map(option => {
          const isActive = option.value === value;
          return (
            <TouchableOpacity
              key={option.value}
              onPress={() => onChange(option.value)}
              activeOpacity={0.8}
              style={[
                styles.option,
                isActive && { backgroundColor: colors.primary },
              ]}
            >
              <AppText
                variant="label"
                color={isActive ? colors.textInverse : colors.textMuted}
              >
                {option.label}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.md,
  },
  label: {
    marginBottom: spacing.sm,
  },
  track: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: radius.md,
    padding: 3,
    height: 50,
  },
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.sm,
  },
});
export default SegmentControl;
