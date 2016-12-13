import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import {Home} from './js/Home';
import {ListScholars} from './js/ListScholars';
import {ListArbiters} from './js/ListArbiters';
import {ListDonars} from './js/ListDonars';
import {ViewScholar} from './js/ViewScholar';
import {ViewScholarship} from './js/ViewScholarship';
import {ViewArbiter} from './js/ViewArbiter';
import {ViewDonar} from './js/ViewDonar';
import {CreateScholarship} from './js/CreateScholarship';
import {Donate} from './js/Donate';
import {ApproveScholarship} from './js/ApproveScholarship';



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
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/scholars" component={ListScholars}/>
      <Route path="/arbiters" component={ListArbiters}/>
      <Route path="/donars" component={ListDonars}/>
      <Route path="/scholar/:userId" component={ViewScholar}>
      </Route>
        <Route path="/scholarship/:scholarshipId" component={ViewScholarship}/>
      <Route path="/arbiter/:userId" component={ViewArbiter}/>
      <Route path="/donar/:userId" component={ViewDonar}/>
      <Route path="/create-scholarship/" component={CreateScholarship}/>
      <Route path="/donate/:scholarshipId" component={Donate}/>
      <Route path="/approve-scholarship/:scholarshipId" component={ApproveScholarship}/>
    </Route>
    {/* add the routes here */}
  </Router>,
  document.getElementById('root')
);
