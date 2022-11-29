import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {
  const getToken = localStorage.getItem('token');
  let token: string;

  if (typeof getToken === 'string') {
    token = JSON.parse(getToken);
  }
  const usePostAuthentication = () => {
    if (token) {
      return true;
    }
    return false;
  };

  const isAuth = usePostAuthentication();

  return isAuth ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
