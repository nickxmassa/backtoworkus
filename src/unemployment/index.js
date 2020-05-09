import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import StateData from "../data/stateData.json";
import Card from "react-bootstrap/Card";

class Unemployment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stateAbbr = this.props.location.pathname.substr(1).toUpperCase();
    const link = "https://www.careeronestop.org/LocalHelp/UnemploymentBenefits/Find-Unemployment-Benefits.aspx?location=" + stateAbbr;
      return (
        <div>
          <Card body>
          <h2>Other Resources</h2>
          <ul>
            <li>
            <a href={ link } target="_blank">Unemployment Benefits</a>
            </li>
            <li>
            <a href={ StateData[0].states[stateAbbr].covid_guidance } target="_blank">COVID Resources</a>
            </li>
            </ul>
          </Card>
        </div>
      );
  }
}

export default Unemployment;