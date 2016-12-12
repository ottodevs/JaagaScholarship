import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/font-awesome/css/font-awesome.css';

import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCE823oMKjjX079ZiwgK5AvNvQvChvTzno",
  authDomain: "jaaga-scholarship.firebaseapp.com",
  databaseURL: "https://jaaga-scholarship.firebaseio.com",
  storageBucket: "jaaga-scholarship.appspot.com",
  messagingSenderId: "14369789184"
};
firebase.initializeApp(config);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
