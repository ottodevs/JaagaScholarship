import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import * as firebase from "firebase";
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import {Link} from 'react-router';

import {ViewScholarship} from './ViewScholarship';

import './../css/ViewScholar.css'

export class ViewScholar extends Component {
	constructor(props) {
		super(props);
		this.state = {scholar: undefined
		};
		this.viewScholarship = this.viewScholarship.bind(this);
	}
	componentWillMount(){
		console.log("ViewScholar.componentWillMount")
		console.log(this.props.scholar);
		this.setState({scholar:this.props.scholar})
	}
	componentDidMount() {
		console.log("ViewScholar.componentDidMount")
		var ref = firebase.database().ref("scholars/" + this.props.params['userId']);
		console.log(ref);
		this.bindAsObject(ref, 'scholar');
	}

	viewScholarship() {
		console.log("viewScholarship");
	}

	render() {
		console.log("ViewScholar.render")
		console.log((this.state.scholar));
		//var scholarships = this.props.scholar.scholarships;
		if (this.state.scholar){
			console.log(this.state.scholar);
			var _scholarName = this.state.scholar.name;
			var _scholarAbout = this.state.scholar.about;
			var _scholar = this.state.scholar;
			var browseScholarships = this.state.scholar.scholarships.map(function(scholarship) {
				var _url = "/scholarship/" + scholarship.id;
				var ref = firebase.database().ref("scholarships/" + scholarship.id);
				return <Link to={_url}><ViewScholarship scholarship={scholarship} scholar={_scholar}/></Link>
			})
		} else {
			_scholarName = "loading";
			_scholarAbout = "";
		}		

		return(
		<div className="ViewScholar">
		<Grid>
		<Col xs={2} md={2} lg={2}>
			<Row className="profile-pic">
			</Row>
		</Col>
		<Col xs={2} md={2} lg={2}>
			<Row className="scholar-name">
				{_scholarName}
			</Row>
			<Row className="scholar-about">
				{_scholarAbout}
			</Row>
		</Col>
		<Col xs={4} md={4} lg={4}>
		<div className="scholar-scholarships">
			{browseScholarships}
		</div>
		</Col>
		<Row>
		{this.props.children}
		</Row>
		</Grid>

		</div>
		)
	}
}

reactMixin(ViewScholar.prototype, ReactFireMixin);
export default ViewScholar;