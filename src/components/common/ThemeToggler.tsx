import { useColorScheme } from '@mui/material/styles';
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from '@mui/icons-material';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

export const ThemeToggler = () => {
  const { mode, setMode } = useColorScheme();

  const toggleTheme = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <ToggleButtonGroup value={mode} exclusive onChange={toggleTheme}>
      <ToggleButton value="light" aria-label="light mode" size="small">
        <LightModeIcon sx={{ fontSize: 18 }} />
      </ToggleButton>
      <ToggleButton value="dark" aria-label="dark mode" size="small">
        <DarkModeIcon sx={{ fontSize: 18 }} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
