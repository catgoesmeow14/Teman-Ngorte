import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Chat from '../pages/chat/Chat';
import Login from '../pages/login/Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="chat" element={<Chat />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
