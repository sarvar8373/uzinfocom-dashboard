import React, { useState } from "react";
import { Breadcrumb, Col } from "react-bootstrap";
import Tabs from "../../../features/Tabs";
import "../Tashkilot.css";
import Table from "../../../widgets/Table";
import Calendar from "../../../shared/ui/Calendar";
import ChangeButton from "../../../shared/ui/ChangeButton";
import Sidebar from "../../../widgets/Sidebar";
import MobileSidebar from "../../../widgets/MobileSidebar";

const Suborganization = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : true;
  });

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

export default Suborganization;
