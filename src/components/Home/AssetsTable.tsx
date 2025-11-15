import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import type { Asset } from '@/types';

interface Props {
  assets: Asset[];
}

export const AssetsTable = ({ assets }: Props) => {
  return (
    <TableContainer>
      <Table>
        <TableHead sx={{ backgroundColor: 'primary.main' }}>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Note</TableCell>
            <TableCell align="right">Value</TableCell>
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
