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
    const emailLink = "mailto:info@backtowork.us?subject=Guidance update needed for " + StateData[0].states[stateAbbr].state;
    return (
      <Jumbotron fluid>
        <Container>
          <h1>{ StateData[0].states[stateAbbr].state }</h1>
          <p>Governor: { StateData[0].states[stateAbbr].governor }</p>
          <a href={ StateData[0].states[stateAbbr].reopen_plan } target="_blank">Reopening Guidance</a>
          <p><em>Reopening Guidance link last updated { StateData[0].states[stateAbbr].plan_updated }</em>. 
          To report out-of-date or inaccurate information, please email <a href={emailLink}>info@backtowork.us</a>.</p>
        </Container>
      </Jumbotron>
    );
  }
}

export default StateHeader;