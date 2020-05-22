import React from 'react';

import './config/reactotronConfig';

import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer, Flip } from 'react-toastify';
import Routes from './routes';

import GlobalStyles from './styles/global';
import store from './store';
import history from './services/services';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={3}
          transition={Flip}
        />
      </Router>
    </Provider>
  );
}

export default App;
