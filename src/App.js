import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Use BrowserRouter
import Login from './login';
import PerformanceTestPage from "./PerformanceTestPage";
import './App.css';

function App() {
  return (
    <div className="App">
       
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/performance" element={<PerformanceTestPage />} />
      </Routes>
    </div>
  );
}

export default App;
