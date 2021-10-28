import React from "react";
import { Dialog } from "../../molecules/Dialog";
import "./Dialogs.scss";

interface usersInfoType {
  userName: string;
  lastSeen: string;
  messages: { text: string; from: string }[];
}
interface DialogsType {
  usersInfo: Array<usersInfoType>;
}
export const Dialogs: React.FC<DialogsType> = ({ usersInfo }) => {
  return (
    <div className="dialogs-list">
      {usersInfo.map((user) => {
        const id = usersInfo.indexOf(user) + 1;
        const lastMessageInfo = user.messages[user.messages.length - 1];
        return (
          <Dialog
            key={id}
            to={"/chat/" + id}
            userName={user.userName}
            lastMessageFrom={lastMessageInfo.from}
            lastMessage={lastMessageInfo.text}
          />
        );
      })}
      {/* <Dialog userName="Konstantin Konstantinopolski" lastMessageFromUser={false} lastMessage="Hey!" to ="/chat/1"/>
      <Dialog userName="Marina Joe" lastMessageFromUser={true} lastMessage="Sed ut per..." to ="/chat/2"/>
      <Dialog userName="Ernest Gillroy" lastMessageFromUser={true} lastMessage="How are you doing?" to ="/chat/3"/>
      <Dialog userName="Konstantin Konstantinopolski" lastMessageFromUser={false} lastMessage="Hey!" to ="/chat/4"/> */}
    </div>
  );
};
