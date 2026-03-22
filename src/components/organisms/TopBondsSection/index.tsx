import React from 'react';
import { View, ScrollView } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { TopBond } from '../../../types';
import { TOP_BONDS } from '../../../data/topBonds';
import AppText from '../../atoms/AppText';
import ListTitle from '../../molecules/ListTile';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
interface Props {
  onSelect: (bond: TopBond) => void;
}
const TopBondsSection: React.FC<Props> = ({ onSelect }) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText variant="h3">{t('calculator.topBonds.title')}</AppText>
        <AppText variant="caption" color={colors.textMuted}>
          {t('calculator.topBonds.subtitle')}
        </AppText>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {TOP_BONDS.map(bond => (
          <ListTitle
            key={bond.id}
            title={bond.name}
            subtitle={bond.issuer}
            value={`${bond.yieldEstimate.toFixed(2)}%`}
            valueLabel="est. yield"
            detail={`${bond.couponRate}% coupon · ${bond.years}yr`}
            badgeLabel={bond.rating}
            accentColor={bond.color}
            onPress={() => onSelect(bond)}
          />
        ))}
      </ScrollView>
    </View>
  );
};
export default TopBondsSection;
