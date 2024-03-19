import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { RxDashboard } from "react-icons/rx";
import {
  PiMapPinLineLight,
  PiSuitcaseLight,
  PiDoorLight,
} from "react-icons/pi";

const Sidebar = ({ darkMode }) => {
  const location = useLocation();

  return (
    <Col
      className={`sidebar d-flex flex-column justify-content-between ${
        darkMode ? "bg-lighting" : "bg-dark-sidebar"
      }`}
      id="comp"
    >
      <Nav
        defaultActiveKey="/home"
        className="flex-column justify-content-between flex-nowrap"
        style={{ height: "auto" }}
      >
        <div>
          <Navbar.Brand className="side" href="#home">
            <img
              src="./images/logo.png"
              width="118"
              height="56"
              className="align-top d-inline-block"
              alt="logo"
            />
          </Navbar.Brand>
          <div className="links">
            <Link className="text-decoration-none" to="/">
              <Nav.Link
                className={`${darkMode ? "lnk" : "dark"} ps-0 `}
                href="/"
                active={location.pathname === "/"}
              >
                <div className={`side ${darkMode ? "" : "text-light"} `}>
                  <RxDashboard
                    className="icon pe-1"
                    style={{ width: "26px", height: "26px" }}
                  />
                  Umumiy statistika
                </div>
              </Nav.Link>
            </Link>
            <Link className="text-decoration-none" to="/hududlar">
              <Nav.Link
                className={`${darkMode ? "lnk" : "dark"} ps-0 `}
                eventKey="link-1"
                href="/hududlar"
                active={location.pathname === "/hududlar"}
              >
                <div className={`side ${darkMode ? "" : "text-light"} `}>
                  <PiMapPinLineLight
                    className="icon pe-1"
                    style={{ width: "26px", height: "26px" }}
                  />
                  Hududlar kesimida
                </div>
              </Nav.Link>
            </Link>
            <Link className="text-decoration-none" to="/sohalar">
              <Nav.Link
                className={`${darkMode ? "lnk" : "dark"} ps-0 `}
                href="/sohalar"
                eventKey="link-2"
                active={location.pathname === "/sohalar"}
              >
                <div className={`side ${darkMode ? "" : "text-light"} `}>
                  <PiSuitcaseLight
                    className="icon pe-1"
                    style={{ width: "26px", height: "26px" }}
                  />
                  Sohalar kesimida
                </div>
              </Nav.Link>
            </Link>
            <Link className="text-decoration-none" to="/tashkilot">
              <Nav.Link
                className={`lnk ${darkMode ? "" : "dark"} ps-0 `}
                eventKey="link-3"
                href="/tashkilot"
                active={
                  location.pathname === "/tashkilot" ||
                  location.pathname === "/top-tuman" ||
                  location.pathname === "/top-masala" ||
                  location.pathname === "/muddati"
                }
              >
                <div className={`side ${darkMode ? "" : "text-light"} `}>
                  <PiDoorLight
                    className="icon pe-1"
                    style={{ width: "26px", height: "26px" }}
                  />
                  Tashkilotlar kesimida
                </div>
              </Nav.Link>
            </Link>
          </div>
        </div>
      </Nav>
      <img
        src={darkMode ? "./images/Vector.png" : "./images/Vector2.png"}
        className="align-top"
        alt="Naqsh"
      />
    </Col>
  );
};

export default Sidebar;
