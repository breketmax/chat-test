import React from "react";
import { Button } from "../../../atoms/Button";
import "./ProfileButton.scss";

const handleButtonClick = () => {
  console.log("Open profile block!");
};

export const ProfileButton: React.FC = () => {
  return <Button className="profile-button" onClick={handleButtonClick} />;
};
