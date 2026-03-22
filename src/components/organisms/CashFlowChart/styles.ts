import { StyleSheet } from 'react-native';
import { radius, spacing } from '../../../design/tokens';
export const styles = StyleSheet.create({
  container: {
    borderRadius: radius.lg,
    borderWidth: 1,
    marginBottom: spacing.md,
    overflow: 'hidden',
    paddingTop: spacing.md,
  },
  title: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  chart: {
    marginLeft: -10,
  },
  yLabel: {
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
});
