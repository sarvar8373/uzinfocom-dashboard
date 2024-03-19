import React from "react";
import ChangeButton from "../shared/ui/ChangeButton";
import Calendar from "../shared/ui/Calendar";
import { Breadcrumb } from "react-bootstrap";

const Header = ({ darkMode, toggleDarkMode, breadcrumText, text }) => {
  return (
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
          <Breadcrumb.Item active className={`${darkMode ? "" : "text-light"}`}>
            {breadcrumText}
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2 className={`${darkMode ? "" : "text-light"}`}>{text}</h2>
      </div>
      <div>
        <ChangeButton dark={darkMode} onClick={toggleDarkMode} />
        <Calendar darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Header;
