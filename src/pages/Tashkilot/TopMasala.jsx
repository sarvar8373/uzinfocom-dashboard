import React, { useState } from "react";
import { Breadcrumb, Col } from "react-bootstrap";
import Tabs from "../../components/Tabs";
import Table from "../../components/Table";
import Calendar from "../../components/Calendar";
import ChangeButton from "../../components/ChangeButton";
import img4 from "../../assets/Naqsh 2.png";
import img7 from "../../assets/Naqsh 4.png";
import img2 from "../../assets/Vector.png";
import img3 from "../../assets/Vector2.png";
import Sidebar from "../../components/Sidebar";

const TopMasala = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };
  const headers1 = [
    "T/R",
    "Masala nomi",
    "2022 yil",
    "2023 yil",
    "Farqi",
    "O’zgarish",
  ];
  const rows1 = [
    ["1", "Aliment undirish so’rovi", "207", "103", "-104", "50%"],
    ["2", "Oilaviy nizolar", "207", "103", "-104", "50%"],
    [
      "3",
      "Yashash sharoitlarini yaxshilash, uy-joyni ta’mirlash va kurish uchun yordam",
      "207",
      "103",
      "-104",
      "50%",
    ],
    [
      "4",
      "Muxtojlarga bir martalik moddiy yordam",
      "207",
      "103",
      "-104",
      "50%",
    ],
    [
      "5",
      "Tadbirkorlik faoliyatini rivojelantirish uchun kredit",
      "207",
      "103",
      "-104",
      "50%",
    ],
    [
      "6",
      "Gaz ballonni suyultirilgan gaz bilan to’ldirishdagi muammolar",
      "207",
      "103",
      "-104",
      "50%",
    ],
    [
      "7",
      "Davolanish va jarrohlik amaliyoti uchun moddiy yordam (mamlakat ichida)",
      "207",
      "103",
      "-104",
      "50%",
    ],
    [
      "8",
      "Surishtiruv va tergov xarakatlaridan norozilik",
      "207",
      "103",
      "-104",
      "50%",
    ],
    [
      "9",
      "Majburiy ijro byurosi xodimi xatti- harakatlari",
      "207",
      "103",
      "-104",
      "50%",
    ],
    ["10", "Uy-joy bilan ta’minlash", "207", "103", "-104", "50%"],
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
                Top Masalalar
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

export default TopMasala;
