import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BubbleChat from '../pages/chat/BubbleChat';
import Chat from '../pages/chat/Chat';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="bubblechat" element={<BubbleChat />} />
      <Route path="chat" element={<Chat />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
