import MuiContainer from '@mui/material/Container';
import type { SxProps, Theme } from '@mui/material/styles';

interface Props {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const Container = ({ children, sx }: Props) => {
  return (
    <MuiContainer maxWidth="lg" sx={sx}>
      {children}
    </MuiContainer>
  );
};
