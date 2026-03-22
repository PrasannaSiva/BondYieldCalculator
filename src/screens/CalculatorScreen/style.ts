import { StyleSheet } from 'react-native';
import { radius, spacing } from '../../design/tokens';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
    paddingBottom: 120,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: 48,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  headerText: {
    flex: 1,
    gap: 2,
  },
  headerSubtitle: {
    marginTop: spacing.xs,
  },
  calcButton: {
    height: 56,
    borderRadius: radius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.sm,
    marginBottom: spacing.xl,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  resultsWrapper: {
    marginTop: spacing.md,
  },
});
