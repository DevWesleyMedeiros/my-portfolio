// src/Components/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../Routes"; // rotas centralizadas

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
