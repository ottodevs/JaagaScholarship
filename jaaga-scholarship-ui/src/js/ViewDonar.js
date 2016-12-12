import React, { Component } from 'react';

import {ViewDonar} from './ViewDonar';

import './../../css/ViewDonar.css'

export class ViewDonar extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentWillMount(){
		console.log("ViewDonar.componentWillMount")
		this.setState({}) 
	}
	componentDidMount() {
		console.log("ViewDonar.componentDidMount")
	}

	render() {
		return(
			<div className="ViewDonar">ViewDonar</div>
			) 
	}

}
export default ViewDonar;