// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; // 1. Import Routes and Route
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <>
      <Routes>
        {/* 2. Define your individual paths */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
};

export default App;
