import axios from 'axios';

const TIMEOUT = 5000;

const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  return api;
};

export default configureAPI;
