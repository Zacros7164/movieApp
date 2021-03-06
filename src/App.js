import React, { Component } from 'react';
import './index.css';
import Poster from './Poster';
import NavBar from './NavBar';

class App extends Component {
  // in order to use this, we have to have constructor
  constructor(){
    super();
    this.state = {
      movieList: []
    }

    this.movieSearch = this.movieSearch.bind(this);

  }

  componentDidMount(){
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
    
    // fetch is a replacement for $.getJSON/$.ajax/axios
    fetch(url)
    .then((response)=>{
      return response.json();
    })
    .then((myJson)=>{
        const results = myJson.results;
        console.log(results)
        // this.state.moviesToShow = results // BAD BAD BAD
                             //    ^
                             //    |
                             //   BAD!!!!!
        this.setState({
            movieList: results
        });
    });

    console.log("Checking... yes! It's mounted");
  }

  movieSearch(e){
    e.preventDefault();
    // console.log("button clicked");
    const movieTitle = document.getElementById('searchTerm').value;
    console.log(movieTitle)

    const url = `https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=${movieTitle}`;

    fetch(url)
    .then((response)=>{
      return response.json();
    })
    .then((myJson)=>{
        const results = myJson.results;
        console.log(results)
        this.setState({
            movieList: results
        });
    });

  }

  render() {
    const posters = this.state.movieList.map((movie,i)=>{
      return(<Poster key={i} movie={movie}/>)
    })
    return (
      <div className="container">
        <NavBar />
        <div className="row center">
          <h1>The movie app... again</h1>
          <form onSubmit={this.movieSearch}>
            <input id="searchTerm" type="text" placeholder="Movie Title" />
            <button type="submit" className="btn waves-effect" >Search</button>
          </form>
          {posters}
        </div>
      </div>
    );
  }
}

export default App;
