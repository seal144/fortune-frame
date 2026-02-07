import { AUTH_TOKEN_KEY } from '@/consts';
import { AUTH_PATH, DASHBOARD_PATH } from '@/router/router';
import { useNavigate } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';

export const useAuth = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const clearQueryAndNavigateToAuth = () => {
    queryClient.clear();
    navigate(AUTH_PATH);
  }

  const login = (token: string) => {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    navigate(DASHBOARD_PATH);
  }

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    clearQueryAndNavigateToAuth();
  }

  const checkAuth = (shouldBeAuthenticated=true) => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);

    if (shouldBeAuthenticated && !token) {
      clearQueryAndNavigateToAuth();
    } else if (!shouldBeAuthenticated && token) {
      navigate(DASHBOARD_PATH);
    }
  }

  return {
    login,
    logout,
    checkAuth,
  }
}
