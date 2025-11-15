export interface Asset {
  id: number;
  value: number;
  order: number | null;
  note: string | null;
  currency_code: string;
  currency_name: string;
}
