import axios from 'axios';
import {ActionCreator} from './reducer';

const TIMEOUT = 5000;

const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (responce) => responce;

  const onFail = (err) => {
    if (err.responce.status === 403) {
      dispatch(ActionCreator.requireAuthorization(true));
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default configureAPI;
