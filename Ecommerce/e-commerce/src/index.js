import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { VendorHome } from './VendorComponents/VendorHome';
import store from './Redux/Store/store'; 
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App/>
    <ToastContainer />
    </Provider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
