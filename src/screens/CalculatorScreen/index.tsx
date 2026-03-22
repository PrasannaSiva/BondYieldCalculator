import React, { useCallback, useRef, useState, useEffect } from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { TopBond, BondInputs, BondResults } from '../../types';
import AppText from '../../components/atoms/AppText';
import InputCard from '../../components/organisms/InputCard';
import TopBondsSection from '../../components/organisms/TopBondsSection';
import ResultsSection from '../../components/organisms/ResultsSection';
import CashFlowChart from '../../components/organisms/CashFlowChart';
import CashFlowTable from '../../components/organisms/CashFlowTable';
import { calculateBond, validateInputs } from '../../utils/bondCalculations';
import { styles } from './style';
import { useHistory } from '../../hooks/useHistory';
import Icon from '../../components/atoms/Icon';
const DEFAULT_INPUTS: BondInputs = {
  faceValue: '',
  couponRate: '',
  marketPrice: '',
  yearsToMaturity: '',
  frequency: 'semiannual',
};
interface Props {
  initialInputs?: BondInputs | null;
  onInputsConsumed?: () => void;
}
const CalculatorScreen: React.FC<Props> = ({
  initialInputs,
  onInputsConsumed,
}) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const { addEntry } = useHistory();
  const [inputs, setInputs] = useState<BondInputs>(DEFAULT_INPUTS);
  const [results, setResults] = useState<BondResults | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof BondInputs, string>>
  >({});
  useEffect(() => {
    if (initialInputs) {
      // Pre-fill inputs when we reuse a previous calculation.
      setInputs(initialInputs);
      setResults(null);
      setErrors({});
      onInputsConsumed?.();
    }
  }, [initialInputs]);
  const btnScale = useRef(new Animated.Value(1)).current;
  const animateButton = useCallback(() => {
    Animated.sequence([
      Animated.timing(btnScale, {
        toValue: 0.95,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(btnScale, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  }, [btnScale]);
  const handleBondSelect = useCallback((bond: TopBond) => {
    setInputs({
      faceValue: bond.faceValue.toString(),
      couponRate: bond.couponRate.toString(),
      marketPrice: (bond.faceValue * 0.98).toFixed(0),
      yearsToMaturity: bond.years.toString(),
      frequency: bond.frequency,
    });
    setResults(null);
    setErrors({});
  }, []);
  const handleCalculate = useCallback(() => {
    animateButton();
    const validation = validateInputs(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setLoading(true);
    setResults(null);
    // Give the UI a beat to animate before doing the heavier work.
    setTimeout(() => {
      try {
        console.log('Calculating with:', inputs);
        const bondResults = calculateBond(inputs);
        console.log('Results:', {
          currentYield: bondResults.currentYield,
          ytm: bondResults.ytm,
          totalInterest: bondResults.totalInterest,
        });
        setResults(bondResults);
        addEntry(inputs, bondResults);
      } catch (err) {
        console.error('Calculation error:', err);
      } finally {
        setLoading(false);
      }
    }, 50);
  }, [inputs, addEntry, animateButton]);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Header section */}
      <View style={[styles.header, { borderBottomColor: colors.borderSubtle }]}>
        <View style={styles.headerTop}>
          <Icon name="logo" size={36} color={colors.primary} />
          <View style={styles.headerText}>
            <AppText variant="h2">{t('calculator.title')}</AppText>
            <AppText variant="caption" color={colors.textMuted}>
              {t('calculator.subtitle')}
            </AppText>
          </View>
        </View>
      </View>
      {/* Inputs and results */}
      <ScrollView
        style={styles.Scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <TopBondsSection onSelect={handleBondSelect} />
        <InputCard inputs={inputs} onChange={setInputs} errors={errors} />
        {/* Primary calculate button */}
        <Animated.View style={{ transform: [{ scale: btnScale }] }}>
          <TouchableOpacity
            style={[styles.calcButton, { backgroundColor: colors.primary }]}
            onPress={handleCalculate}
            activeOpacity={0.9}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <AppText variant="label" color="#FFFFFF">
                {t('calculator.button')}
              </AppText>
            )}
          </TouchableOpacity>
        </Animated.View>
        {/* Results */}
        {results && (
          <View style={styles.resultsWrapper}>
            <ResultsSection results={results} />
            <CashFlowChart rows={results.cashFlows} />
            <CashFlowTable rows={results.cashFlows} />
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default CalculatorScreen;
