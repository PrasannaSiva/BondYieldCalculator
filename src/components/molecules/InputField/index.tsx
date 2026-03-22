import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { spacing, radius, typography } from '../../../design/tokens';
import AppText from '../../atoms/AppText';
import App from '../../../../App';
interface Props {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  suffix?: string;
  error?: string;
}
const InputField: React.FC<Props> = ({
  label,
  value,
  onChangeText,
  placeholder,
  suffix,
  error,
}) => {
  const { colors } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = error
    ? colors.danger
    : isFocused
    ? colors.primary
    : colors.borderDefault;
  return (
    <View style={styles.wrapper}>
      <AppText variant="label" style={styles.label}>
        {label}
      </AppText>
      <View
        style={[
          styles.inputRow,
          {
            backgroundColor: colors.bgInput,
            borderColor: borderColor,
            borderWidth: isFocused ? 1.5 : 1,
          },
        ]}
      >
        <TextInput
          style={[styles.input, { color: colors.primary }]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder ?? '0.0'}
          placeholderTextColor={colors.textMuted}
          keyboardType="decimal-pad"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {suffix && (
          <AppText
            variant="caption"
            color={colors.textMuted}
            style={styles.suffix}
          >
            {suffix}
          </AppText>
        )}
      </View>
      {error && <AppText variant="error">{error}</AppText>}
    </View>
  );
};
export default InputField;
const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.sm,
  },
  label: {
    marginBottom: spacing.sm,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: typography.size.lg,
    fontWeight: typography.weight.medium,
    paddingVertical: 0,
  },
  suffix: {
    marginLeft: spacing.sm,
  },
  errorText: {
    marginTop: spacing.xs,
    marginLeft: 2,
  },
});
