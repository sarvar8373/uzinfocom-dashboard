import React, { useState } from "react";
import { Breadcrumb, Col } from "react-bootstrap";
import Tabs from "../../components/Tabs";
import "./Tashkilot.css";
import Table from "../../components/Table";
import Calendar from "../../components/Calendar";
import ChangeButton from "../../components/ChangeButton";
import Sidebar from "../../components/Sidebar";
import img4 from "../../assets/Naqsh 2.png";
import img7 from "../../assets/Naqsh 4.png";
import img2 from "../../assets/Vector.png";
import img3 from "../../assets/Vector2.png";

const QuyiTashkilot = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };
  const headers1 = ["T/R", "Davlat tashkilotlari"];
  const rows1 = [
    [
      "1",
      "Raqobatni rivojlantirish va iste’molchilar huquqlarini himoya qilish qo’mitasi",
    ],
    [
      "2",
      "Raqobatni rivojlantirish va iste’molchilar  huquqlarini himoya qilish qo’mitasining Buxoro viloyati hududiy boshqarmasi",
    ],
    [
      "3",
      "Qoraqalpog’iston Reaspublikasi Raqobatni rivojlantirish va iste’molchilar huquqlarini himoya qilish qo’mitasi",
    ],
    [
      "4",
      "Raqobatni rivojlantirish va iste’molchilar huquqlarini himoya qilish qo’mitasining Namangan viloyati hududiy boshqarmasi",
    ],
    [
      "5",
      "Raqobatni rivojlantirish va iste’molchilar huquqlarini himoya qilish qo’mitasining Navoiy viloyati hududiy boshqarmasi",
    ],
    [
      "6",
      "Raqobatni rivojlantirish va iste’molchilar huquqlarini himoya qilish qo’mitasining Qashqadaryo viloyati hududiy boshqarmasi",
    ],
    [
      "7",
      "Raqobatni rivojlantirish va iste’molchilar huquqlarini himoya qilish qo’mitasining Jizzax viloyati hududiy boshqarmasi",
    ],
    [
      "8",
      "Raqobatni rivojlantirish va iste’molchilar huquqlarini himoya qilish qo’mitasining Samarqand viloyati hududiy boshqarmasi",
    ],
    [
      "9",
      "Raqobatni rivojlantirish va iste’molchilar huquqlarini himoya qilish qo’mitasining Samarqand viloyati hududiy boshqarmasi",
    ],
    [
      "10",
      "Raqobatni rivojlantirish va iste’molchilar huquqlarini himoya qilish qo’mitasining Samarqand viloyati hududiy boshqarmasi",
    ],
  ];
  return (
    <div className="d-flex">
      <Col
        className={`sidebar d-flex flex-column justify-content-between ${
          darkMode ? "bg-lighting" : "bg-dark-sidebar"
        }`}
      >
        <Sidebar darkMode={darkMode} />
        <img
          src={darkMode ? img2 : img3} // width="100%"
          // height="250"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Col>
      <Col className={`sides ${darkMode ? "bg-light-body" : "bg-dark-body"}`}>
        <img
          src={darkMode ? img4 : img7}
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
                Top quyi tashkilotlar
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
                <div className="tbl">
                  <Table
                    headers={headers1}
                    rows={rows1}
                    height={"500px"}
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

export default QuyiTashkilot;
