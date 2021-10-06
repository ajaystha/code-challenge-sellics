interface ColorsType {
  blue: string;
  lighterGray: string;
  lightGray: string;
  gray: string;
  darkGray: string;
}

export interface ThemeType {
  colors: ColorsType;
  fontFamily: string;
}

export const theme: ThemeType = {
  colors: {
    blue: '#3b55e6',
    lighterGray: '#f0f2f7',
    lightGray: '#e3e8f0',
    gray: '#707070',
    darkGray: '#454545',
  },

  fontFamily: "'Segoe UI',sans-serif",
};
