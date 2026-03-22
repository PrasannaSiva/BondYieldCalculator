import React from 'react';
import { View, StyleSheet } from 'react-native';
import { radius, spacing } from '../../../design/tokens';
import AppText from '../AppText';
interface Props {
  label: string;
  color: string;
}
const Badge: React.FC<Props> = ({ label, color }) => {
  return (
    <View
      style={[
        styles.container,
        { borderColor: `${color}55`, backgroundColor: `${color}22` },
      ]}
    >
      <AppText variant="badge" color={color}>
        {label}
      </AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: radius.sm,
    paddingVertical: 2,
    paddingHorizontal: spacing.sm,
    alignSelf: 'flex-start',
  },
});
export default Badge;
