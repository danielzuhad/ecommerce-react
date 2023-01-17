import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import TestPage from "../pages/TestPage";

export default function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Test" element={<TestPage />} />
    </Routes>
  );
}
