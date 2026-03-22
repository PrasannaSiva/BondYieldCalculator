import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { BondResults } from '../../../types';
import {
  formatCurrency,
  formatPercentage,
} from '../../../utils/bondCalculations';
import AppText from '../../atoms/AppText';
import Card from '../../molecules/Card';
import { radius, spacing } from '../../../design/tokens';
interface Props {
  results: BondResults;
}
const ResultsSection: React.FC<Props> = ({ results }) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const statusMap = React.useMemo(
    // Keep labels/colors stable across renders for the cards and summary.
    () => ({
      premium: {
        label: t('results.bondStatus.premium'),
        color: colors.danger,
        badge: 'PREM',
      },
      discount: {
        label: t('results.bondStatus.discount'),
        color: colors.success,
        badge: 'DISC',
      },
      par: {
        label: t('results.bondStatus.par'),
        color: colors.accent,
        badge: 'PAR',
      },
    }),
    [t, colors],
  );
  const statusConfig = statusMap[results.status];
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <AppText variant="h3">{t('results.title')}</AppText>
        <View style={[styles.dateBadge, { backgroundColor: colors.bgInput }]}>
          <AppText variant="caption" color={colors.textMuted}>
            {new Date().toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </AppText>
        </View>
      </View>
      <View
        style={[styles.divider, { backgroundColor: colors.borderSubtle }]}
      />
      <View style={styles.grid}>
        <View style={styles.row}>
          <View style={styles.cardWrapper}>
            <Card
              label={t('results.currentYield')}
              value={formatPercentage(results.currentYield)}
              icon="percent"
              accentColor={colors.primary}
              delay={0}
            />
          </View>
          <View style={styles.cardWrapper}>
            <Card
              label={t('results.ytm')}
              value={formatPercentage(results.ytm)}
              icon="target"
              accentColor={colors.accent}
              delay={100}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cardWrapper}>
            <Card
              label={t('results.totalInterest')}
              value={formatCurrency(results.totalInterest)}
              icon="banknote"
              accentColor={colors.success}
              delay={200}
            />
          </View>
          <View style={styles.cardWrapper}>
            <Card
              label={t('results.status')}
              value={statusConfig.badge}
              icon="shield"
              accentColor={statusConfig.color}
              subValue={statusConfig.label}
              delay={300}
            />
          </View>
        </View>
      </View>
      {/* Summary bar */}
      <View
        style={[
          styles.summaryBar,
          {
            backgroundColor: colors.bgInput,
            borderColor: colors.borderSubtle,
          },
        ]}
      >
        <View style={styles.summaryItem}>
          <AppText variant="caption" color={colors.textMuted}>
            Status
          </AppText>
          <AppText
            variant="label"
            color={statusConfig.color}
            numberOfLines={1}
            style={styles.summaryValue}
          >
            {statusConfig.badge}
          </AppText>
        </View>
        <View
          style={[
            styles.summaryDivider,
            { backgroundColor: colors.borderDefault },
          ]}
        />
        <View style={styles.summaryItem}>
          <AppText variant="caption" color={colors.textMuted}>
            Spread
          </AppText>
          <AppText
            variant="label"
            color={
              results.ytm > results.currentYield
                ? colors.success
                : colors.danger
            }
            numberOfLines={1}
          >
            {results.ytm > results.currentYield ? '+' : ''}
            {formatPercentage(results.ytm - results.currentYield)}
          </AppText>
        </View>
        <View
          style={[
            styles.summaryDivider,
            { backgroundColor: colors.borderDefault },
          ]}
        />
        <View style={styles.summaryItem}>
          <AppText variant="caption" color={colors.textMuted}>
            Total
          </AppText>
          <AppText variant="label" color={colors.success} numberOfLines={1}>
            {formatCurrency(results.totalInterest, 0)}
          </AppText>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  dateBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
  },
  divider: {
    height: 1,
    marginBottom: spacing.md,
  },
  grid: {
    gap: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  cardWrapper: {
    flex: 1,
  },
  summaryBar: {
    flexDirection: 'row',
    borderRadius: radius.lg,
    borderWidth: 1,
    marginTop: spacing.sm,
    paddingVertical: spacing.md,
    overflow: 'hidden',
  },
  summaryItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: spacing.xs,
  },
  summaryValue: {
    fontSize: 11,
  },
  summaryDivider: {
    width: 1,
    marginVertical: spacing.xs,
  },
});
export default ResultsSection;
