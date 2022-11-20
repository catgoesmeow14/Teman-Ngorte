import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import Dashboard from '../pages/dashboard/Dashboard';
import Chat from '../pages/chat/Chat';
import PublicRoutes from './PublicRoutes';
import Login from '../pages/login/Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="chat" element={<Chat />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
