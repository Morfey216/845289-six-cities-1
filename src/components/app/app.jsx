import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import OfferDetailed from "../offer-detailed/offer-detailed";
import {getAuthorizationRequired} from '../../reducer/user/selectors';
import withAuthorization from "../../hocs/with-authorization/with-authorization";
import withBodyClass from "../../hocs/width-body-class/width-body-class";


const App = (props) => {
  const {isAuthorizationRequired} = props;
  const SignInWithBodyClassWrapper = withBodyClass(SignIn, [`page--gray`, `page--login`]);

  return <Switch>
    <Route path="/" exact component={withBodyClass(Main, [`page--gray`, `page--main`])}/>
    <Route path="/login" render={() => isAuthorizationRequired ? <SignInWithBodyClassWrapper/> : <Redirect to="/"/>}/>
    <Route path="/favorites" component={withAuthorization(Favorites)}/>
    <Route path="/offer/:id" component={OfferDetailed}/>
    <Redirect to="/"/>
  </Switch>;
};

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: getAuthorizationRequired(state),
});

export {App};
export default connect(mapStateToProps)(App);
