import { createTheme } from '@mui/material';

const customTheme = {
  colors: {
    buttons: {
      hoverAccent: '#348844',
      hoverWhite: '#eef',
      white: '#FFFFFF',
      accent: '#4a9448',
    },
    green: '#24CCA7',
    purpure: '#FF6596',
    text: '#000000',
    helperText: '#BDBDBD',
    iconColor: '#E0E0E0',
    fone: '#E5E5E5',
    error: '#97000099',
  },
  spacing: value => `${4 * value}px`,
};

export const materialTheme = createTheme(customTheme);
