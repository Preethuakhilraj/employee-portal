import './App.css'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Form from './Pages/Form'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router basename="/employee-portal">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
