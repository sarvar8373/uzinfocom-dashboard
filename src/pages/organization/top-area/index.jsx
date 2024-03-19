import React, { useEffect, useState } from "react";
import Tabs from "../../../features/Tabs";
import "../../../app/styles/Tashkilot.css";
import Table from "../../../widgets/Table";
import Header from "../../../widgets/Header";
import api from "../../../shared/api/api.json";
import useDarkModeStore from "../../../shared/fetch/FetchMode";

const TopArea = () => {
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  const [data4, setData4] = useState([]);
  useEffect(() => {
    setData4(api.data5);
  }, []);
  return (
    <div className="hgh">
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        breadcrumText="Tashkilotlar kesimida"
        text="Top tumanlar"
      />
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
                headers={data4.headers}
                height={"500px"}
                rows={data4.rows}
                darkMode={darkMode}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArea;
