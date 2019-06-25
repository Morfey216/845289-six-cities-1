import React from "react";
import {Switch, Route} from 'react-router-dom';
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import withAuthorization from "../../hocs/with-authorization/with-authorization";


const App = () => {
  return <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/login" component={SignIn} />
    <Route path="/favorites" component={withAuthorization(Favorites)} />
  </Switch>;
};

export default App;
