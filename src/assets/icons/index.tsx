export type IconName =
  | 'calculator'
  | 'history'
  | 'settings'
  | 'logo'
  | 'trending'
  | 'bond'
  | 'percent'
  | 'target'
  | 'banknote'
  | 'shield'
  | 'close'
  | 'back'
  | 'check'
  | 'trash'
  | 'refresh'
  | 'copy'
  | 'chevronRight'
  | 'chevronDown'
  | 'info'
  | 'warning'
  | 'success'
  | 'star';
export interface IconDefinition {
  viewBox: string;
  paths: {
    d?: string;
    type: 'path' | 'circle' | 'rect' | 'line';
    stroke?: boolean;
    strokeWidth?: number;
    strokeLinecap?: 'round' | 'square' | 'butt';
    strokeLinejoin?: 'round' | 'miter' | 'bevel';
    fill?: string;
    cx?: number;
    cy?: number;
    r?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    rx?: number;
  }[];
}
export const ICONS: Record<IconName, IconDefinition> = {
  calculator: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'path',
        d: 'M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z',
        stroke: true,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
      },
      {
        type: 'path',
        d: 'M7 8h10M7 12h4M7 16h4M15 12h2M15 16h2',
        stroke: true,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
      },
    ],
  },
  history: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'circle',
        cx: 12,
        cy: 12,
        r: 9,
        stroke: true,
        strokeWidth: 1.8,
      },
      {
        type: 'path',
        d: 'M12 7v5l3 3',
        stroke: true,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
  settings: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'circle',
        cx: 12,
        cy: 12,
        r: 3,
        stroke: true,
        strokeWidth: 1.8,
      },
      {
        type: 'path',
        d: 'M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z',
        stroke: true,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
  logo: {
    viewBox: '0 0 48 48',
    paths: [
      {
        type: 'rect',
        x: 0,
        y: 0,
        width: 48,
        height: 48,
        rx: 12,
        stroke: false,
        fill: 'accent',
      },
      {
        type: 'path',
        d: 'M6 38 C12 38 16 24 24 20 C32 16 36 8 42 6',
        stroke: true,
        strokeWidth: 2.5,
        strokeLinecap: 'round',
      },
      {
        type: 'circle',
        cx: 6,
        cy: 38,
        r: 3,
        stroke: false,
      },
      {
        type: 'circle',
        cx: 24,
        cy: 20,
        r: 3,
        stroke: false,
      },
      {
        type: 'circle',
        cx: 42,
        cy: 6,
        r: 3,
        stroke: false,
      },
      {
        type: 'path',
        d: 'M38 10 L42 6 L46 10',
        stroke: true,
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
  trending: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'path',
        d: 'M23 6l-9.5 9.5-5-5L1 18',
        stroke: true,
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      {
        type: 'path',
        d: 'M17 6h6v6',
        stroke: true,
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
  bond: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'path',
        d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
        stroke: true,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
  percent: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'circle',
        cx: 6,
        cy: 6,
        r: 2,
        stroke: true,
        strokeWidth: 1.8,
      },
      {
        type: 'circle',
        cx: 18,
        cy: 18,
        r: 2,
        stroke: true,
        strokeWidth: 1.8,
      },
      {
        type: 'path',
        d: 'M20 4L4 20',
        stroke: true,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
      },
    ],
  },
  target: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'circle',
        cx: 12,
        cy: 12,
        r: 10,
        stroke: true,
        strokeWidth: 1.8,
      },
      {
        type: 'circle',
        cx: 12,
        cy: 12,
        r: 6,
        stroke: true,
        strokeWidth: 1.8,
      },
      {
        type: 'circle',
        cx: 12,
        cy: 12,
        r: 2,
        stroke: false,
      },
    ],
  },
  banknote: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'path',
        d: 'M2 6h20a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V7a1 1 0 011-1z',
        stroke: true,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
      },
      {
        type: 'circle',
        cx: 12,
        cy: 12,
        r: 3,
        stroke: true,
        strokeWidth: 1.8,
      },
      {
        type: 'path',
        d: 'M6 10v4',
        stroke: true,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
      },
      {
        type: 'path',
        d: 'M18 10v4',
        stroke: true,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
      },
    ],
  },
  shield: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'path',
        d: 'M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z',
        stroke: true,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
  close: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'path',
        d: 'M18 6L6 18M6 6l12 12',
        stroke: true,
        strokeWidth: 2,
        strokeLinecap: 'round',
      },
    ],
  },
  back: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'path',
        d: 'M19 12H5M12 19l-7-7 7-7',
        stroke: true,
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
  check: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'path',
        d: 'M20 6L9 17l-5-5',
        stroke: true,
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
  trash: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'path',
        d: 'M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6',
        stroke: true,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
  refresh: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'path',
        d: 'M23 4v6h-6M1 20v-6h6',
        stroke: true,
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      {
        type: 'path',
        d: 'M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15',
        stroke: true,
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
  copy: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'path',
        d: 'M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2',
        stroke: true,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
      },
      {
        type: 'path',
        d: 'M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z',
        stroke: true,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
      },
    ],
  },
  chevronRight: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'path',
        d: 'M9 18l6-6-6-6',
        stroke: true,
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
  chevronDown: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'path',
        d: 'M6 9l6 6 6-6',
        stroke: true,
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
  info: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'circle',
        cx: 12,
        cy: 12,
        r: 10,
        stroke: true,
        strokeWidth: 1.8,
      },
      {
        type: 'path',
        d: 'M12 16v-4M12 8h.01',
        stroke: true,
        strokeWidth: 2,
        strokeLinecap: 'round',
      },
    ],
  },
  warning: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'path',
        d: 'M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z',
        stroke: true,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      {
        type: 'path',
        d: 'M12 9v4M12 17h.01',
        stroke: true,
        strokeWidth: 2,
        strokeLinecap: 'round',
      },
    ],
  },
  success: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'circle',
        cx: 12,
        cy: 12,
        r: 10,
        stroke: true,
        strokeWidth: 1.8,
      },
      {
        type: 'path',
        d: 'M9 12l2 2 4-4',
        stroke: true,
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
  star: {
    viewBox: '0 0 24 24',
    paths: [
      {
        type: 'path',
        d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
        stroke: true,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
};
