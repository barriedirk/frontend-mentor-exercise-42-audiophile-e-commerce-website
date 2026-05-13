export const REGEX_MASKS = {
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  EMAIL_CHARS: /^[a-zA-Z0-9._%+\-@]*$/,
  INTEGER_NUMBERS: /^-?[0-9]*$/,
  WHOLE_NUMBERS: /^(\d*|0)$/,
  PHONE_NUMBER: /^([0-9]\d*)$/,
  ALPHA_NUMERIC: /^[A-Za-z0-9]*$/,
  ALPHA_NUMERIC_WITH_SPACES: /^[A-Za-z0-9 ]*$/,
};

export type RegexMaskType = keyof typeof REGEX_MASKS | "Custom";
