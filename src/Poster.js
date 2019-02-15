import React, {Component} from 'react';

// I am a presentational Component, that means I don't care about state
// I could have been in app.js but this is cleaner

class Poster extends Component{
    render(){
        const imagePath = `http://image.tmdb.org/t/p/w300${this.props.movie.poster_path}`;
        const moviePath = `http://www.themoviedb.org/movie/${this.props.movie.id}`;
        const title = this.props.movie.title;
        return(
            <div className="col s4 center">
                <a href={moviePath}>
                    <img src={imagePath} alt="movie posters"/>
                </a>
                <div className="col s12">
                    {title}
                </div>
            </div>
        )
    }
}

export default Poster;