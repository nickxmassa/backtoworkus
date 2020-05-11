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
import { LifePreserver } from "react-bootstrap-icons";

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
          <h2><LifePreserver /> Other Resources</h2>
          <ul>
            <li>
            <a href={ link } target="_blank">Unemployment Benefits</a>
            </li>
            <li>
            <a href={ StateData[0].states[stateAbbr].covid_guidance } target="_blank">COVID Resources</a>
            </li>
            <li>
            <a href="https://www.benefits.gov/help/faq/Coronavirus-resources">Other Benefits</a>
            </li>
            </ul>
          </Card>
        </div>
      );
  }
}

export default Unemployment;