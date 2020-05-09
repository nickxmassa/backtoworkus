import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Card from "react-bootstrap/Card";
import StateData from '../data/stateData.json';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

class StateHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stateAbbr = this.props.location.pathname.substr(1).toUpperCase();
    return (
      <Jumbotron fluid>
        <Container>
          <h1>{ StateData[0].states[stateAbbr].state }</h1>
          <a href={ StateData[0].states[stateAbbr].reopen_plan } target="_blank">Reopening Guidance</a>
        </Container>
      </Jumbotron>
    );
  }
}

export default StateHeader;