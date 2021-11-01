import React, { useState } from "react";
import { AttachButton } from "../../../molecules/Buttons/ChatButtons/AttachButton";
import { SendButton } from "../../../molecules/Buttons/ChatButtons/SendButton";
import { SendField } from "../../../molecules/Fields/SendField";
import { Message } from "../../../atoms/Message/Message";
import "./UserChat.scss";

interface MessageType {
  text: string;
  from: string;
}
interface UserChatType {
  userName: string;
  lastSeen: string;
  messages: Array<MessageType>;
}

export const UserChat = (
  { userName, lastSeen, messages }: UserChatType,
  { text, from }: MessageType
) => {
  const [messageText, setMessageText] = useState<string>("");
  const [message, setMessage] = useState<MessageType>({ text, from: "user" });
  const messageHahdle = (event: React.FormEvent<HTMLInputElement>) => {
    setMessageText(event.currentTarget.value);
  };
  const sendMessageHandle = () => {
    setMessage({ text: messageText, from: "user" });
  };
  React.useEffect(() => {
    if (message.text) {
      messages.push(message);
    }
  }, [message]);
  return (
    <div className="user-chat-block">
      <div className="user-chat-header">
        <h3>{userName}</h3>
        <p>Last seen {lastSeen}</p>
      </div>
      <div className="user-chat-messages">
        {messages.map((obj) => {
          const id = messages.indexOf(obj) + 1;
          return <Message from={obj.from} text={obj.text} key={id} />;
        })}
      </div>
      <div className="user-chat-send-message">
        <AttachButton className="attach-button" />
        <SendField onChange={messageHahdle} className="send-field" />
        <SendButton className="send-button" onClick={sendMessageHandle} />
      </div>
    </div>
  );
};
