import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import AppText from '../../components/atoms/AppText';
import Badge from '../../components/atoms/Badge';
import InputField from '../../components/molecules/InputField';
import SegmentControl from '../../components/molecules/SegmentControl';
import {
  BondInputs,
  BondResults,
  CashFlowRow,
  CouponFrequency,
  TopBond,
} from '../../types';
import Card from '../../components/molecules/Card';
import ListTile from '../../components/molecules/ListTile';
import { spacing } from '../../design/tokens';
import InputCard from '../../components/organisms/InputCard';
import ResultsSection from '../../components/organisms/ResultsSection';
import TopBondsSection from '../../components/organisms/TopBondsSection';
import CashFlowTable from '../../components/organisms/CashFlowTable';
import { buildCashFlows } from '../../utils/bondCalculations';
import CashFlowChart from '../../components/organisms/CashFlowChart';
const Section: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.section, { borderBottomColor: colors.borderSubtle }]}>
      {}
      <View
        style={[styles.sectionHeader, { backgroundColor: colors.bgSubtle }]}
      >
        <AppText variant="label" color={colors.primary}>
          {title}
        </AppText>
      </View>
      {}
      <View style={styles.sectionContent}>{children}</View>
    </View>
  );
};
const Row: React.FC<{
  label: string;
  children: React.ReactNode;
}> = ({ label, children }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.row}>
      <View style={styles.rowLabel}>
        <AppText variant="caption" color={colors.textMuted}>
          {label}
        </AppText>
      </View>
      <View style={styles.rowContent}>{children}</View>
    </View>
  );
};
const ShowcaseScreen = () => {
  const { colors } = useTheme();
  const [frequency, setFrequency] = React.useState<CouponFrequency>('annual');
  const [bondInputs, setBondInputs] = React.useState<BondInputs>({
    faceValue: '',
    couponRate: '',
    marketPrice: '',
    yearsToMaturity: '',
    frequency: 'annual',
  });
  const mockResults: BondResults = {
    currentYield: 5.26,
    ytm: 5.84,
    totalInterest: 500,
    status: 'discount',
  };
  const mockCashFlows = buildCashFlows(1000, 5, 3, 'semiannual');
  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.bgBase }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {}
      <View style={styles.header}>
        <AppText variant="h2">Component Showcase</AppText>
        <AppText variant="body">Design System — Atoms</AppText>
      </View>
      {}
      <Section title="Input Card">
        <Row label="Bond Input Card">
          <InputCard inputs={bondInputs} onChange={setBondInputs} />
        </Row>
      </Section>
      {}
      <Section title="Results Section">
        <Row label="Bond Results">
          <ResultsSection results={mockResults} />
        </Row>
      </Section>
      {}
      <Section title="TopBondsSection — Horizontal Scroll">
        <TopBondsSection
          onSelect={(bond: TopBond) => {
            console.log('Selected bond:', bond.name);
          }}
        />
      </Section>
      {}
      <Section title="CashFlowSection">
        <CashFlowTable rows={mockCashFlows} />
      </Section>
      {}
      <Section title="CashFlowChart">
        <CashFlowChart rows={mockCashFlows} />
      </Section>
      {}
      <Section title="AppText — All Variants">
        <Row label="h1">
          <AppText variant="h1">Heading 1</AppText>
        </Row>
        <Row label="h2">
          <AppText variant="h2">Heading 2</AppText>
        </Row>
        <Row label="h3">
          <AppText variant="h3">Heading 3</AppText>
        </Row>
        <Row label="body">
          <AppText variant="body">Body text for reading</AppText>
        </Row>
        <Row label="label">
          <AppText variant="label">Input Label</AppText>
        </Row>
        <Row label="value">
          <AppText variant="value">5.26%</AppText>
        </Row>
        <Row label="caption">
          <AppText variant="caption">Helper caption text</AppText>
        </Row>
        <Row label="error">
          <AppText variant="error">Required field</AppText>
        </Row>
        <Row label="badge">
          <AppText variant="badge">BADGE TEXT</AppText>
        </Row>
      </Section>
      {}
      {}
      {}
      <Section title="Badge — Ratings">
        <Row label="AAA">
          <Badge label="AAA" color={colors.success} />
        </Row>
        <Row label="AA+">
          <Badge label="AA+" color={colors.success} />
        </Row>
        <Row label="A">
          <Badge label="A" color={colors.warning} />
        </Row>
        <Row label="BBB">
          <Badge label="BBB" color={colors.warning} />
        </Row>
      </Section>
      {}
      {}
      {}
      <Section title="Badge — InputField States">
        <Row label="empty">
          <InputField label="username" value={''} onChangeText={() => {}} />
        </Row>
        <Row label="Filled">
          <InputField label="username" value={'12.0'} onChangeText={() => {}} />
        </Row>
        <Row label="Suffix">
          <InputField
            label="username"
            value={'12.0'}
            onChangeText={() => {}}
            suffix="$"
          />
        </Row>
        <Row label="Error">
          <InputField
            label="username"
            value={'12.0'}
            onChangeText={() => {}}
            error="Required field"
          />
        </Row>
      </Section>
      {}
      <Section title="Badge — InputField States">
        <Row label="2 Options">
          <SegmentControl
            label="Coupon Frequency"
            options={[
              { value: 'annual', label: 'Annual' },
              { value: 'semiannual', label: 'Semi-Annual' },
            ]}
            value={frequency}
            onChange={setFrequency}
          />
        </Row>
      </Section>
      {}
      <Section title="Badge — Card Variants">
        <Row label="Main Card">
          <Card
            label="Bond Yield"
            value="5.26%"
            icon="💰"
            accentColor={colors.primary}
            delay={200}
          />
        </Row>
        <Row label="Secondary Card">
          <Card
            label="Bond Yield"
            value="5.26%"
            icon="💰"
            accentColor={colors.primary}
            subValue="Over 10 years"
            delay={300}
          />
        </Row>
      </Section>
      <Section title="ListTile — Bond Cards">
        {}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: spacing.sm }}
        >
          <ListTile
            title="US 10-Year"
            subtitle="US Treasury"
            value="4.35%"
            valueLabel="est. yield"
            detail="4.25% coupon · 10yr"
            badgeLabel="AAA"
            accentColor={colors.primary}
            onPress={() => {}}
          />
          <ListTile
            title="Apple 2032"
            subtitle="Apple Inc."
            value="4.10%"
            valueLabel="est. yield"
            detail="3.75% coupon · 8yr"
            badgeLabel="AA+"
            accentColor={colors.accent}
            onPress={() => {}}
          />
          <ListTile
            title="Saudi Sukuk"
            subtitle="Saudi Arabia"
            value="5.60%"
            valueLabel="est. yield"
            detail="5.50% coupon · 5yr"
            badgeLabel="A"
            accentColor={colors.warning}
            onPress={() => {}}
          />
        </ScrollView>
      </Section>
      {}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 60,
  },
  header: {
    padding: 24,
    paddingTop: 60,
    gap: 6,
  },
  section: {
    borderBottomWidth: 1,
    marginBottom: 8,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  sectionContent: {
    padding: 24,
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  rowLabel: {
    width: 70,
  },
  rowContent: {
    flex: 1,
  },
});
export default ShowcaseScreen;
