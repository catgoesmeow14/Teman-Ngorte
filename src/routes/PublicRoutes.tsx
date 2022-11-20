import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LoginType } from '../types/login-type';

const PublicRoutes = () => {
  const getUser = localStorage.getItem('user');
  let token: string;
  let user: LoginType;

  if (typeof getUser === 'string') {
    user = JSON.parse(getUser);
    token = user.token;
  }

  const useAuthentication = () => {
    if (token) {
      return true;
    }
    return false;
  };

  const isAuth = useAuthentication();

  return isAuth ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
