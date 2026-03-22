import React, { useEffect, useRef } from 'react';
import { View, Dimensions, Animated } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useTheme } from '../../../context/ThemeContext';
import { CashFlowRow } from '../../../types';
import AppText from '../../atoms/AppText';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CHART_WIDTH = SCREEN_WIDTH - 48;
interface Props {
  rows: CashFlowRow[];
}
const CashFlowChart: React.FC<Props> = ({ rows }) => {
  const { colors, isDark } = useTheme();
  const { t } = useTranslation();
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    opacity.setValue(0);
    // Fade in when the cashflow set changes so updates feel intentional.
    Animated.timing(opacity, {
      toValue: 1,
      duration: 700,
      delay: 200,
      useNativeDriver: true,
    }).start();
  }, [rows, opacity]);
  const maxPoints = 24;
  // Downsample so labels stay readable on small screens.
  const step = Math.max(1, Math.floor(rows.length / maxPoints));
  const sampledRows = rows.filter(
    (_, index) => index % step === 0 || index === rows.length - 1,
  );
  const chartData = sampledRows.map(r =>
    parseFloat(r.cumulativeInterest.toFixed(2)),
  );
  const chartLabels = sampledRows.map((r, i) =>
    i % 2 === 0 ? r.paymentDate : '',
  );
  const chartConfig = {
    backgroundColor: colors.bgSurface,
    backgroundGradientFrom: colors.bgSurface,
    backgroundGradientTo: colors.bgSurface,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
    labelColor: () => colors.textMuted,
    propsForDots: {
      r: '3',
      strokeWidth: '2',
      stroke: colors.primary,
    },
    propsForBackgroundLines: {
      strokeDasharray: '4 4',
      stroke: colors.borderSubtle,
    },
    fillShadowGradientFrom: colors.primary,
    fillShadowGradientTo: colors.bgSurface,
    fillShadowGradientOpacity: 0.15,
  };
  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: colors.bgSurface,
          borderColor: colors.borderDefault,
          opacity,
        },
      ]}
    >
      {/* Title */}
      <AppText variant="h3" style={styles.title}>
        {t('cashFlow.chartTitle')}
      </AppText>
      <LineChart
        data={{
          labels: chartLabels,
          datasets: [
            {
              data: chartData,
              color: () => colors.primary,
              strokeWidth: 2,
            },
          ],
        }}
        width={CHART_WIDTH}
        height={200}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
        withShadow={false}
        withInnerLines
        withOuterLines={false}
        withVerticalLines={false}
        fromZero
      />
      {/* Y-axis label */}
      <AppText variant="caption" color={colors.textMuted} style={styles.yLabel}>
        {t('cashFlowChart.yLabel')}
      </AppText>
    </Animated.View>
  );
};
export default CashFlowChart;
