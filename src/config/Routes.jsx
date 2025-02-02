import React from "react";
import App from "../App";
import { Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/chat" element={<h1>this is chat section</h1>} />
      <Route path="*" element="404 Page dose not exist"></Route>
    </Routes>
  );
};
export default AppRoutes;
