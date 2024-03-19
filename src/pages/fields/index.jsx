import React from "react";
import { ProgressBar } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { LuShieldCheck, LuPercent, LuHeartPulse } from "react-icons/lu";
import { TbGavel } from "react-icons/tb";
import { RiBankLine } from "react-icons/ri";
import "../../app/styles/Sohalar.css";
import ChartNumber from "../../shared/ui/ChartNumber";
import { PiGraduationCapDuotone } from "react-icons/pi";
import Header from "../../widgets/Header";
import useDarkModeStore from "../../shared/fetch/FetchMode";

const Fields = () => {
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <div className="">
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        breadcrumText="Sohalar kesimida"
        text="Sohalar kesimida"
      />
      <div className="carding d-flex justify-content-between flex-wrap pb-3">
        <div
          className={`card crd border-0 ${
            darkMode ? "bg-lighting" : "bg-dark-light"
          }`}
        >
          <h3 className={`card-title d-flex ${darkMode ? "" : "text-light"}`}>
            <div
              className={`iconss ${darkMode ? "" : "bg-dark-th text-light"}`}
              style={{ width: "36px", height: "36px" }}
            >
              <GoHome style={{ width: "24px", height: "24px" }} />
            </div>{" "}
            Uy-joy kommunal xo’jaligi
          </h3>
          <div className="chartNum d-flex">
            <ChartNumber
              title={"2022 yil"}
              number={"120 350"}
              darkMode={darkMode}
            />
            <ChartNumber
              title={"2023 yil"}
              procent={"+14.45%"}
              number={"120 350"}
              darkMode={darkMode}
              color={"#9747FF"}
            />
          </div>
          <div className="progs mx-3">
            <ProgressBar
              className="mb-2 w-100"
              variant="info"
              style={{ width: "160px", height: "22px" }}
              now={40}
            />
            <ProgressBar
              className="w-100"
              style={{ width: "160px", height: "22px" }}
              now={60}
            />
          </div>
        </div>
        <div
          className={`card crd border-0 ${
            darkMode ? "bg-lighting" : "bg-dark-light"
          }`}
        >
          <h3 className={`card-title d-flex ${darkMode ? "" : "text-light"}`}>
            <div
              className={`iconss ${darkMode ? "" : "bg-dark-th text-light"}`}
              style={{ width: "36px", height: "36px" }}
            >
              <LuShieldCheck style={{ width: "24px", height: "24px" }} />
            </div>{" "}
            Xavfsizlik va huquq-tartibot muhofazasi
          </h3>
          <div className="chartNum d-flex">
            <ChartNumber
              title={"2022 yil"}
              number={"120 350"}
              darkMode={darkMode}
            />
            <ChartNumber
              title={"2023 yil"}
              procent={"+14.45%"}
              number={"120 350"}
              darkMode={darkMode}
              color={"#9747FF"}
            />
          </div>
          <div className="progs mx-3">
            <ProgressBar
              className="mb-2 w-100"
              variant="info"
              style={{ width: "160px", height: "22px" }}
              now={40}
            />
            <ProgressBar
              className="w-100"
              style={{ width: "160px", height: "22px" }}
              now={60}
            />
          </div>
        </div>
        <div
          className={`card crd border-0 ${
            darkMode ? "bg-lighting" : "bg-dark-light"
          }`}
        >
          <h3 className={`card-title d-flex ${darkMode ? "" : "text-light"}`}>
            <div
              className={`iconss ${darkMode ? "" : "bg-dark-th text-light"}`}
              style={{ width: "36px", height: "36px" }}
            >
              <PiGraduationCapDuotone
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            Ta’lim va fan
          </h3>
          <div className="chartNum d-flex">
            <ChartNumber
              title={"2022 yil"}
              number={"120 350"}
              darkMode={darkMode}
            />
            <ChartNumber
              title={"2023 yil"}
              procent={"+14.45%"}
              number={"120 350"}
              darkMode={darkMode}
              color={"#9747FF"}
            />
          </div>
          <div className="progs mx-3">
            <ProgressBar
              className="mb-2 w-100"
              variant="info"
              style={{ width: "160px", height: "22px" }}
              now={40}
            />
            <ProgressBar
              className="w-100"
              style={{ width: "160px", height: "22px" }}
              now={60}
            />
          </div>
        </div>
        <div
          className={`card crd border-0 ${
            darkMode ? "bg-lighting" : "bg-dark-light"
          }`}
        >
          <h3 className={`card-title d-flex ${darkMode ? "" : "text-light"}`}>
            <div
              className={`iconss ${darkMode ? "" : "bg-dark-th text-light"}`}
              style={{ width: "36px", height: "36px" }}
            >
              <RiBankLine style={{ width: "24px", height: "24px" }} />
            </div>{" "}
            Bank faoliyati
          </h3>
          <div className="chartNum d-flex">
            <ChartNumber
              title={"2022 yil"}
              number={"120 350"}
              darkMode={darkMode}
            />
            <ChartNumber
              title={"2023 yil"}
              procent={"+14.45%"}
              number={"120 350"}
              darkMode={darkMode}
              color={"#9747FF"}
            />
          </div>
          <div className="progs mx-3">
            <ProgressBar
              className="mb-2 w-100"
              variant="info"
              style={{ width: "160px", height: "22px" }}
              now={40}
            />
            <ProgressBar
              className="w-100"
              style={{ width: "160px", height: "22px" }}
              now={60}
            />
          </div>
        </div>

        <div
          className={`card crd border-0 ${
            darkMode ? "bg-lighting" : "bg-dark-light"
          }`}
        >
          <h3 className={`card-title d-flex ${darkMode ? "" : "text-light"}`}>
            <div
              className={`iconss ${darkMode ? "" : "bg-dark-th text-light"}`}
              style={{ width: "36px", height: "36px" }}
            >
              <TbGavel style={{ width: "24px", height: "24px" }} />
            </div>{" "}
            Sud sohasi
          </h3>
          <div className="chartNum d-flex">
            <ChartNumber
              title={"2022 yil"}
              number={"120 350"}
              darkMode={darkMode}
            />
            <ChartNumber
              title={"2023 yil"}
              procent={"+14.45%"}
              number={"120 350"}
              darkMode={darkMode}
              color={"#9747FF"}
            />
          </div>
          <div className="progs mx-3">
            <ProgressBar
              className="mb-2 w-100"
              variant="info"
              style={{ width: "160px", height: "22px" }}
              now={40}
            />
            <ProgressBar
              className="w-100"
              style={{ width: "160px", height: "22px" }}
              now={60}
            />
          </div>
        </div>
        <div
          className={`card crd border-0 ${
            darkMode ? "bg-lighting" : "bg-dark-light"
          }`}
        >
          <h3 className={`card-title d-flex ${darkMode ? "" : "text-light"}`}>
            <div
              className={`iconss ${darkMode ? "" : "bg-dark-th text-light"}`}
              style={{ width: "36px", height: "36px" }}
            >
              <LuPercent style={{ width: "24px", height: "24px" }} />
            </div>{" "}
            Iqtisodiy faoliyat va iqtisodiyotdagi davlat boshqaruvi
          </h3>
          <div className="chartNum d-flex">
            <ChartNumber
              title={"2022 yil"}
              number={"120 350"}
              darkMode={darkMode}
            />
            <ChartNumber
              title={"2023 yil"}
              procent={"+14.45%"}
              number={"120 350"}
              darkMode={darkMode}
              color={"#9747FF"}
            />
          </div>
          <div className="progs mx-3">
            <ProgressBar
              className="mb-2 w-100"
              variant="info"
              style={{ width: "160px", height: "22px" }}
              now={40}
            />
            <ProgressBar
              className="w-100"
              style={{ width: "160px", height: "22px" }}
              now={60}
            />
          </div>
        </div>
        <div
          className={`card crd border-0 ${
            darkMode ? "bg-lighting" : "bg-dark-light"
          }`}
        >
          <h3 className={`card-title d-flex ${darkMode ? "" : "text-light"}`}>
            <div
              className={`iconss ${darkMode ? "" : "bg-dark-th text-light"}`}
              style={{ width: "36px", height: "36px" }}
            >
              <FaRegUser style={{ width: "24px", height: "24px" }} />
            </div>{" "}
            Ijtimoiy himoya
          </h3>
          <div className="chartNum d-flex">
            <ChartNumber
              title={"2022 yil"}
              number={"120 350"}
              darkMode={darkMode}
            />
            <ChartNumber
              title={"2023 yil"}
              procent={"+14.45%"}
              number={"120 350"}
              darkMode={darkMode}
              color={"#9747FF"}
            />
          </div>
          <div className="progs mx-3">
            <ProgressBar
              className="mb-2 w-100"
              variant="info"
              style={{ width: "160px", height: "22px" }}
              now={40}
            />
            <ProgressBar
              className="w-100"
              style={{ width: "160px", height: "22px" }}
              now={60}
            />
          </div>
        </div>
        <div
          className={`card crd border-0 ${
            darkMode ? "bg-lighting" : "bg-dark-light"
          }`}
        >
          <h3 className={`card-title d-flex ${darkMode ? "" : "text-light"}`}>
            <div
              className={`iconss ${darkMode ? "" : "bg-dark-th text-light"}`}
              style={{ width: "36px", height: "36px" }}
            >
              <LuHeartPulse style={{ width: "24px", height: "24px" }} />
            </div>{" "}
            Sog’liqni saqlash
          </h3>
          <div className="chartNum d-flex">
            <ChartNumber
              title={"2022 yil"}
              number={"120 350"}
              darkMode={darkMode}
            />
            <ChartNumber
              title={"2023 yil"}
              procent={"+14.45%"}
              number={"120 350"}
              darkMode={darkMode}
              color={"#9747FF"}
            />
          </div>
          <div className="progs mx-3">
            <ProgressBar
              className="mb-2 w-100"
              variant="info"
              style={{ width: "160px", height: "22px" }}
              now={40}
            />
            <ProgressBar
              className="w-100"
              style={{ width: "160px", height: "22px" }}
              now={60}
            />
          </div>
        </div>
        <div
          className={`card crd border-0 ${
            darkMode ? "bg-lighting" : "bg-dark-light"
          }`}
        >
          <h3 className={`card-title d-flex ${darkMode ? "" : "text-light"}`}>
            <div
              className={`iconss ${darkMode ? "" : "bg-dark-th text-light"}`}
              style={{ width: "36px", height: "36px" }}
            >
              <PiGraduationCapDuotone
                style={{ width: "24px", height: "24px" }}
              />
            </div>{" "}
            Talim, fan va madaniyat
          </h3>
          <div className="chartNum d-flex">
            <ChartNumber
              title={"2022 yil"}
              number={"120 350"}
              darkMode={darkMode}
            />
            <ChartNumber
              title={"2023 yil"}
              procent={"+14.45%"}
              number={"120 350"}
              darkMode={darkMode}
              color={"#9747FF"}
            />
          </div>
          <div className="progs mx-3">
            <ProgressBar
              className="mb-2 w-100"
              variant="info"
              style={{ width: "160px", height: "22px" }}
              now={40}
            />
            <ProgressBar
              className="w-100"
              style={{ width: "160px", height: "22px" }}
              now={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fields;
