import React from "react";
import { Link, useLocation } from "react-router-dom"; // Add this import
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import img from "../assets/logo.png";
import { RxDashboard } from "react-icons/rx";
import {
  PiMapPinLineLight,
  PiSuitcaseLight,
  PiDoorLight,
} from "react-icons/pi";

const Sidebar = ({ darkMode }) => {
  const location = useLocation();

  return (
    <Nav
      defaultActiveKey="/home"
      className="flex-column justify-content-between flex-nowrap"
      style={{
        height: "auto",
      }}
    >
      <div>
        <Navbar.Brand className="side" href="#home">
          <img
            src={img}
            width="118"
            height="56"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <div className="links">
          <Nav.Link
            className={`${darkMode ? "lnk" : "dark"} ps-0 `}
            href="/"
            active={location.pathname === "/"}
          >
            <Link className="text-decoration-none" to="/">
              <div className={`side ${darkMode ? "" : "text-light"} `}>
                <RxDashboard
                  className="icon pe-1"
                  style={{ width: "26px", height: "26px" }}
                />
                Umumiy statistika
              </div>
            </Link>
          </Nav.Link>
          <Nav.Link
            className={`${darkMode ? "lnk" : "dark"} ps-0 `}
            eventKey="link-1"
            active={location.pathname === "/hududlar"}
          >
            <Link className="text-decoration-none" to="/hududlar">
              <div className={`side ${darkMode ? "" : "text-light"} `}>
                <PiMapPinLineLight
                  className="icon pe-1"
                  style={{ width: "26px", height: "26px" }}
                />
                Hududlar kesimida
              </div>
            </Link>
          </Nav.Link>
          <Nav.Link
            className={`${darkMode ? "lnk" : "dark"} ps-0 `}
            eventKey="link-2"
            active={location.pathname === "/sohalar"}
          >
            <Link className="text-decoration-none" to="/sohalar">
              <div className={`side ${darkMode ? "" : "text-light"} `}>
                <PiSuitcaseLight
                  className="icon pe-1"
                  style={{ width: "26px", height: "26px" }}
                />
                Sohalar kesimida
              </div>
            </Link>
          </Nav.Link>
          <Nav.Link
            className={`lnk ${darkMode ? "" : "dark"} ps-0 `}
            eventKey="link-3"
            active={
              location.pathname === "/tashkilot" ||
              location.pathname === "/tashkilot/top-tuman" ||
              location.pathname === "/tashkilot/top-masala" ||
              location.pathname === "/tashkilot/muddati"
            }
          >
            <Link className="text-decoration-none" to="/tashkilot">
              <div className={`side ${darkMode ? "" : "text-light"} `}>
                <PiDoorLight
                  className="icon pe-1"
                  style={{ width: "26px", height: "26px" }}
                />
                Tashkilotlar kesimida
              </div>
            </Link>
          </Nav.Link>
        </div>
      </div>
    </Nav>
  );
};

export default Sidebar;
