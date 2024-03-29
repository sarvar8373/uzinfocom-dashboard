import React from "react";
import { Col } from "react-bootstrap";
import Progress from "../../features/Progress";
import ChartNumber from "../../shared/ui/ChartNumber";
import Charts from "../../shared/ui/Charts";
import TableIndex from "../../entites/table/model/TableIndex";
import useDarkModeStore from "../../shared/fetch/FetchMode";
import Header from "../../widgets/Header";
const Home = () => {
  const { darkMode, toggleDarkMode } = useDarkModeStore();
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "",
        borderColor: "transparent",
        data: [4, 1, 1.5],
        backgroundColor: ["#0183C6", "#42BCFB", "#E5EAF1"],
      },
    ],
  };

  const options = {
    cutout: "85%",
    plugins: {
      doughnutlabel: {
        labels: [
          {
            text: "Label in the center",
            font: {
              size: 20, // Font size
            },
            color: "#333", // Text color
          },
        ],
      },
    },
  };
  return (
    <div>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        breadcrumText="Umumiy statiskasi"
        text="Asosiy Dashboard"
      />
      <div className="cards d-flex flex-wrap">
        <div className="fx d-flex justify-content-between">
          <div
            className={`card wd border-0 me-2 ${
              darkMode ? "bg-lighting" : "bg-dark-light"
            }`}
          >
            <div className="d-flex card-wd">
              <div>
                <h3 className={`card-title ${darkMode ? "" : "text-light"}`}>
                  Murojaatlar soni
                </h3>
                <p
                  className={`card-text ${
                    darkMode ? "text-secondary" : "text-light"
                  }`}
                >
                  Barcha murojaatlar
                </p>
                <Charts data={data} options={options} darkMode={darkMode} />
              </div>
              <div>
                <div className="card-image px-2 py-3">
                  <img src="./images/message.png" alt="" />
                </div>
                <div
                  className={`card wth ${
                    darkMode
                      ? "bg-lighting border-0"
                      : "bg-dar-card bg-dark-border"
                  }`}
                >
                  <ChartNumber
                    title="Yangi"
                    procent="15%"
                    number="120 350"
                    darkMode={darkMode}
                  />
                  <ChartNumber
                    title="Jarayonda"
                    procent="75%"
                    number="120 350"
                    color={"#E5EAF1"}
                    darkMode={darkMode}
                  />
                  <ChartNumber
                    title="Ko'rib chiqilgan"
                    procent="35%"
                    number="120 350"
                    color={"#0183C6"}
                    darkMode={darkMode}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`card wd border-0 ${
              darkMode ? "bg-lighting" : "bg-dark-light"
            }`}
          >
            <div className="d-flex justify-content-between flex-wrap">
              <div>
                <h3 className={`card-title ${darkMode ? "" : "text-light"}`}>
                  Hududlar kesimida eng ko’p murojaatlar
                </h3>
                <div className="card-groups">
                  <Col
                    className={`colum d-flex pt-2 ${
                      darkMode ? "bg-lighting" : "bg-dar-card bg-dark-border"
                    }`}
                  >
                    <span className="circle mx-2">1832</span>
                    <p className={`group-text ${darkMode ? "" : "text-light"}`}>
                      1832 ming murojaat surxondaryo
                      <br />
                      viloyatidan
                    </p>
                  </Col>
                  <Col
                    className={`colum d-flex pt-2 ${
                      darkMode ? "bg-lighting" : "bg-dar-card bg-dark-border"
                    }`}
                  >
                    <span
                      className="circle mx-2"
                      style={{
                        backgroundColor: "#4318FF",
                      }}
                    >
                      1832
                    </span>
                    <p className={`group-text ${darkMode ? "" : "text-light"}`}>
                      1832 ming murojaat surxondaryo
                      <br />
                      viloyatidan
                    </p>
                  </Col>
                  <Col
                    className={`colum d-flex pt-2 ${
                      darkMode ? "bg-lighting" : "bg-dar-card bg-dark-border"
                    }`}
                  >
                    <span
                      className="circle mx-2"
                      style={{
                        background: "#18D5FF",
                      }}
                    >
                      1832
                    </span>
                    <p className={`group-text ${darkMode ? "" : "text-light"}`}>
                      1832 ming murojaat surxondaryo
                      <br />
                      viloyatidan
                    </p>
                  </Col>
                </div>
              </div>

              <img
                src="./images/map.png"
                alt=""
                className="card-image px-2 py-3"
              />
            </div>
          </div>
        </div>

        <div
          className={`card wc border-0 ${
            darkMode ? "bg-lighting" : "bg-dark-light"
          }`}
        >
          <div className="d-flex justify-content-between flex-wrap">
            <div>
              <h3 className={`card-title ${darkMode ? "" : "text-light"}`}>
                Kelib tushgan murojaatlarda eng ko’p kotarilgan masalalar
              </h3>
            </div>
            <div className="hw pb-2">
              <Progress
                titlle={"Uy joy bilan taminlash"}
                procent={25}
                wgProcent={"25%"}
                procentText={"23.28%"}
                darkMode={darkMode}
              />
              <Progress
                titlle={"Prezident shaxsiy qabuli"}
                procent={35}
                wgProcent={"35%"}
                procentText={"23.28%"}
                darkMode={darkMode}
              />
              <Progress
                titlle={"Ko’chmas mulk obyektlariga mulkiy..."}
                procent={45}
                wgProcent={"45%"}
                procentText={"23.28%"}
                darkMode={darkMode}
              />
              <Progress
                titlle={"Oilaviy nizolars"}
                procent={55}
                wgProcent={"55%"}
                procentText={"23.28%"}
                darkMode={darkMode}
              />
              <Progress
                titlle={"Mahalla ichki yo’llarini qurish to’g’risida"}
                procent={65}
                wgProcent={"65%"}
                procentText={"23.28%"}
                darkMode={darkMode}
              />
              <Progress
                titlle={"Davolanish va Jarrohlik amaliyoti masalasida"}
                procent={65}
                wgProcent={"65%"}
                procentText={"23.28%"}
                darkMode={darkMode}
              />
              <Progress
                titlle={"yashash sharoitini yaxshilash to’g’risida"}
                procent={65}
                wgProcent={"65%"}
                procentText={"23.28%"}
                darkMode={darkMode}
              />
              <Progress
                titlle={"Muhtojlarga bir martalik moddiy yordam to’g’risida"}
                procent={65}
                wgProcent={"65%"}
                procentText={"23.28%"}
                darkMode={darkMode}
              />
            </div>
            <img
              src="./images/union.png"
              alt=""
              className="card-image px-2 py-3"
            />
          </div>
        </div>
        <TableIndex darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Home;
