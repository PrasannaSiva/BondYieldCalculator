import {
  BondInputs,
  BondResults,
  CashFlowRow,
  CouponFrequency,
} from '../types';
export const formatCurrency = (value: number, decimals = 2) =>
  `$${value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
export const formatPercentage = (value: number, decimals = 2) =>
  `${value.toFixed(decimals)}%`;
export const calcCurrentYield = (
  faceValue: number,
  couponRate: number,
  marketPrice: number,
) => {
  const annualCoupon = (couponRate / 100) * faceValue;
  return (annualCoupon / marketPrice) * 100;
};
export function calcYTM(
  faceValue: number,
  couponRate: number,
  marketPrice: number,
  yearsToMaturity: number,
  frequency: CouponFrequency,
): number {
  // Use Newton-Raphson to find the yield that matches the market price.
  const periodsPerYear = frequency === 'semiannual' ? 2 : 1;
  const N = yearsToMaturity * periodsPerYear;
  const C = ((couponRate / 100) * faceValue) / periodsPerYear;
  const approxYTM =
    (C + (faceValue - marketPrice) / N) / ((faceValue + marketPrice) / 2);
  let r = approxYTM / periodsPerYear;
  const MAX_ITERATIONS = 1000;
  const PRECISION = 1e-10;
  for (let i = 0; i < MAX_ITERATIONS; i++) {
    let price = 0;
    let dPrice = 0;
    for (let t = 1; t <= N; t++) {
      const discount = Math.pow(1 + r, t);
      price += C / discount;
      dPrice -= (t * C) / (discount * (1 + r));
    }
    const finalDiscount = Math.pow(1 + r, N);
    price += faceValue / finalDiscount;
    dPrice -= (N * faceValue) / (finalDiscount * (1 + r));
    const difference = price - marketPrice;
    if (Math.abs(difference) < PRECISION) break;
    r = r - difference / dPrice;
  }
  return r * periodsPerYear * 100;
}
function getPaymentDate(periodIndex: number, periodsPerYear: number): string {
  // Anchor cash flow dates to "today" for display only (not valuation).
  const today = new Date();
  const monthsPerPeriod = 12 / periodsPerYear;
  const paymentDate = new Date(today);
  paymentDate.setMonth(
    today.getMonth() + Math.round(periodIndex * monthsPerPeriod),
  );
  return paymentDate.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}
export function buildCashFlows(
  faceValue: number,
  couponRate: number,
  yearsToMaturity: number,
  frequency: CouponFrequency,
): CashFlowRow[] {
  const periodsPerYear = frequency === 'semiannual' ? 2 : 1;
  const totalPeriods = yearsToMaturity * periodsPerYear;
  const periodicCoupon = ((couponRate / 100) * faceValue) / periodsPerYear;
  const rows: CashFlowRow[] = [];
  let cumulativeInterest = 0;
  for (let period = 1; period <= totalPeriods; period++) {
    // Keep a running total so the chart/table can display cumulative interest.
    cumulativeInterest += periodicCoupon;
    rows.push({
      period,
      paymentDate: getPaymentDate(period, periodsPerYear),
      couponPayment: periodicCoupon,
      cumulativeInterest: cumulativeInterest,
      remainingPrincipal: period === totalPeriods ? 0 : faceValue,
    });
  }
  return rows;
}
export function calculateBond(
  inputs: BondInputs,
): BondResults & { cashFlows: CashFlowRow[] } {
  const faceValue = parseFloat(inputs.faceValue);
  const couponRate = parseFloat(inputs.couponRate);
  const marketPrice = parseFloat(inputs.marketPrice);
  const yearsToMaturity = parseFloat(inputs.yearsToMaturity);
  const currentYield = calcCurrentYield(faceValue, couponRate, marketPrice);
  const ytm = calcYTM(
    faceValue,
    couponRate,
    marketPrice,
    yearsToMaturity,
    inputs.frequency,
  );
  const cashFlows = buildCashFlows(
    faceValue,
    couponRate,
    yearsToMaturity,
    inputs.frequency,
  );
  const totalInterest =
    cashFlows[cashFlows.length - 1]?.cumulativeInterest ?? 0;
  const diff = Math.abs(marketPrice - faceValue) / faceValue;
  // Use a small tolerance so tiny rounding differences still count as "par".
  const status =
    diff < 0.001 ? 'par' : marketPrice > faceValue ? 'premium' : 'discount';
  return {
    currentYield,
    ytm,
    totalInterest,
    status,
    cashFlows,
  };
}
export interface ValidationResults {
  valid: boolean;
  errors: Partial<Record<keyof BondInputs, string>>;
}
export function validateInputs(inputs: BondInputs): ValidationResults {
  const errors: Partial<Record<keyof BondInputs, string>> = {};
  if (!inputs.faceValue) {
    errors.faceValue = 'Face value is required';
  }
  if (!inputs.couponRate) {
    errors.couponRate = 'Coupon rate is required';
  }
  if (!inputs.marketPrice) {
    errors.marketPrice = 'Market price is required';
  }
  if (!inputs.yearsToMaturity) {
    errors.yearsToMaturity = 'Years to maturity is required';
  }
  const fv = parseFloat(inputs.faceValue);
  const cr = parseFloat(inputs.couponRate);
  const mp = parseFloat(inputs.marketPrice);
  const ytm = parseFloat(inputs.yearsToMaturity);
  if (inputs.faceValue && (isNaN(fv) || fv <= 0)) {
    errors.faceValue = 'Invalid face value';
  }
  if (inputs.couponRate && (isNaN(cr) || cr <= 0)) {
    errors.couponRate = 'Invalid coupon rate';
  }
  if (inputs.marketPrice && (isNaN(mp) || mp <= 0)) {
    errors.marketPrice = 'Invalid market price';
  }
  if (inputs.yearsToMaturity && (isNaN(ytm) || ytm <= 0)) {
    errors.yearsToMaturity = 'Invalid years to maturity';
  }
  if (!isNaN(cr) && (cr < 0 || cr > 100))
    errors.couponRate = 'Must be between 0-100';
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
