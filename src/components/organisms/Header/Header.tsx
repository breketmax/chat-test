import React from "react";
import { ProfileButton } from "../../molecules/Buttons/ProfileButton";
import "./Header.scss";
import logo from "../../../image/mLogo.svg";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <img src={logo} />
          <ProfileButton />
        </div>
      </div>
    </header>
  );
};
