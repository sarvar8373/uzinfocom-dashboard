import React, { useEffect, useState } from "react";
import Tabs from "../../../features/Tabs";
import Table from "../../../widgets/Table";
import Header from "../../../widgets/Header";
import api from "../../../shared/api/api.json";
import useDarkModeStore from "../../../shared/fetch/FetchMode";
const Expired = () => {
  const { darkMode, toggleDarkMode } = useDarkModeStore();
  const [data3, setData3] = useState([]);
  useEffect(() => {
    setData3(api.data3);
  }, []);

  return (
    <div className=" hgh">
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        breadcrumText="Tashkilotlar kesimida"
        text="Muddati buzilgan"
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
                headers={data3.headers}
                height={"300px"}
                rows={data3.rows}
                darkMode={darkMode}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expired;
