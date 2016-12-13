import React, { Component } from 'react';
import * as firebase from "firebase";
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import { Link } from 'react-router';

import {ViewDonar} from './ViewDonar';

import './../css/ListDonars.css';


export class ListDonars extends Component {
  constructor(props) {
    super(props);
    this.state = {donarsList: []};
  }
  componentWillMount(){
    console.log("ListDonars.componentWillMount")
    //this.setState({}) 
    var ref = firebase.database().ref("donars");
    console.log(ref);
    this.bindAsArray(ref, 'donarsList');
  }
  componentDidMount() {
    console.log("ListDonars.componentDidMount")
  }
  render() {
    console.log("ListDonars.render");
    var donars = this.state.donarsList;
    var browseDonars = donars.map(function(donar) {
      console.log(donar);
      var _url = "/donar/" + donar.id;
      return <Link to={_url}><ViewDonar className="Donar" donar={donar} key={donar.address} /></Link>
    })
    return(
    <div className="ListDonars">Donars
    {browseDonars}
    </div>
    )
  }
}
reactMixin(ListDonars.prototype, ReactFireMixin);
export default ListDonars;