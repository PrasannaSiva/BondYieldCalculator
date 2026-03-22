export type CouponFrequency = 'annual' | 'semiannual';
export interface BondInputs {
  faceValue: string;
  couponRate: string;
  marketPrice: string;
  yearsToMaturity: string;
  frequency: CouponFrequency;
}
export interface BondResults {
  currentYield: number;
  ytm: number;
  totalInterest: number;
  status: 'discount' | 'premium' | 'par';
  cashFlows: CashFlowRow[];
}
export interface CashFlowRow {
  period: number;
  paymentDate: string;
  couponPayment: number;
  cumulativeInterest: number;
  remainingPrincipal: number;
}
export interface TopBond {
  id: string;
  name: string;
  issuer: string;
  faceValue: number;
  couponRate: number;
  years: number;
  frequency: CouponFrequency;
  yieldEstimate: number;
  color: string;
  rating: string;
}
export interface CalculationHistory {
  id: string;
  timestamp: string;
  inputs: BondInputs;
  results: BondResults;
}
