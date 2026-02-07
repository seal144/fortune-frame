export interface Asset {
  id: number;
  value: number;
  order: number | null;
  note: string | null;
  currency_code: string;
  currency_name: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface ApiError {
  error?: string;
}

export interface ApiErrorResponse {
  code: number;
  message?: string;
}