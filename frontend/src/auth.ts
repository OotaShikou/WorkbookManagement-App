import router, { NextRouter } from 'next/router';
import { parseCookies } from 'nookies';

export const isAuthenticated = (): boolean => {
  const { 'access-token': accessToken, uid, client } = parseCookies();

  return !!accessToken && !!uid && !!client;
};

export const requireAuthentication = (pathname: string) => {
  const middleware = () => {
    const ignoredRoutes = ['/sign_in', '/sign_up'];

    if (!isAuthenticated() && !ignoredRoutes.includes(pathname)) {
      router.replace('/sign_in'); // リダイレクト先を指定
    }
  };

  return middleware;
};
