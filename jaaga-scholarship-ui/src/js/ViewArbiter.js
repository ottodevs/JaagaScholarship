import React, { Component } from 'react';

import {ViewArbiter} from './ViewArbiter';

import './../../css/ViewArbiter.css'

export class ViewArbiter extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentWillMount(){
		console.log("ViewArbiter.componentWillMount")
		this.setState({}) 
	}
	componentDidMount() {
		console.log("ViewArbiter.componentDidMount")
	}
	render() {
		return(
			<div className="ViewArbiter">ViewArbiter</div>
		)
	}

export default ViewArbiter;	