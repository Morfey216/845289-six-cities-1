import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import reducer from './reducer';
import {Operation} from './reducer/data/data';
import configureAPI from './api';
import App from './components/app/app';

const init = () => {
  const api = configureAPI();
  /* eslint-disable no-underscore-gangle */
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );
  /* eslint-enable */

  store.dispatch(Operation.loadOffersData());

  ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>,
      document.querySelector(`#root`).parentElement
  );
};

init();
