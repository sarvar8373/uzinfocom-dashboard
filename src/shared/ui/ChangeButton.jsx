import React from "react";
import { Button } from "react-bootstrap";
import { GoSun } from "react-icons/go";
import { LuMoon } from "react-icons/lu";

const ChangeButton = ({ dark, onClick }) => {
  return (
    <Button
      className={`border-0 my-4 mx-2 ${
        dark ? "bg-light text-primary" : "bg-dark-light text-light"
      }`}
      onClick={onClick}
    >
      {dark ? <GoSun /> : <LuMoon />}
    </Button>
  );
};

export default ChangeButton;
