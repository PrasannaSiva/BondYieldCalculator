import { StyleSheet } from 'react-native';
import { radius, spacing } from '../../../design/tokens';
export const COL_WIDTHS = {
  period: 52,
  date: 100,
  coupon: 100,
  cumulative: 110,
  principal: 100,
};
export const styles = StyleSheet.create({
  container: {
    borderRadius: radius.lg,
    borderWidth: 1,
    marginBottom: spacing.md,
    overflow: 'hidden',
  },
  title: {
    padding: spacing.md,
    paddingBottom: spacing.sm,
  },
  headerRow: {
    flexDirection: 'row',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
  },
  headerCell: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  body: {
    maxHeight: 280,
  },
  dataRow: {
    flexDirection: 'row',
    paddingHorizontal: spacing.sm,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  cell: {
    fontSize: 13,
  },
});
