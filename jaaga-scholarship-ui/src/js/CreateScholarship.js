import React, { Component } from 'react';

import {CreateScholarship} from './CreateScholarship';

import './../../css/CreateScholarship.css'

export class CreateScholarship extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentWillMount(){
		console.log("CreateScholarship.componentWillMount")
		this.setState({}) 
	}
	componentDidMount() {
		console.log("CreateScholarship.componentDidMount")
	}
	render() {
		return(
			<div className="CreateScholarship">CreateScholarship</div>
		)
	}
}
export default CreateS