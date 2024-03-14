import React from "react";
import { LuLandmark } from "react-icons/lu";
import { TfiStatsUp } from "react-icons/tfi";
import Table from "./Table";

const TableIndex = ({ none, height, darkMode }) => {
  const headers = [
    "T/R",
    "Tuman/Shaxar nomi",
    "2022 yil",
    "2023 yil",
    "Farqi",
    "O’zgarishi",
  ];
  const rows = [
    ["1", "Yunusobod tumani", "207", "207", "207", "207"],
    ["2", "Yashnobod tumani", "207", "207", "207", "207"],
    ["3", "Olmazor tumani", "207", "207", "207", "207"],
    ["4", "Navoiy Shaxri", "207", "207", "207", "207"],
    ["5", "Uchtepa tumani", "207", "207", "207", "207"],
    ["6", "Samarqand shaxri", "207", "207", "207", "207"],
    ["7", "Dehqonood tumani", "207", "207", "207", "207"],
    ["8", "Qarshi shaxri", "207", "207", "207", "207"],
    ["9", "Sarosiyo tumani", "207", "207", "207", "207"],
    ["10", "Nurota tumani", "207", "207", "207", "207"],
  ];
  const headers1 = ["T/R", "Tashkilotlar nomi", "Jami"];
  const rows1 = [
    ["1", "Energetika vazirligi", "207"],
    ["2", "Qurilish va kommunal xo’jalik vazirligi", "207"],
    ["3", "Kambagallikni qisqartirish va bandlik vazirligi", "207"],
    ["4", "Iqtisodiyot va moliya vazirligi", "207"],
    ["5", "Uchtepa tumani", "207"],
    ["6", "Samarqand shaxri", "207"],
    ["7", "Dehqonood tumani", "207"],
    ["8", "Qarshi shaxri", "207"],
    ["9", "Sarosiyo tumani", "207"],
    ["10", "Nurota tumani", "207"],
  ];
  return (
    <div className="d-flex w-100 justify-content-start flex-wrap">
      <div
        className={`card tw me-2 mb-3 border-0 pb-2 ${
          darkMode ? "bg-lighting" : "bg-dark-light"
        }`}
      >
        <div>
          <h3
            className={`card-title ${darkMode ? "" : "text-light"}`}
            style={{ fontSize: "16px", display: `${none}` }}
          >
            <TfiStatsUp style={{ width: "36px", height: "36px" }} />
            Murojaatlar eng ko’p tushgan tuman/shaxar dinamikasi
          </h3>
        </div>
        <div className="mx-3 ts">
          <Table
            headers={headers}
            rows={rows}
            height={height}
            darkMode={darkMode}
          />
        </div>
        <img
          src="./images/statis.png"
          alt=""
          className="card-images px-2 py-3"
        />
      </div>
      <div
        className={`card tv me-2 mb-3 border-0 pb-2 ${
          darkMode ? "bg-lighting" : "bg-dark-light"
        }`}
        style={{
          display: `${none}`,
        }}
      >
        <div>
          <h3
            className={`card-title ${darkMode ? "" : "text-light"}`}
            style={{ fontSize: "16px" }}
          >
            <LuLandmark style={{ width: "36px", height: "36px" }} />
            Hozirda murojatlari jarayondagi yuqori tashkilotlar
          </h3>
        </div>
        <div className="mx-3">
          <Table headers={headers1} rows={rows1} darkMode={darkMode} />
        </div>
        <img
          src="./images/statis2.png"
          alt=""
          className="card-images px-2 py-3"
        />
      </div>
      <div
        className={`card tv me-2 mb-3 border-0 pb-2 ${
          darkMode ? "bg-lighting" : "bg-dark-light"
        }`}
        style={{
          display: `${none}`,
        }}
      >
        <div>
          <h3
            className={`card-title ${darkMode ? "" : "text-light"}`}
            style={{ fontSize: "16px" }}
          >
            <TfiStatsUp style={{ width: "36px", height: "36px" }} />
            Murojaatlar eng ko’p tushgan tuman/shaxar dinamikasi
          </h3>
        </div>
        <div className="mx-3">
          <Table headers={headers1} rows={rows1} darkMode={darkMode} />
        </div>
        <img
          src="./images/statis3.png"
          alt=""
          className="card-images px-2 py-3"
        />
      </div>
    </div>
  );
};

export default TableIndex;
