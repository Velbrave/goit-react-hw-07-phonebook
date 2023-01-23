import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);
