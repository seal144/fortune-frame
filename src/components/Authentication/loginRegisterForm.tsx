import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TextField, Button, Stack, Typography, Link, Alert, IconButton } from '@mui/material';
import type { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useLoginQuery, useRegisterQuery } from '@/api/auth';
import { Snackbar } from '@mui/material';
import { useState } from 'react';
import type { ApiErrorResponse } from '@/types';
import { useAuth } from '@/hooks/useAuth';
import { REGISTER_PATH, AUTH_PATH } from '@/router/router';
import CloseIcon from '@mui/icons-material/Close';
import { FormError } from '@/components/common';

const loginSchema = (t: TFunction) =>
  z.object({
    email: z
      .string()
      .min(1, t('required'))
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, t('invalid_email_address')),
    password: z
      .string()
      .min(1, t('required'))
      .min(6, t('password_must_be_at_least_6_characters_long')),
  });

type LoginFormData = z.infer<ReturnType<typeof loginSchema>>;

interface Props {
  isLoginForm?: boolean;
}

export const LoginRegisterForm = ({ isLoginForm = true }: Props) => {
  const { t } = useTranslation();
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
  const [responseError, setResponseError] = useState<string | null>(null);
  const { mutate: loginMutation, isPending: isLoginPending } = useLoginQuery();
  const { mutate: registerMutation, isPending: isRegisterPending } = useRegisterQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema(t)),
  });
  const { login } = useAuth();

  const onSubmit = (data: LoginFormData) => {
    if (isLoginForm) {
      loginMutation(data, {onError: (error) => {
        const errorResponse = JSON.parse(error.message) as ApiErrorResponse;

        if (errorResponse.code === 401 && errorResponse.message) {
          setResponseError(errorResponse.message);
        } else {
          setOpenErrorSnackbar(true);
        }
      }, onSuccess: (data) => {
        login(data.token);
      }});
    } else {
      registerMutation(data, {onError: (error) => {
        const errorResponse = JSON.parse(error.message) as ApiErrorResponse;

        if (errorResponse.code === 409 && errorResponse.message) {
          setResponseError(errorResponse.message);
        } else {
          setOpenErrorSnackbar(true);
        }
      }, onSuccess: (data) => {
        login(data.token);
      }});
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit) as (e: React.FormEvent) => void} onChange={() => { setResponseError(null); }}>
        <Stack gap={2}>
          <Typography variant="h6">
            {isLoginForm ? t('login') : t('sign_up')}
          </Typography>
          <Typography variant="body1">
            {t('or')}{' '}
            <Link href={isLoginForm ? REGISTER_PATH : AUTH_PATH}>
              {isLoginForm ? t('sign_up') : t('login')}
            </Link>{' '}
            {isLoginForm
              ? t('if_you_dont_have_an_account')
              : t('if_you_have_an_account')}
          </Typography>
          <TextField
            {...register('email')}
            label={t('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            {...register('password')}
            type="password"
            label={t('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          
          <Button variant="contained" type="submit" loading={isLoginPending || isRegisterPending}>
            {isLoginForm ? t('login') : t('signup')}
          </Button>
        </Stack>
        {responseError && (
          <FormError message={t(responseError)} />
        )}
      </form>
      {/* TODO: add notification hook with wrapper */}
      <Snackbar
        open={openErrorSnackbar}
        onClose={(event) => {
          setOpenErrorSnackbar(false);
          // this suppose to prevent closing all snackbars at once
          event.preventDefault();
        }}
        autoHideDuration={2000}
      >
        <Alert severity="error" >
          <Stack direction="row" gap={2} alignItems="center">
            {t('an_error_occurred')}
            <IconButton size="small" onClick={() => {setOpenErrorSnackbar(false)}}  sx={{padding: '1px'}}>
              <CloseIcon fontSize="small"/>
            </IconButton>
          </Stack>
        </Alert>
      </Snackbar>
    </>
  );
};
