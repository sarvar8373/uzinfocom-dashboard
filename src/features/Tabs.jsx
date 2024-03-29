import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Tabs = ({ darkmode }) => {
  const location = useLocation();
  return (
    <div>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link active={location.pathname === "/tashkilot"}>
            <Link
              className={`links text-decoration-none ${
                darkmode ? "" : "text-light"
              }`}
              to="/tashkilot"
            >
              Top quyi tashkilotlar
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={location.pathname === "/top-tuman"}>
            <Link
              className={`links text-decoration-none ${
                darkmode ? "" : "text-light"
              }`}
              to="/top-tuman"
            >
              Top tumanlar
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={location.pathname === "/top-masala"}>
            <Link
              className={`links text-decoration-none ${
                darkmode ? "" : "text-light"
              }`}
              to="/top-masala"
            >
              Top masalalar
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={location.pathname === "/muddati"}>
            <Link
              className={`links text-decoration-none ${
                darkmode ? "" : "text-light"
              }`}
              to="/muddati"
            >
              Muddati buzilgan
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Tabs;
