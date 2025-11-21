import { useMemo } from 'react';
import { Alert, Button, Typography } from '@mui/material';
import { useAssetsQuery } from '@/api/assets';
import { PageTitle } from '@/components/common';
import { AssetsTable, AssetsTableSkeleton } from '@/components/Home';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t, i18n } = useTranslation();
  const { data: assets, isLoading, error } = useAssetsQuery();

  const content = useMemo(() => {
    if (isLoading) return <AssetsTableSkeleton />;
    if (error)
      return <Alert severity="error">{t('error_fetching_assets')}</Alert>;
    if (!assets || assets.length === 0)
      return <Typography textAlign="center">{t('no_assets_added')}</Typography>;
    return <AssetsTable assets={assets} />;
  }, [isLoading, error, assets, t]);

  const changeLanguage = async (language: string) => {
    await i18n.changeLanguage(language);
  };

  return (
    <>
      <PageTitle title={t('Your assets')} />
      <Button
        variant="contained"
        onClick={() => {
          changeLanguage('pl');
        }}
      >
        PL
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          changeLanguage('en');
        }}
      >
        EN
      </Button>
      {content}
    </>
  );
};
