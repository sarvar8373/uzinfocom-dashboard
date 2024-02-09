import React from "react";
import "./Dashboard.css";
import Home from "./Home";

import { Route, Routes } from "react-router-dom";
import Hudud from "../Hudud/Hudud";
import Sohalar from "../Sohalar/Sohalar";
import QuyiTashkilot from "../Tashkilot/QuyiTashkilot";
import TopHudud from "../Tashkilot/TopHudud";
import TopMasala from "../Tashkilot/TopMasala";
import Muddat from "../Tashkilot/Muddat";

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hududlar" element={<Hudud />} />
      <Route path="/sohalar/" element={<Sohalar />} />
      <Route path="/tashkilot" element={<QuyiTashkilot />} />
      <Route path="/tashkilot/top-tuman" element={<TopHudud />} />
      <Route path="/tashkilot" element={<QuyiTashkilot />} />
      <Route path="/tashkilot/top-masala" element={<TopMasala />} />
      <Route path="/tashkilot/muddati" element={<Muddat />} />
    </Routes>
  );
};

export default Dashboard;
