import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default RoutesMain;
