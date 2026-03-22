export default {
  common: {
    cancel: 'Cancel',
    delete: 'Delete',
    save: 'Save',
    reuse: 'Reuse',
    clearAll: 'Clear All',
  },
  navigation: {
    calculator: 'Calculator',
    history: 'History',
    settings: 'Settings',
  },
  calculator: {
    title: 'Bond Calculator',
    subtitle: 'Yield & Cash Flow Analysis',
    button: 'Calculate Yield',
    inputs: {
      title: 'Bond Parameters',
      faceValue: 'Face Value',
      couponRate: 'Coupon Rate',
      marketPrice: 'Market Price',
      years: 'Years',
      frequency: 'Coupon Frequency',
    },
    frequency: {
      annual: 'Annual',
      semiannual: 'Semi-Annual',
    },
    topBonds: {
      title: 'Top Bonds',
      subtitle: 'Tap to auto-fill',
    },
    validation: {
      required: 'Required',
      number: 'Must be a number',
      positive: 'Must be greater than 0',
      rate: 'Must be between 0-100',
    },
  },
  results: {
    title: 'Results',
    currentYield: 'Current Yield',
    ytm: 'Yield to Maturity',
    totalInterest: 'Total Interest',
    status: 'Bond Status',
    bondStatus: {
      premium: 'Trading at Premium',
      discount: 'Trading at Discount',
      par: 'Trading at Par',
    },
  },
  cashFlow: {
    tableTitle: 'Cash Flow Schedule',
    chartTitle: 'Cumulative Interest Growth',
    yLabel: 'Cumulative Interest ($)',
    columns: {
      period: 'Period',
      date: 'Date',
      coupon: 'Coupon',
      cumulative: 'Cumulative',
      principal: 'Principal',
    },
  },
  history: {
    title: 'History',
    emptyTitle: 'No calculations yet',
    emptyBody: 'Run your first bond analysis\nand it will appear here',
    card: {
      ytm: 'YTM',
      currYield: 'Curr. Yield',
      totalInt: 'Total Int.',
    },
    dialog: {
      title: 'Clear History',
      message: 'Delete all saved calculations?',
    },
  },
  settings: {
    title: 'Settings',
    theme: {
      title: 'Theme',
      dark: 'Dark',
      light: 'Light',
      system: 'System Default',
    },
    language: {
      title: 'Language',
      english: 'English',
      arabic: 'العربية (Arabic)',
    },
    about: {
      title: 'About',
      app: 'BondYield Calculator',
      version: '1.0.0',
      algorithm: 'Newton-Raphson',
      precision: 'ε = 1e-10',
    },
  },
};
