import React from "react";
import moviesData from "../data/movies.json";
import MovieCard from "../components/MovieCard";

const URL = "https://api.themoviedb.org/3/movie/popular?";
const API_KEY = "api_key=ac2219349339922dfc79ab548de5ce10";
// const ALL_PATH = 'https://api.themoviedb.org/3/movie/popular?api_key=ac2219349339922dfc79ab548de5ce10';

class Home extends React.Component {
  state = {
    ...moviesData
  };

  deleteMovie = movieId => {
    this.setState((state, props) => {
      const movies = state.movies.filter(movie => movie.id !== movieId);
      return {
        movies
      };
    });
  };

  componentDidMount() {
    fetch(`${URL}${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const tenMovies = data.results.slice(0,10);
        this.setState({ movies: tenMovies });
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1 className="main-title">Movie App</h1>
        <div className="content">
          {movies.map(movie => (
            <MovieCard
              deleteMovie={this.deleteMovie}
              key={movie.id}
              {...movie}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
