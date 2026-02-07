import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';

export const AuthGuard = ({ children, shouldBeAuthenticated = true }: { children: React.ReactNode, shouldBeAuthenticated?: boolean }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth(shouldBeAuthenticated);

    setAuthChecked(true);
  }, [checkAuth, shouldBeAuthenticated]);

  if (!authChecked) {
    return null;
  }

  return children;
}

