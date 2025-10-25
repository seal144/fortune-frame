import MuiContainer from '@mui/material/Container';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return <MuiContainer maxWidth="lg">{children}</MuiContainer>;
};
