import React, { Component } from 'react';
import * as firebase from "firebase";
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

import './../css/ViewScholarship.css'

export class ViewScholarship extends Component {
	constructor(props) {
		super(props);
		this.state = { scholarship: undefined
		};
		this.viewScholarship = this.viewScholarship.bind(this);
	}

	componentWillMount(){
		console.log("ViewScholarship.componentWillMount")
		this.setState({scholarship:this.props.scholarship}) 
	}

	componentDidMount() {
		console.log("ViewScholarship.componentDidMount")
	}

	viewScholarship(id) {
		console.log("viewScholarship");
	}

	render() {
		return(
			<div className="ViewScholarship" onClick={this.viewScholarship(this.state.scholarship.id)}>ViewScholarship - {this.state.scholarship.address}</div>
		)
	}
}
export default ViewScholarship;
