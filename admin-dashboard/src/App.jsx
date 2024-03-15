
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import AdminDasboard from './Components/AdminDasboard';
import Addspon from './Components/AddSponsor/addspon';
import './App.css';

function App() {
  return (
    <Router> 
      <div>
        <Routes>
          <Route path="/" element={<AdminDasboard />} />
          <Route path="/addspon" element={<Addspon />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;