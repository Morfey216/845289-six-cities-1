import React from "react";
import {Switch, Route} from 'react-router-dom';
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";

const App = () => {
  return <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/login" component={SignIn} />
  </Switch>;
};

export default App;
