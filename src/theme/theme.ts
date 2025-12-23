import { createTheme } from '@mui/material/styles';
import RobotoMonoBold from './RobotoMono-Bold.ttf';
import RobotoMonoSemiBold from './RobotoMono-SemiBold.ttf';
import RobotoMonoMedium from './RobotoMono-Medium.ttf';
import RobotoMonoRegular from './RobotoMono-Regular.ttf';
import RobotoMonoLight from './RobotoMono-Light.ttf';
import RobotoMonoExtraLight from './RobotoMono-ExtraLight.ttf';

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#bbc2a5',
        },
        text: {
          primary: '#114',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#23382E',
        },
        text: {
          primary: '#bbe',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Roboto Mono, monospace',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Roboto Mono';
          src: local('Roboto Mono'), local('RobotoMono'), url(${RobotoMonoRegular}) format('truetype');
          font-weight: 400;
        }
        @font-face {
          font-family: 'Roboto Mono';
          src: local('Roboto Mono'), local('RobotoMono'), url(${RobotoMonoBold}) format('truetype');
          font-weight: 700;
        }
        @font-face {
          font-family: 'Roboto Mono';
          src: local('Roboto Mono'), local('RobotoMono'), url(${RobotoMonoSemiBold}) format('truetype');
          font-weight: 600;
        }
        @font-face {
          font-family: 'Roboto Mono';
          src: local('Roboto Mono'), local('RobotoMono'), url(${RobotoMonoMedium}) format('truetype');
          font-weight: 500;
        }
        @font-face {
          font-family: 'Roboto Mono';
          src: local('Roboto Mono'), local('RobotoMono'), url(${RobotoMonoLight}) format('truetype');
          font-weight: 300;
        }
        @font-face {
          font-family: 'Roboto Mono';
          src: local('Roboto Mono'), local('RobotoMono'), url(${RobotoMonoExtraLight}) format('truetype');
          font-weight: 200;
        }
      `,
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:not(.Mui-selected)': {
            color: theme.palette.action.disabled,
            '&:hover': {
              color: theme.palette.action.active,
              backgroundColor: theme.palette.action.hover,
            },
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          textDecorationColor: theme.palette.text.primary,
          '&:hover': {
            color: theme.palette.primary.light,
            textDecorationColor: theme.palette.primary.light,
          },
        }),
      },
    },
  },
});
