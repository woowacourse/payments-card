const REGEX = {
  numbers: /^\d*$/,
  stringNumbers: /\d/gi,
  oneToNine: /^[1-9]$/,
  month: /^(0?[1-9]|1[0-2])$/,
  english: /^[a-zA-Z\s]*$/,
  zero: /^[0]+$/,
  specificCardFormat: /^(\d{0,4})?(\d{0,6})?(\d{0,5})?/,
  normalCardFormat: /^(\d{0,4})?(\d{0,4})?(\d{0,4})?(\d{0,4})?/,
  space: /\s/g,
} as const;

export default REGEX;
