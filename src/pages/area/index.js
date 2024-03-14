import React, { useState } from "react";
import { Breadcrumb, Col } from "react-bootstrap";
import { PiMapPinLineLight } from "react-icons/pi";
import TableIndex from "../../widgets/TableIndex";
import "./Hudud.css";
import Calendar from "../../shared/ui/Calendar";
import ChangeButton from "../../shared/ui/ChangeButton";
import Sidebar from "../../widgets/Sidebar";
import MobileSidebar from "../../widgets/MobileSidebar";

const Area = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : true;
  });

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

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
                  Hududlar kesimida
                </Breadcrumb.Item>
              </Breadcrumb>
              <h2 className={`${darkMode ? "" : "text-light"}`}>
                Hududlar kesimida
              </h2>
            </div>
            <div>
              <ChangeButton dark={darkMode} onClick={toggleDarkMode} />
              <Calendar darkMode={darkMode} />
            </div>
          </div>
          <div className="d-flex justify-content-between flex-wrap my-4">
            <div
              className={`card cf border-0 mb-3 mx-3 p-0 ${
                darkMode ? "bg-lighting" : "bg-dark-light"
              }`}
            >
              <div>
                <div className="text-end">
                  <h3
                    className={`card-title ${darkMode ? "" : "text-light"}`}
                    style={{ fontSize: "24px" }}
                  >
                    O‘zbekiston Respublikasi
                  </h3>
                  <p
                    className={`card-text pe-4  ${
                      darkMode ? "text-secondary" : "text-light"
                    }`}
                    style={{ fontSize: "18px" }}
                  >
                    Murojaatlar soni: 188 528
                  </p>
                </div>
                <img
                  src={darkMode ? "./images/map2.png" : "./images/map3.png"}
                  width={"100%"}
                  alt=""
                  className=" px-2 py-3"
                />
              </div>
              <img
                src={darkMode ? "./images/Naqsh 6.png" : "./images/Naqsh 5.png"}
                alt=""
                className="card-images"
              />
              <div>
                <div
                  className="card mt-2 box border-0"
                  id={`${darkMode ? "box-lightining" : "bg-dark-box"}`}
                >
                  <div className="box-txt">
                    <h4 className={` ${darkMode ? "" : "text-light"}`}>
                      01.09.2022
                    </h4>
                    <h3 className={` ${darkMode ? "" : "text-light"}`}>
                      188 528
                    </h3>
                  </div>
                </div>
                <div
                  className="card mt-2 box border-0"
                  id={`${darkMode ? "box-lightining" : "bg-dark-box"}`}
                >
                  <div className="box-txt">
                    <h4 className={` ${darkMode ? "" : "text-light"}`}>
                      01.09.2023
                    </h4>
                    <div className="d-flex ">
                      <h3 className={`pe-1 ${darkMode ? "" : "text-light"}`}>
                        164 218
                      </h3>
                      <span style={{ fontSize: "12px", color: "#05CD99" }}>
                        +2.45%
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="card mt-2 box border-0"
                  id={`${darkMode ? "box-lightining" : "bg-dark-box"}`}
                >
                  <div className="box-txt">
                    <h4 className={` ${darkMode ? "" : "text-light"}`}>
                      Farqi
                    </h4>
                    <div className="d-flex ">
                      <h3 className={`pe-1 ${darkMode ? "" : "text-light"}`}>
                        188 528
                      </h3>
                      <span style={{ fontSize: "12px", color: "#05CD99" }}>
                        +14.45%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`card cf border-0 mb-3 mx-3 p-0 ${
                darkMode ? "bg-lighting" : "bg-dark-light"
              }`}
            >
              <div>
                <h3
                  className={`card-title ${darkMode ? "" : "text-light"}`}
                  style={{ fontSize: "24px" }}
                >
                  <PiMapPinLineLight
                    style={{ width: "36px", height: "36px" }}
                  />
                  Hududlar kesimida dinamika
                </h3>
              </div>
              <TableIndex
                none={"none"}
                width={"100%"}
                height={"600px"}
                darkMode={darkMode}
              />
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Area;
