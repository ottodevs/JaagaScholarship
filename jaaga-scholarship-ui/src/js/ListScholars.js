import React, { Component } from 'react';
import * as firebase from "firebase";
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

import {ViewScholar} from './ViewScholar';

import './../css/ListScholars.css'


export class ListScholars extends Component {
	constructor(props) {
		super(props);
		this.state = {scholarsList: []};
	}
	componentWillMount(){
		console.log("ListScholars.componentWillMount")
		//this.setState({}) 
		var ref = firebase.database().ref("scholars");
		console.log(ref);
		this.bindAsArray(ref, 'scholarsList');
	}
	componentDidMount() {
		console.log("ListScholars.componentDidMount")
	}
	render() {
		console.log(this.state);
		var scholars = this.state.scholarsList;
		var browseScholars = scholars.map(function(scholar) {
			return <ViewScholar className="Scholar" scholar={scholar} key={scholar.address} />
		})
		return(
		<div className="ListScholars">ListScholars
		{browseScholars}
		</div>
		)
	}
}
reactMixin(ListScholars.prototype, ReactFireMixin);
export default ListScholars;