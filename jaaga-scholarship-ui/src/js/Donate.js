import React, { Component } from 'react';

import {Donate} from './Donate';

import './../../css/Donate.css'

export class Donate extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		componentWillMount(){
			console.log("Donate.componentWillMount")
			this.setState({}) 
		}
		componentDidMount() {
			console.log("Donate.componentDidMount")
		}
	}
	render()	{
		return(
			<div className="Donate">Donate</div>
			) 
		}
	}
}
export default Donate;