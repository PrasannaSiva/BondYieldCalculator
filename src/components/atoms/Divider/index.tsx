import React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing } from '../../../design/tokens';
import { useTheme } from '../../../context/ThemeContext';
interface Props {
  spacing?: keyof typeof spacing;
}
const Divider: React.FC<Props> = ({ spacing: spacingKey = 'md' }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { marginVertical: spacing[spacingKey] }]}>
      <View style={[styles.line, { backgroundColor: colors.borderSubtle }]} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  line: {
    height: 1,
    width: '100%',
  },
});
export default Divider;
