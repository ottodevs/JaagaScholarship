import React, { Component } from 'react';

import {ApproveScholarship} from './ApproveScholarship';

import './../../css/ApproveScholarship.css'

export class ApproveScholarship extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  componentWillMount(){
    console.log("ApproveScholarship.componentWillMount")
    this.setState({}) 
  }

  componentDidMount() {
    console.log("ApproveScholarship.componentDidMount")
  }

  render() {
    return(
    <div className="ApproveScholarship">ApproveScholarship</div>
    )
  }
}
export default ApproveScholarship;