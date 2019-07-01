import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import OfferDetailed from "../offer-detailed/offer-detailed";
import withAuthorization from "../../hocs/with-authorization/with-authorization";
import withBodyClass from "../../hocs/width-body-class/width-body-class";


const App = () => {
  return <Switch>
    <Route path="/" exact component={withBodyClass(Main, [`page--gray`, `page--main`])}/>
    <Route path="/login" component={withBodyClass(SignIn, [`page--gray`, `page--login`])} />
    <Route path="/favorites" component={withAuthorization(Favorites)}/>
    <Route path="/offer/:id" component={OfferDetailed}/>
    <Redirect to="/"/>
  </Switch>;
};

export default App;
