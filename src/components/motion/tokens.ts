// Central motion timing tokens — do not scatter ad-hoc values.
// GPU-friendly properties only (transform / opacity).

export const motionDuration = {
  fast: 0.18,
  normal: 0.4,
  medium: 0.6,
  slow: 0.8,
} as const;

export const motionEase = {
  standard: [0.22, 1, 0.36, 1],
} as const;

export const motionStagger = {
  tight: 0.06,
  normal: 0.08,
  loose: 0.12,
  section: 0.1,
} as const;
