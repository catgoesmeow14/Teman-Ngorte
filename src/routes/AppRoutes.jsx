import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Chat from '../pages/chat/Chat';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/dashboard/chat" element={<Chat />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
