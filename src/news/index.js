import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import StateData from '../data/stateData.json';
import SearchTerms from '../data/searchTerms.json';
import BlockedSources from '../data/blockedSources.json';
import { Newspaper } from "react-bootstrap-icons";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

    componentDidMount() {

      const stateAbbr = this.props.location.pathname.substr(1).toUpperCase();
      const searchTerms = SearchTerms;
      searchTerms.push(StateData[0].states[stateAbbr].governor);
      const query = searchTerms.join(" OR ");

      // Testing removing non-local news sources
      const removeSources = BlockedSources;
      const removedSources = removeSources.join(",");


    const stateSearch = this.props.location.full;
    fetch("https://newsapi.org/v2/everything?q=" + query + " AND " + StateData[0].states[stateAbbr].state + "&sortBy=publishedAt&excludeDomains=" + removedSources + "&apiKey=06553d518dfd4131a5fa14c25598cfaa")
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

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.location.full !== this.props.location.full) {

      const stateAbbr = this.props.location.pathname.substr(1).toUpperCase();
      const searchTerms = SearchTerms;
      searchTerms.push(StateData[0].states[stateAbbr].governor);
      const query = searchTerms.join(" OR ");

      // Testing removing non-local news sources
      const removeSources = BlockedSources;
      const removedSources = removeSources.join(",");

    fetch("https://newsapi.org/v2/everything?q=" + query + " AND " + StateData[0].states[stateAbbr].state + "&sortBy=publishedAt&excludeDomains=" + removedSources + "&apiKey=06553d518dfd4131a5fa14c25598cfaa")
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
        <h2><Newspaper /> Latest News</h2>
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