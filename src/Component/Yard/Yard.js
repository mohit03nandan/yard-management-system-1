import React from 'react'
import Navbar from '../Navbar/Navbar'
import Dashboard from '../Dasboard/Dashboard'
import Checkin from '../Checkin/Checkin';
import Checkout from '../Checkout/Checkout';
import Parking from '../Parking/Parking';
import Docking from '../Docking/Docking';
import { Routes, Route } from "react-router-dom";

const Yard = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Checkin" element={<Checkin />} />
        <Route path="Checkout" element={<Checkout />} />
        <Route path="Parking" element={<Parking />} />
        <Route path="Docking" element={<Docking />} />
      </Routes>
    </div>
  )
}

export default Yard