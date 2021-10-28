import React from "react";
import "./Message.scss";
interface MessageType {
  from: string;
  text: string;
}
export const Message: React.FC<MessageType> = ({ from, text }) => {
  return (
    <div className={"message-from-" + from}>
      <p>{text}</p>
    </div>
  );
};
