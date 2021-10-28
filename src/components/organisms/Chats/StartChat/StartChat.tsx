import React from "react";
import { Button } from "../../../atoms/Button";
import "./StartChat.scss";

export const StartChat: React.FC = () => {
  return (
    <div className="start-chat-block">
      <div className="start-chat-button-block">
        <Button
          className="start-chat-button"
          value="Select a chat to start messaging"
        />
      </div>
    </div>
  );
};
