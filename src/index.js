import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router,  useHistory } from "react-router-dom";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
ReactDOM.render(  
  <Provider store={store}>
  <Router history ={useHistory}>
  <App />
  </Router>
        </Provider>,
     document.getElementById('root'));
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
