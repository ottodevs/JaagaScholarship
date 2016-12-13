import React, { Component } from 'react';
import * as firebase from "firebase";
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import { Link } from 'react-router';

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
		console.log("ListScholars.render");
		var scholars = this.state.scholarsList;
		var browseScholars = scholars.map(function(scholar) {
			console.log(scholar);
			var _url = "/scholar/" + scholar.id;
			return <Link to={_url}><ViewScholar className="Scholar" scholar={scholar} key={scholar.address} /></Link>
		})
		return(
		<div className="ListScholars">Scholars
		{browseScholars}
		</div>
		)
	}
}
reactMixin(ListScholars.prototype, ReactFireMixin);
export default ListScholars;