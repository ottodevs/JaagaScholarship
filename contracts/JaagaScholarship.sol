pragma solidity ^0.4.2;

contract JaagaScholarship {
  address public scholar;
  address public donar; //TODO handle multiple donars
  address public arbiter; //TODO handle multiple arbiters
  mapping (address => uint) balances;

  //TODO add a struct to store some other things about a scholar
  //TODO add a struct to store some other things about a donar

  function JaagaScholarship(address _donar, address _scholar, address _arbiter) payable {
    //donar = msg.sender;
    donar = _donar;
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

  function addToScholarship() payable {
    }
}
