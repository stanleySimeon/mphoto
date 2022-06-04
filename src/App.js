import React from 'react';
import Home from './Components/Home/Home';
import Work from './Components/Work/Work';
// import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Home />
      <Work />
      <Contact />
    </div>
  );
}