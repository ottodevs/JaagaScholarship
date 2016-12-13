import React, { Component } from 'react';
import {Link} from 'react-router';
import {Grid, Col, Row} from 'react-bootstrap';

import './../css/Header.css'

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount(){
    console.log("Header.componentWillMount")
    this.setState({}) 
  }
  componentDidMount() {
    console.log("Header.componentDidMount")
  }
  render() {
    return(
      <div className="Header">
      <Link to="/" activeClassName="active">
      <Grid>
        <Row>
        <Col xs={2} md={2} lg={2}>
        <div className="profile-pic"> </div>
        </Col>
        <Col className="display-name" xs={2} md={2}>
          Your Name
        </Col>
        <Col className="header-title" xs={2} md={2}>
        JaagaScholarship
        </Col>
        <Col xs={6} md={2} className="wallet-address">
          0x123451234512345
        </Col>
      </Row>
      </Grid>
      </Link>
      </div>
    )
  }
}
export default Header; 