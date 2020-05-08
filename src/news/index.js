import React, { Component } from "react";

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
    if(prevProps.location.pathname.substr(1).toUpperCase() !== this.props.location.pathname.substr(1).toUpperCase()) {
    const stateSearch = this.props.location.pathname.substr(1).toUpperCase();
    fetch("https://newsapi.org/v2/everything?q=reopen " + stateSearch + " OR back to work " + stateSearch + "&apiKey=06553d518dfd4131a5fa14c25598cfaa")
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
    console.log(this.props);
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.source.url}>
              {item.source.name} {item.title}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default News;