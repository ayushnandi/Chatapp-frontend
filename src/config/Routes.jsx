import React from "react";
import App from "../App";
import { Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/chat" element={<h1>this is chat section</h1>} />
    </Routes>
  );
};
export default AppRoutes;
