import React, { Component } from 'react';
import * as firebase from "firebase";
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import { Link } from 'react-router';

import {ViewArbiter} from './ViewArbiter';

import './../css/ListArbiters.css'


export class ListArbiters extends Component {
  constructor(props) {
    super(props);
    this.state = {arbitersList: []};
  }
  componentWillMount(){
    console.log("ListArbiters.componentWillMount")
    //this.setState({}) 
    var ref = firebase.database().ref("arbiters");
    console.log(ref);
    this.bindAsArray(ref, 'arbitersList');
  }
  componentDidMount() {
    console.log("ListArbiters.componentDidMount")
  }
  render() {
    console.log("ListArbiters.render");
    var arbiters = this.state.arbitersList;
    var browseArbiters = arbiters.map(function(arbiter) {
      console.log(arbiter);
      var _url = "/arbiter/" + arbiter.id;
      return <Link to={_url}><ViewArbiter className="Arbiter" arbiter={arbiter} key={arbiter.address} /></Link>
    })
    return(
    <div className="ListArbiters">Arbiters
    {browseArbiters}
    </div>
    )
  }
}
reactMixin(ListArbiters.prototype, ReactFireMixin);
export default ListArbiters;