import React from "react";

import { LuLandmark } from "react-icons/lu";
import { TfiStatsUp } from "react-icons/tfi";
import Table from "../../../widgets/Table";

const TableCard = ({ darkMode, headers, rows, height, icon, text, none }) => {
  return (
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
          {icon === "TfiStatsUp" ? (
            <TfiStatsUp style={{ width: "36px", height: "36px" }} />
          ) : (
            <LuLandmark style={{ width: "36px", height: "36px" }} />
          )}
          {text}
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
      <img src="./images/statis.png" alt="" className="card-images px-2 py-3" />
    </div>
  );
};

export default TableCard;
