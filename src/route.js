import { Switch, Route } from "react-router-dom";

import React from "react";
import Landing from "./component/pages/Landing";
import Footer from "./component/layout/Footer";
import Header from "./component/layout/Header";
import Signup from "./component/pages/Signup";
import Profile from "./component/pages/Profile";
import CreatePost from "./component/pages/CreatePost";
import Allpost from "./component/pages/Allpost";
import Aboutus from "./component/pages/Aboutus";
import Termandpolicy from "./component/pages/Termandpolicy";
import Chat from "./component/pages/ChatApp";
import Login from "./component/pages/Login";

const route = () => {
  
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/footer">
          <Footer />
        </Route>
        <Route exact path="/header">
          <Header />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/createPost">
          <CreatePost />
        </Route>
        <Route exact path="/allpost">
          <Allpost />
        </Route>
        <Route exact path="/aboutus">
          <Aboutus />
        </Route>
        <Route exact path="/terms">
        <Termandpolicy/>
        </Route>
        <Route exact path="/chat">
        <Chat/>
        </Route>
      </Switch>
    </>
  );
};

export default route;
