import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
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
            <a href={ link } target="_blank">{ stateAbbr } Unemployment Benefits</a>
          </Card>
        </div>
      );
  }
}

export default Unemployment;