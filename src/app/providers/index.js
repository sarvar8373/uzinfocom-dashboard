import React from "react";
import "../../pages/home/Dashboard.css";
import Home from "../../pages/home/index";

import { Route, Routes } from "react-router-dom";
import Area from "../../pages/area/index";
import Suborganization from "../../pages/organization/suborganization/index";
import TopArea from "../../pages/organization/top-area/index";
import TopIssue from "../../pages/organization/top-issue/index";
import Expired from "../../pages/organization/expired/index";
import Fields from "../../pages/fields/index";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hududlar" element={<Area />} />
      <Route path="/sohalar" element={<Fields />} />
      <Route path="/tashkilot" element={<Suborganization />} />
      <Route path="/tashkilot/top-tuman" element={<TopArea />} />
      <Route path="/tashkilot" element={<Suborganization />} />
      <Route path="/tashkilot/top-masala" element={<TopIssue />} />
      <Route path="/tashkilot/muddati" element={<Expired />} />
    </Routes>
  );
};

export default Routing;
