// src/Routes/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import EnglishHome from "../Pages/EnglishHome";
import SpanishHome from "../Pages/SpanishHome";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/en" element={<EnglishHome />} />
      <Route path="/es" element={<SpanishHome />} />
    </Routes>
  );
}
