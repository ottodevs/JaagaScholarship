import React, { Component } from 'react';
	import * as firebase from "firebase";
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

import {ViewScholarship} from './ViewScholarship';

import './../css/ViewScholar.css'

export class ViewScholar extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentWillMount(){
		console.log("ViewScholar.componentWillMount")
		this.setState({}) 

	}
	componentDidMount() {
		console.log("ViewScholar.componentDidMount")
	}
	render() {
		console.log("ViewScholar.render")
		console.log(this.props.scholar);
		var scholarships = this.props.scholar.scholarships;
		console.log(scholarships)
		var browseScholarships = scholarships.map(function(scholarship) {
			console.log(scholarship);
			var ref = firebase.database().ref("scholarships" + scholarship.address)
			return <ViewScholarship scholarship={scholarship}/>
		})
		return(
		<div className="ViewScholar">
		<div className="scholar-name">
		{this.props.scholar.name}
		</div>
		<div className="scholar-about">
		{this.props.scholar.about}
		</div>

		<div className="scholar-scholarships">
			{browseScholarships}
		</div>
		</div>
		)
	}
}
export default ViewScholar;