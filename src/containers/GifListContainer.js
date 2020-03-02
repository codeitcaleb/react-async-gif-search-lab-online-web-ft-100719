import React, { Component } from "react";
import GifSearch from '../components/GifSearch'
import { GifList } from "../components/GifList";

const URL =
  "https://api.giphy.com/v1/gifs/search?api_key=0fMe6OKTasoBrSK7c2c1QHjfbUGy5OzE&limit=3&q=";

export default class GifListContainer extends Component {
  state = {
    gifs: [],
    query: ""
  };

  componentDidMount() {
    this.fetchGifs();
  }

  componentDidUpdate(prevState) {
    if (this.state.gifs === prevState.query) {
      return true
    }
  }

  handleOnChange = (event) => {
    event.persist();
    this.setState({
      query : event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.setState({
      query: event.target.value
    })
    this.fetchGifs(this.state.query);
  };

  fetchGifs = (query = "dolphins") => {
    fetch(URL + query)
      .then(res => res.json())
      .then(object => {
        console.log(object.data)
        this.setState({
          gifs: object.data
        })
      });
  };

  render() {
    return (
      <div>
        <GifSearch 
          query={this.state.query}
          handleChange={this.handleOnChange}
          handleSubmit={this.handleOnSubmit} 
        />
        <GifList 
          gifs={this.state.gifs}
        />
      </div>
    )
  }
}
