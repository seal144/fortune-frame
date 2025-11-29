import { ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const LanguageToggler = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl');
  };

  return (
    <ToggleButtonGroup
      value={i18n.language}
      exclusive
      onChange={toggleLanguage}
    >
      <ToggleButton value="pl" aria-label="polish" size="small">
        <Typography sx={{ fontSize: 12 }}>PL</Typography>
      </ToggleButton>
      <ToggleButton value="en" aria-label="english" size="small">
        <Typography sx={{ fontSize: 12 }}>EN</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
