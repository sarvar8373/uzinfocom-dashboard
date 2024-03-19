import React, { useEffect, useState } from "react";
import Tabs from "../../../features/Tabs";
import "../../../app/styles/Tashkilot.css";
import Table from "../../../widgets/Table";
import Header from "../../../widgets/Header";
import api from "../../../shared/api/api.json";
import useDarkModeStore from "../../../shared/fetch/FetchMode";

const Suborganization = () => {
  const { darkMode, toggleDarkMode } = useDarkModeStore();
  const [data4, setData4] = useState([]);
  useEffect(() => {
    setData4(api.data4);
  }, []);
  return (
    <div className="rel hgh">
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        breadcrumText="Tashkilotlar kesimida"
        text="Tashkilotlar kesimida"
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
            <div className="tbl">
              <Table
                headers={data4.headers}
                rows={data4.rows}
                height={"500px"}
                darkMode={darkMode}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suborganization;
