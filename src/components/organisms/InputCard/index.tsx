import React, { use, useCallback } from 'react';
import { View } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import AppText from '../../atoms/AppText';
import InputField from '../../molecules/InputField';
import SegmentControl from '../../molecules/SegmentControl';
import { CouponFrequency, BondInputs } from '../../../types';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
interface Props {
  inputs: BondInputs;
  onChange: (inputs: BondInputs) => void;
  errors?: Partial<Record<keyof BondInputs, string>>;
}
const InputCard: React.FC<Props> = ({ inputs, onChange, errors }) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const handleChange = useCallback(
    (key: keyof BondInputs) => (value: string) => {
      onChange({ ...inputs, [key]: value });
    },
    [inputs, onChange],
  );
  const handleFrequencyChange = useCallback(
    (value: CouponFrequency) => {
      onChange({ ...inputs, frequency: value });
    },
    [inputs, onChange],
  );
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.bgSurface,
          borderColor: colors.borderDefault,
          shadowColor: colors.cardShadow,
        },
      ]}
    >
      <AppText variant="h3" style={styles.title}>
        {t('calculator.inputs.title')}
      </AppText>
      <InputField
        label={t('calculator.inputs.faceValue')}
        value={inputs.faceValue}
        onChangeText={handleChange('faceValue')}
        placeholder="1000"
        suffix="AED"
        error={errors?.faceValue}
      />
      <InputField
        label={t('calculator.inputs.couponRate')}
        value={inputs.couponRate}
        onChangeText={handleChange('couponRate')}
        placeholder="5"
        suffix="%"
        error={errors?.couponRate}
      />
      <View style={styles.row}>
        <View style={styles.halfWidth}>
          <InputField
            label={t('calculator.inputs.marketPrice')}
            value={inputs.marketPrice}
            onChangeText={handleChange('marketPrice')}
            placeholder="980"
            suffix="AED"
            error={errors?.marketPrice}
          />
        </View>
        <View style={styles.halfWidth}>
          <InputField
            label={t('calculator.inputs.years')}
            value={inputs.yearsToMaturity}
            onChangeText={handleChange('yearsToMaturity')}
            placeholder="5"
            suffix="yr"
            error={errors?.yearsToMaturity}
          />
        </View>
      </View>
      <SegmentControl
        label={t('calculator.inputs.frequency')}
        options={[
          {
            label: t('calculator.frequency.annual'),
            value: 'annual',
          },
          {
            label: t('calculator.frequency.semiannual'),
            value: 'semiannual',
          },
        ]}
        value={inputs.frequency}
        onChange={handleFrequencyChange}
      />
    </View>
  );
};
export default InputCard;
