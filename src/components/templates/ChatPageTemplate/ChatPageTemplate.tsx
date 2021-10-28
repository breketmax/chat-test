import React from "react";
import { Dialogs } from "../../../components/organisms/Dialogs";
import { Header } from "../../../components/organisms/Header";
import { StartChat } from "../../../components/organisms/Chats/StartChat";
import { Switch, Route } from "react-router-dom";
import { UserChat } from "../../organisms/Chats/UserChat";
import "./ChatPageTemplate.scss";

interface usersInfoType {
  userName: string;
  lastSeen: string;
  messages: { text: string; from: string }[];
}

export const ChatPageTemplate: React.FC = () => {
  const usersInfo: Array<usersInfoType> = [
    {
      userName: "Konstantin Konstantinopolski",
      lastSeen: "2 minutes ago",
      messages: [{ text: "Hey!", from: "friend" }],
    },
    {
      userName: "Marina Joe",
      lastSeen: "17 minutes ago",
      messages: [
        {
          text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
          from: "friend",
        },
        {
          text: "SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  accusantium doloremque laudantium, totam re",
          from: "user",
        },
        {
          text: "SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          from: "friend",
        },
        {
          text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti",
          from: "user",
        },
      ],
    },
    {
      userName: "Ernest Gillroy",
      lastSeen: "3 minutes ago",
      messages: [
        { text: "Hello!", from: "user" },
        { text: "Sup bro", from: "friend" },
        { text: "How are you doing?", from: "user" },
      ],
    },
    {
      userName: "Konstantin Konstantinopolski",
      lastSeen: "2 minutes ago",
      messages: [{ text: "Hey!", from: "friend" }],
    },
  ];
  return (
    <section className="chat-page">
      <Header />
      <div className="flex">
        <Dialogs usersInfo={usersInfo} />
        <Switch>
          <Route exact path="/chat/">
            <StartChat />
          </Route>
          {usersInfo.map((user) => {
            const id = usersInfo.indexOf(user) + 1;
            return (
              <Route key={id} path={"/chat/" + id}>
                <UserChat
                  userName={user.userName}
                  lastSeen={user.lastSeen}
                  messages={user.messages}
                ></UserChat>
              </Route>
            );
          })}
        </Switch>
      </div>
    </section>
  );
};
