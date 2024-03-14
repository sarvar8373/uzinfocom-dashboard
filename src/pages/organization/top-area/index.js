import React, { useState } from "react";
import { Breadcrumb, Col } from "react-bootstrap";
import Tabs from "../../../features/Tabs";
import "../Tashkilot.css";
import Table from "../../../widgets/Table";
import Sidebar from "../../../widgets/Sidebar";
import ChangeButton from "../../../shared/ui/ChangeButton";
import Calendar from "../../../shared/ui/Calendar";
import MobileSidebar from "../../../widgets/MobileSidebar";

const TopArea = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : true;
  });

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  const headers1 = [
    "T/R",
    "Tuman/shahar nomi",
    "3 511",
    "3 381",
    "-130",
    "-4%",
  ];
  const rows1 = [
    ["1", "Yunusobod tumani", "207", "103", "-104", "-50%"],
    ["2", "Yashnobod tumani", "207", "103", "-104", "-50%"],
    ["3", "Olmazor tumani", "207", "103", "-104", "-50%"],
    ["4", "Navoiy shaxri", "207", "103", "-104", "-50%"],
    ["5", "Uchtepa tumani", "207", "103", "-104", "-50%"],
    ["6", "Sergeli tumani", "207", "103", "-104", "-50%"],
    ["7", "Mirzo Ulugbek tumani", "207", "103", "-104", "-50%"],
    ["8", "Samarqand shahri", "207", "103", "-104", "-50%"],
    ["9", "Dehqonobod tumani", "207", "103", "-104", "-50%"],
    ["10", "Samarqand shahri", "207", "103", "-104", "-50%"],
  ];
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
        <div className="rel hgh">
          <div className="head d-flex flex-wrap justify-content-between">
            <div>
              <Breadcrumb>
                <Breadcrumb.Item
                  active
                  className={`${
                    darkMode ? "" : "text-light s breadcrumb-item::before"
                  }`}
                >
                  Pages
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  active
                  className={`${darkMode ? "" : "text-light"}`}
                >
                  Tashkilotlar kesimida
                </Breadcrumb.Item>
              </Breadcrumb>
              <h2 className={`${darkMode ? "" : "text-light"}`}>
                Top tumanlar
              </h2>
            </div>
            <div>
              <ChangeButton dark={darkMode} onClick={toggleDarkMode} />
              <Calendar darkMode={darkMode} />
            </div>
          </div>
          <div className="tabing">
            <Tabs darkMode={darkMode} />
            <div
              className={`card border-0 ${darkMode ? "" : "bg-dark-light"}`}
              style={{ height: "auto" }}
            >
              <div>
                <h3
                  className={`card-title ${darkMode ? "" : "text-light"}`}
                  style={{ fontSize: "24px" }}
                >
                  O’zbekiston Respublikasi raqobatni rivojlantirish va
                  iste’molchilar huquqlarini himoya qilish qo’mitasi{" "}
                </h3>
                <div className="tbl tab">
                  <Table
                    headers={headers1}
                    height={"500px"}
                    rows={rows1}
                    darkMode={darkMode}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default TopArea;
