import React, { useEffect, useState } from "react";
import TableCard from "../ui/TableCard";
import api from "../../../shared/api/api.json";

const TableIndex = ({ none, height, darkMode }) => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    setData1(api.data1);
    setData2(api.data2);
  }, []);

  return (
    <div className="d-flex w-100 justify-content-start flex-wrap">
      <TableCard
        darkMode={darkMode}
        headers={data1.headers}
        rows={data1.rows}
        height={height}
        none={none}
        text="Murojaatlar eng ko’p tushgan tuman/shaxar dinamikasi
        "
        icon="TfiStatsUp"
      />
      <TableCard
        darkMode={darkMode}
        headers={data2.headers}
        rows={data2.rows}
        height={height}
        none={none}
        text="Hozirda murojatlari jarayondagi yuqori tashkilotlar
        "
        icon="LuLandmark"
      />
      <TableCard
        darkMode={darkMode}
        headers={data1.headers}
        rows={data1.rows}
        height={height}
        none={none}
        text="Murojaatlar eng ko’p tushgan tuman/shaxar dinamikasi
        "
        icon="TfiStatsUp"
      />
    </div>
  );
};

export default TableIndex;
