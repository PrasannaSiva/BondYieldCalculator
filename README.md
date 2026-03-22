# Bond Yield Calculator

React Native app for bond yield analysis and cash flow scheduling.

---

## Demo

https://drive.google.com/file/d/1aqvXZ9-dhTNdHyl8DMWG6rlTtx60elE1/view?usp=drive_link

---

## Features

- Current yield and YTM calculation
- Cash flow schedule with payment dates
- Premium / discount indicator
- Cumulative interest chart
- Top bonds quick-fill
- Calculation history
- Dark and light mode
- English and Arabic (RTL)

---

## Calculations

YTM uses Newton-Raphson iteration — no closed form solution exists for yield, so the algorithm guesses, checks against market price, and adjusts until the difference is under 1e-10.

---

## Project Structure
```
src/
├── components/
│   ├── atoms/          AppText, Badge, Icon, Divider
│   ├── molecules/      Card, InputField, ListTile
│   └── organisms/      InputCard, ResultsSection
│                       CashFlowTable, CashFlowChart
├── screens/            Calculator, History, Settings
├── navigation/         Stack + Tab navigators
├── context/            Theme, Language
├── design/             tokens.ts
├── hooks/              useHistory
├── utils/              bondCalculations.ts
├── localization/       en.ts, ar.ts
└── types/              index.ts
```

---

## Stack

- React Native 0.84.1
- TypeScript
- React Navigation
- AsyncStorage
- i18next
- react-native-chart-kit
- Context API

---

## Setup
```bash
npm install

# iOS
cd ios && pod install && cd ..
npx react-native run-ios

# Android
npx react-native run-android
```

---
