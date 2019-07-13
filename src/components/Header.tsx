import React from "react";
import { FaBullseye } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="header">
      <span className="header-icon">
        <FaBullseye />
      </span>
      <h1 className="header-title">&nbsp;MET I BLINKEN&nbsp;</h1>
      <span className="header-icon">
        <FaBullseye />
      </span>
    </header>
  );
};
