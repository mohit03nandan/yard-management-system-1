import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Component/Login/Login';
import Verification from './Component/verification/Verification';
import Yard from './Component/Yard/Yard';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Verification" element={<Verification />} />
          <Route path="/yard/*" element={<Yard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
