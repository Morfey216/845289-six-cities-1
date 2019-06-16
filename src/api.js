import axios from 'axios';
import {ActionCreator} from './reducer/user/user';
import {StatusCode} from './constants';

const TIMEOUT = 5000;

const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (responce) => responce;

  const onFail = (err) => {
    if (err.responce.status === StatusCode.FORBIDDEN) {
      dispatch(ActionCreator.requireAuthorization(true));
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default configureAPI;
