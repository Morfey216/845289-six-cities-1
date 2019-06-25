import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getAuthorizationRequired} from '../../reducer/user/selectors';

const withAuthorization = (Component) => {
  const WithAuthorization = (props) => {
    const {isAuthorizationRequired} = props;

    if (!isAuthorizationRequired) {
      return <Component/>;
    }

    return <Redirect to="/login"/>;
  };

  WithAuthorization.propTypes = {
    isAuthorizationRequired: PropTypes.bool,
  };

  const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
    isAuthorizationRequired: getAuthorizationRequired(state),
  });

  return connect(mapStateToProps)(WithAuthorization);
};

export default withAuthorization;
