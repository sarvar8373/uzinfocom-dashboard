import React from "react";
import Sidebar from "../../widgets/Sidebar";
import MobileSidebar from "../../widgets/MobileSidebar";
import "../../app/styles/Dashboard.css";
import { Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import useDarkModeStore from "../../shared/fetch/FetchMode";

const GenericLayout = () => {
  const { darkMode } = useDarkModeStore();

  return (
    <div className="d-flex">
      <Sidebar darkMode={darkMode} />
      <MobileSidebar darkMode={darkMode} />
      <Col className={`sides ${darkMode ? "bg-light-body" : "bg-dark-body"}`}>
        <img
          src={darkMode ? "./images/Naqsh 2.png" : "./images/Naqsh 4.png"}
          className="d-inline-block naqsh align-top"
          alt="React Bootstrap logo"
        />
        <div className="rel">
          <Outlet />
        </div>
      </Col>
    </div>
  );
};

export default GenericLayout;
