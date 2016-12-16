import React, { Component } from 'react';
import {Link} from 'react-router';
import {Grid, Col, Row} from 'react-bootstrap';

import './../css/Home.css'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    }
    componentWillMount(){
      console.log("Home.componentWillMount")
      this.setState({}) 
    }
    componentDidMount() {
      console.log("Home.componentDidMount")
    }
  render()  {
    return(
      <div className="Home">
      <Grid>
      <Row>
      Welcome to JaagaScholarship
      </Row>
      <Row>
      <Link to="/scholars" activeClassName="active"> View Scholars</Link>
      </Row>
      <Row>
      <Link to="/arbiters" activeClassName="active"> View Arbiters</Link>
      </Row>
      <Row>
      <Link to="/donars" activeClassName="active"> View Donars</Link>
      </Row>
      </Grid>
      </div>

      ) 
    }
  }

export default Home;