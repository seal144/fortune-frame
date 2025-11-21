import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import type { Asset } from '@/types';
import { useTranslation } from 'react-i18next';

interface Props {
  assets: Asset[];
}

export const AssetsTable = ({ assets }: Props) => {
  const { t } = useTranslation();

  return (
    <TableContainer>
      <Table>
        <TableHead sx={{ backgroundColor: 'primary.main' }}>
          <TableRow>
            <TableCell>{t('currency_code')}</TableCell>
            <TableCell>{t('currency_name')}</TableCell>
            <TableCell>{t('note')}</TableCell>
            <TableCell align="right">{t('value')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map(asset => (
            <TableRow key={asset.id}>
              <TableCell>{asset.currency_code}</TableCell>
              <TableCell>{asset.currency_name}</TableCell>
              <TableCell>{asset.note}</TableCell>
              <TableCell align="right">{asset.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
