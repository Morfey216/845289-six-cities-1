import axios from 'axios';
import {BASE_URL, StatusCode} from './constants';

const TIMEOUT = 5000;

const configureAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (responce) => responce;

  const onFail = (err) => {
    if (err.responce.status === StatusCode.FORBIDDEN) {
      history.pushState(null, null, `/login`);
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default configureAPI;
