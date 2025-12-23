import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TextField, Button, Stack, Typography, Link } from '@mui/material';
import type { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

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
  login?: boolean;
}

export const LoginRegisterForm = ({ login = true }: Props) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema(t)),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit) as (e: React.FormEvent) => void}>
      <Stack gap={2}>
        <Typography variant="h6">
          {login ? t('login') : t('sign_up')}
        </Typography>
        <Typography variant="body1">
          {t('or')}{' '}
          <Link href={login ? '/auth/register' : '/auth'}>
            {login ? t('sign_up') : t('login')}
          </Link>{' '}
          {login
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
        <Button variant="contained" type="submit">
          {login ? t('login') : t('signup')}
        </Button>
      </Stack>
    </form>
  );
};
