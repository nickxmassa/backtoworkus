import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import StateData from '../data/stateData.json';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.location.full !== this.props.location.full) {

      const stateAbbr = this.props.location.pathname.substr(1).toUpperCase();
      const searchTerms = [];
      searchTerms.push("reopen " + StateData[0].states[stateAbbr].state);
      searchTerms.push("reopening " + StateData[0].states[stateAbbr].state);
      searchTerms.push("back to work " + StateData[0].states[stateAbbr].state);
      searchTerms.push("covid " + StateData[0].states[stateAbbr].state);
      searchTerms.push("covid-19 " + StateData[0].states[stateAbbr].state);
      searchTerms.push(StateData[0].states[stateAbbr].governor);
      const query = searchTerms.join(" OR ");

      // Testing removing non-local news sources
      const removeSources = [];
      removeSources.push('seekingalpha.com');
      removeSources.push('fool.com');
      removeSources.push('ctvnews.ca');
      removeSources.push('nakedcapitalism.com');
      removeSources.push('politico.com');
      removeSources.push('dailymail.co.uk');
      removeSources.push('salon.com');
      removeSources.push('hotair.com');
      removeSources.push('mirror.co.uk')
      removeSources.push('cnn.com');
      removeSources.push('usatoday.com');
      removeSources.push('businessinsider.com.au');
      removeSources.push('npr.org');
      removeSources.push('foxnews.com');
      removeSources.push('yahoo.com');
      removeSources.push('theatlantic.com');
      removeSources.push('motherjones.com');
      removeSources.push('freerepublic.com');

      const removedSources = removeSources.join(",");


    const stateSearch = this.props.location.full;
    fetch("https://newsapi.org/v2/everything?q=" + query + "&sortBy=publishedAt&excludeDomains=" + removedSources + "&apiKey=06553d518dfd4131a5fa14c25598cfaa")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.articles
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
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Card body>
        <ul>
          {items.map(item => (
            <li key={item.source.url}>
              {item.source.name}: <a href={item.url} target="_blank">{item.title}</a>
            </li>
          ))}
        </ul>
        </Card>
      );
    }
  }
}

export default News;