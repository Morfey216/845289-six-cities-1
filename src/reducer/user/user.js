import {StatusCode} from '../../constants';
import {userDataModel} from "../../data-models";

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  USER_LOGIN: `USER_LOGIN`,
};

const initialState = {
  isAuthorizationRequired: true,
  userData: {},
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  userLogin: (userData) => {
    return {
      type: ActionType.USER_LOGIN,
      payload: userData,
    };
  },
};

const Operation = {
  userLogin: (authorizationData, makeTransition) => (dispatch, _getState, api) => {
    return api.post(`/login`, authorizationData)
      .then((response) => {
        if (response.status === StatusCode.OK) {
          const userData = userDataModel(response.data);
          dispatch(ActionCreator.userLogin(userData));
          makeTransition();
        }
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      });
    case ActionType.USER_LOGIN:
      return Object.assign({}, state, {
        isAuthorizationRequired: false,
        userData: action.payload,
      });
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
