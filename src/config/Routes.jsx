import React from "react";
import App from "../App";
import { Route, Routes } from "react-router";
import Chats from './../components/Chats';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/chat" element={<Chats/>} />
      <Route path="*" element="404 Page dose not exist"></Route>
    </Routes>
  );
};
export default AppRoutes;
