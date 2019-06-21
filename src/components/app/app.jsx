import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import {getAuthorizationRequired} from '../../reducer/user/selectors';

const App = (props) => {
  const {isAuthorizationRequired} = props;

  return <React.Fragment>
    {isAuthorizationRequired ? <SignIn/> : <Main/>};
  </React.Fragment>;
};

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: getAuthorizationRequired(state),
});

export {App};
export default connect(mapStateToProps)(App);
