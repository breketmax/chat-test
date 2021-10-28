import React from "react";

import { NavLink } from "react-router-dom";
import avatar from "../../../image/avatar.svg";
import "./Dialog.scss";

interface DialogTypes {
  userName: string;
  lastMessageFrom: string;
  to: string;
  lastMessage: string;
}
export const Dialog: React.FC<DialogTypes> = ({
  userName,
  lastMessageFrom,
  to,
  lastMessage,
}: DialogTypes) => {
  return (
    <NavLink to={to}>
      <div className="dialog-item">
        <img src={avatar} alt="avatar" />
        <div className="user-info">
          <h4>{userName}</h4>
          <p>
            <span>{lastMessageFrom === "user" ? "You: " : ""}</span>
            {lastMessage.length > 30
              ? lastMessage.slice(0, 6) + "..."
              : lastMessage}
          </p>
        </div>
      </div>
    </NavLink>
  );
};
