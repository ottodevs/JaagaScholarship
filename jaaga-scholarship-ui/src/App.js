import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
//import {solcjs} from 'solc'; 
import {Grid, Row, Col} from 'react-bootstrap';



class App extends Component {
  constructor(){
    super();
    this.state = {
      sholarshipContract: undefined,
      scholarBalance: undefined,
      donarBalance: undefined,
      arbiterBalance: undefined,
      contractBalance: undefined,
    };
    this.addToScholarship.bind(this);
  }

  componentWillMount() {
    //console.log(jaggaScholarshipContract);
    console.log("App.componentWillMount");

    var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

    var source = `
    pragma solidity ^0.4.2;
    contract JaagaScholarship {
      address public donar;
      address public scholar;
      address public arbiter;

      function JaagaScholarship(address _scholar, address _arbiter) payable {
        donar = msg.sender;
        scholar = _scholar;
        arbiter = _arbiter;
      }

      function payoutToScholar() payable {
        if(msg.sender == donar || msg.sender == arbiter) {
          if (!scholar.send(this.balance))
            throw;
        }
      }

      function refundToDonar() payable {
        if(msg.sender == scholar || msg.sender == arbiter) {
          if (!donar.send(this.balance))
            throw;
        }
      }

      function getBalance() constant returns (uint) {
        return this.balance;
      }
      function addToScholarship() payable {
        }
    }`
    var clientCompiled = ETHEREUM_CLIENT.eth.compile.solidity(source)
    var bytecode = clientCompiled.code;
    var clientAbi = clientCompiled.info.abiDefinition;
    var jaagaScholarshipContractFactory = ETHEREUM_CLIENT.eth.contract(clientAbi);
    var donar = ETHEREUM_CLIENT.eth.accounts[0];
    var scholar = ETHEREUM_CLIENT.eth.accounts[1]; 
    var arbiter = ETHEREUM_CLIENT.eth.accounts[2];
    var contractAddress;
    var contractJaagaScholarship;

    var balance = (acct) => { return ETHEREUM_CLIENT.fromWei(ETHEREUM_CLIENT.eth.getBalance(acct),'ether').toNumber() } 
    var componentApp = this;
    var jaggaScholarshipContract = jaagaScholarshipContractFactory.new(scholar, arbiter,{
      from:donar,
      data:bytecode,
      gas:'4712000',
      gasPrice:5}, (error, contract) => {
        if(error) {
          console.log( "error: create new contract");
          console.log(error)
        } else {
          if(contract.address) {
            console.log("contract " + balance(contract.address))
            contractJaagaScholarship = contract;
            console.log(componentApp)
            this.setState({
              sholarshipContract: contract,
              scholarBalance: balance(scholar),
              donarBalance: balance(donar),
              arbiterBalance: balance(arbiter),
              contractBalance: balance(contract.address),
            });
            console.log("the state has been set")            

          }
        }
      });
    //console.log(jaggaScholarshipContract);
    console.log("account Balances")
    console.log("scholar " + balance(scholar))
    console.log("arbiter " + balance(arbiter))
    console.log("donar " + balance(donar))
  }

  componentDidMount() {
    //console.log(jaggaScholarshipContract);
    console.log("App.componentDidMount");
    //console.log("contract " + balance(contractAddress))

  }

  addToScholarship() {
    console.log("App.addToScholarship");
  }

  render() {
    console.log("App.render");
    var _scholarship;
    var _scholarshipAddress;
    if (this.state.sholarshipContract) {
      _scholarship = this.state.sholarshipContract
      _scholarshipAddress = this.state.sholarshipContract.address;
    } else {
      _scholarshipAddress = "";
    }

    return (
      <div className="App">
          <h2>Jaaga Scholarship Demo</h2>
          <Grid>
          <Row>
            Scholarship Address: {_scholarshipAddress}
          </Row>
          <Row>
          Balances: 
          </Row>
          <Row>
          arbiter: {this.state.arbiterBalance}
          </Row>
          <Row>
          Donar: {this.state.donarBalance}
          </Row>
          <Row>
          Scholar: {this.state.scholarBalance}
          </Row>
          <Row>
          Contract: {this.state.contractBalance}
          </Row>
          <Row>
          <Col >
            <div className="addToScholarship" onClick={this.addToScholarship}>Add to Scholarship</div>
          </Col>
          <Col>
          </Col>
          <Col>
          </Col>
          </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
