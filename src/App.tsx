import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChatPage } from "./components/pages/ChatPage";
import { LoginPage } from "./components/pages/LoginPage";
// import { LoginPage } from "./components/pages";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/chat">
          <ChatPage />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
