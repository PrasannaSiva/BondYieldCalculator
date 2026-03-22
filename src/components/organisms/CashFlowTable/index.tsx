import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { CashFlowRow } from '../../../types';
import { formatCurrency } from '../../../utils/bondCalculations';
import AppText from '../../atoms/AppText';
import { styles, COL_WIDTHS } from './styles';
import { useTranslation } from 'react-i18next';
interface Props {
  rows: CashFlowRow[];
}
const CashFlowTable: React.FC<Props> = ({ rows }) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const COLUMNS = [
    {
      key: 'period',
      label: t('cashFlow.columns.period'),
      width: COL_WIDTHS.period,
      align: 'center' as const,
    },
    {
      key: 'date',
      label: t('cashFlow.columns.date'),
      width: COL_WIDTHS.date,
      align: 'left' as const,
    },
    {
      key: 'coupon',
      label: t('cashFlow.columns.coupon'),
      width: COL_WIDTHS.coupon,
      align: 'right' as const,
    },
    {
      key: 'cumulative',
      label: t('cashFlow.columns.cumulative'),
      width: COL_WIDTHS.cumulative,
      align: 'right' as const,
    },
    {
      key: 'principal',
      label: t('cashFlow.columns.principal'),
      width: COL_WIDTHS.principal,
      align: 'right' as const,
    },
  ];
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.bgSurface,
          borderColor: colors.borderDefault,
        },
      ]}
    >
      {}
      <AppText variant="h3" style={styles.title}>
        Cash Flow Schedule
      </AppText>
      {}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          {}
          {}
          <View
            style={[
              styles.headerRow,
              {
                backgroundColor: colors.bgInput,
                borderBottomColor: colors.borderDefault,
              },
            ]}
          >
            {COLUMNS.map(col => (
              <Text
                key={col.key}
                style={[
                  styles.headerCell,
                  {
                    width: col.width,
                    textAlign: col.align,
                    color: colors.primary,
                  },
                ]}
              >
                {col.label}
              </Text>
            ))}
          </View>
          {}
          <ScrollView
            style={styles.body}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
          >
            {rows.map((row, index) => {
              const isLast = index === rows.length - 1;
              const rowBg = index % 2 === 0 ? colors.bgSurface : colors.bgInput;
              return (
                <View
                  key={row.period}
                  style={[
                    styles.dataRow,
                    {
                      backgroundColor: rowBg,
                      borderBottomColor: colors.borderSubtle,
                    },
                  ]}
                >
                  {}
                  <Text
                    style={[
                      styles.cell,
                      {
                        width: COL_WIDTHS.period,
                        textAlign: 'center',
                        color: colors.primary,
                        fontWeight: '700',
                      },
                    ]}
                  >
                    {row.period}
                  </Text>
                  {}
                  <Text
                    style={[
                      styles.cell,
                      {
                        width: COL_WIDTHS.date,
                        color: colors.textSecondary,
                      },
                    ]}
                  >
                    {row.paymentDate}
                  </Text>
                  {}
                  <Text
                    style={[
                      styles.cell,
                      {
                        width: COL_WIDTHS.coupon,
                        textAlign: 'right',
                        color: colors.success,
                      },
                    ]}
                  >
                    {formatCurrency(row.couponPayment)}
                  </Text>
                  {}
                  <Text
                    style={[
                      styles.cell,
                      {
                        width: COL_WIDTHS.cumulative,
                        textAlign: 'right',
                        color: colors.textPrimary,
                        fontWeight: '600',
                      },
                    ]}
                  >
                    {formatCurrency(row.cumulativeInterest)}
                  </Text>
                  {}
                  <Text
                    style={[
                      styles.cell,
                      {
                        width: COL_WIDTHS.principal,
                        textAlign: 'right',
                        color: isLast ? colors.danger : colors.textSecondary,
                        fontWeight: isLast ? '700' : '400',
                      },
                    ]}
                  >
                    {formatCurrency(row.remainingPrincipal)}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};
export default CashFlowTable;
