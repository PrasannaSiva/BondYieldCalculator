import React, { useCallback } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Text,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { useHistory } from '../../hooks/useHistory';
import { CalculationHistory, BondInputs } from '../../types';
import { formatPercentage, formatCurrency } from '../../utils/bondCalculations';
import AppText from '../../components/atoms/AppText';
import Badge from '../../components/atoms/Badge';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
interface Props {
  onReuse?: (inputs: BondInputs) => void;
}
const HistoryScreen: React.FC<Props> = ({ onReuse }) => {
  const { colors } = useTheme();
  const { history, loading, clearHistory } = useHistory();
  const { t } = useTranslation();
  // Map status to label/color so renderItem stays simple.
  const statusConfig = {
    premium: { color: colors.danger, label: t('results.bondStatus.premium') },
    discount: {
      color: colors.success,
      label: t('results.bondStatus.discount'),
    },
    par: { color: colors.accent, label: t('results.bondStatus.par') },
  };
  const handleClear = useCallback(() => {
    Alert.alert(t('history.dialog.title'), t('history.dialog.message'), [
      { text: t('common.cancel'), style: 'cancel' },
      {
        text: t('common.delete'),
        style: 'destructive',
        onPress: clearHistory,
      },
    ]);
  }, [clearHistory, t]);
  const renderItem = useCallback(
    ({ item }: { item: CalculationHistory }) => {
      const sc = statusConfig[item.results.status];
      const date = new Date(item.timestamp);
      const dateStr = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
      return (
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.bgSurface,
              borderColor: colors.borderDefault,
            },
          ]}
        >
          {/* Accent stripe */}
          <View style={[styles.stripe, { backgroundColor: sc.color }]} />
          <View style={styles.cardContent}>
            {/* Header row */}
            <View style={styles.cardTopRow}>
              <View>
                <AppText variant="h3">
                  FV ${parseFloat(item.inputs.faceValue).toLocaleString()}
                  {' · '}
                  {item.inputs.couponRate}% coupon
                </AppText>
                <AppText variant="caption" color={colors.textMuted}>
                  {dateStr}
                </AppText>
              </View>
              <Badge label={sc.label} color={sc.color} />
            </View>
            {/* Metrics */}
            <View style={styles.metricsRow}>
              <View>
                <AppText variant="caption" color={colors.textMuted}>
                  {t('history.card.ytm')}
                </AppText>
                <AppText variant="label" color={colors.primary}>
                  {formatPercentage(item.results.ytm)}
                </AppText>
              </View>
              <View>
                <AppText variant="caption" color={colors.textMuted}>
                  {t('history.card.currYield')}
                </AppText>
                <AppText variant="label">
                  {formatPercentage(item.results.currentYield)}
                </AppText>
              </View>
              <View>
                <AppText variant="caption" color={colors.textMuted}>
                  {t('history.card.totalInt')}
                </AppText>
                <AppText variant="label" color={colors.success}>
                  {formatCurrency(item.results.totalInterest, 0)}
                </AppText>
              </View>
            </View>
            {/* Reuse action */}
            {onReuse && (
              <TouchableOpacity
                style={[styles.reuseBtn, { borderColor: colors.primary }]}
                onPress={() => onReuse(item.inputs)}
              >
                <AppText variant="label" color={colors.primary}>
                  {t('common.reuse')}
                </AppText>
              </TouchableOpacity>
            )}
          </View>
        </View>
      );
    },
    [colors, onReuse],
  );
  if (loading) {
    return (
      <View style={[styles.emptyContainer, { backgroundColor: colors.bgBase }]}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }
  return (
    <View style={[styles.container, { backgroundColor: colors.bgBase }]}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: colors.borderSubtle }]}>
        <AppText variant="h2">{t('history.title')}</AppText>
        {history.length > 0 && (
          <TouchableOpacity onPress={handleClear}>
            <AppText variant="label" color={colors.danger}>
              {t('common.clearAll')}
            </AppText>
          </TouchableOpacity>
        )}
      </View>
      {history.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>📋</Text>
          <AppText variant="h3" align="center">
            {t('history.emptyTitle')}
          </AppText>
          <AppText
            variant="body"
            color={colors.textMuted}
            style={styles.emptyText}
          >
            {t('history.emptyBody')}
          </AppText>
        </View>
      ) : (
        <FlatList
          data={history}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};
export default HistoryScreen;
