import React, { Component } from 'react';
import * as firebase from "firebase";
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

import './../css/ViewScholarship.css'

export class ViewScholarship extends Component {
	constructor(props) {
		super(props);
		this.state = { scholarship: undefined,
			scholar: undefined
		};
	}

	componentWillMount(){
		console.log("ViewScholarship.componentWillMount")
		//this.setState({scholarship:this.props.scholarship}) 
	}

	componentDidMount() {
		console.log("ViewScholarship.componentDidMount");
		var _url = "scholarships/" + this.props.params['scholarshipId']
		var ref = firebase.database().ref(_url)
		ref.on('value',function(snapshot) {
			var _scholarId = Object.keys(snapshot.val().scholar)[0];
			var _scholarUrl = "scholars/" + _scholarId;
		});
		//this.bindAsObject(scholarRef, 'scholar');
		this.bindAsObject(ref, 'scholarship');
		console.log(this.state.scholarship);
	}

	render() {
		if (this.state.scholarship) {
			var _address = this.state.scholarship.address;
			var _amount = this.state.scholarship.amount;
		} else {
			_address = ""
			_amount = ""
		}
		return(
			<div className="ViewScholarship" onClick={this.props.viewScholarship} >
			<div className="ViewScholarshipHeader" >ViewScholarship </div>
			{/*<div className="scholar-name" >{this.props.scholar.name} </div>
						<div className="scholar-name" >{this.props.scholar.about} </div>*/}
			<div className="scholarship-address">{_address}</div> 
			<div className="scholarship-donate">Donate</div>
			<div className="scholarship-amount"> {_amount} </div>

			</div>
		)
	}
}

reactMixin(ViewScholarship.prototype, ReactFireMixin);
export default ViewScholarship;
