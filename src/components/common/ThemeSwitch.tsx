import { Stack, Switch, useColorScheme } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export const ThemeSwitch = () => {
  const { mode, setMode } = useColorScheme();

  const toggleTheme = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <Stack
      alignItems="center"
      gap={0}
      sx={{ cursor: 'pointer' }}
      onClick={toggleTheme}
    >
      {mode === 'dark' ? (
        <DarkModeIcon sx={{ fontSize: 20 }} />
      ) : (
        <LightModeIcon sx={{ fontSize: 20 }} />
      )}
      <Switch checked={mode === 'dark'} onChange={toggleTheme} size="small" />
    </Stack>
  );
};
