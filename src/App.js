import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
    </div>
  );
}

export default App;