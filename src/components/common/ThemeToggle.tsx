import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { useColorScheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const ThemeToggle = () => {
  const { mode, setMode } = useColorScheme();

  const toggleTheme = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <ToggleButtonGroup
      value={mode}
      exclusive
      onChange={toggleTheme}
      aria-label="text alignment"
    >
      <ToggleButton value="light" aria-label="light mode" size="small">
        <LightModeIcon sx={{ fontSize: 18 }} />
      </ToggleButton>
      <ToggleButton value="dark" aria-label="dark mode" size="small">
        <DarkModeIcon sx={{ fontSize: 18 }} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
