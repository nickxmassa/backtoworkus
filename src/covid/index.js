import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class CovidStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://covidtracking.com/api/v1/states/current.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    const stateData = items.filter(item => item.state === this.props.location.pathname.substr(1).toUpperCase());
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Card body>
        <div>
          <h2>Latest COVID-19 Numbers</h2>
          <p>Positives: {stateData[0].positive}</p>
          <p>Total Tested: {stateData[0].totalTestResults}</p>
          <p><em>Last updated: {stateData[0].lastUpdateEt.slice(0, -5)}</em></p>
        </div>
        </Card>
      );
    }
  }
}

export default CovidStats;