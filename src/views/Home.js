import React from "react";
import moviesData from "../data/movies.json";
import MovieCard from "../components/MovieCard";

import MainLayout from '../layouts/MainLayout';

// import MovieForm from "../components/MovieForm";
import MovieSearch from "../components/MovieSearch";
import Axios from "axios";

import WithAuth from '../enhancers/withAuth';
import AuthProvider from "../enhancers/AuthProvider.js";

const URL = "https://api.themoviedb.org/3/";
const POPULATE = "movie/popular";
const SEARCH = "search/movie";
const DETAILS = "movie/";
const API_KEY = "?api_key=ac2219349339922dfc79ab548de5ce10";
// const ALL_PATH = 'https://api.themoviedb.org/3/movie/popular?api_key=ac2219349339922dfc79ab548de5ce10';
// Details https://api.themoviedb.org/3/movie/343611?api_key={api_key}

const WelcomeText = ({ isAuth }) => {
  return <h1>{isAuth ? 'Welcome Home' : 'Go Away \n No username on local Storage'}</h1>
}

class Home extends React.Component {
  state = {
    ...moviesData,
    details: ''
  };


  getDetails = (movieId) => {
    // https://api.themoviedb.org/3/movie/343611?api_key={api_key}
    console.log('Id to get details', movieId);

    Axios.get(`${URL}${DETAILS}${movieId}${API_KEY}`).then(
      res => {

        if (res.status === 200) {
          const MOVIE_DETAILS = res.data;
          const GENRES = MOVIE_DETAILS.genres;
          // console.log('Details from movies ===>', GENRES);
          this.setState({ details: GENRES });
        }
      }
    )
  }

  findMovie = (params) => {
    // https://api.themoviedb.org/3/search/movie?api_key=ac2219349339922dfc79ab548de5ce10&query=Avengers
    console.log('Movie to Search', params);
    Axios.get(`${URL}${SEARCH}${API_KEY}&query=${params}`).then(
      res => {
        if (res.status === 200) {
          console.log('Answer from Searh ', res.data.results);
          const RESULTS = res.data.results;

          // Replace current data with the search data
          this.setState({ movies: RESULTS });

          // Get all details about movies
          this.getDetails(RESULTS[0].id);

        } else {
          alert("Don't results to show", res.status);
        }

      }
    )
  }

  addMovie = (movie) => {
    console.log('Movie ====', movie);

    // const MOVIES = this.state.movies;
    // MOVIES.push(movie);
    // this.setState({ MOVIES })

    this.setState({ movies: [...this.state.movies, movie] })
  }

  deleteMovie = movieId => {
    this.setState((state, props) => {
      const movies = state.movies.filter(movie => movie.id !== movieId);
      return {
        movies
      };
    });
  };

  componentDidMount() {
    fetch(`${URL}${POPULATE}${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const tenMovies = data.results.slice(0, 5);
        this.setState({ movies: tenMovies });
      });
  }


  render() {
    const { movies } = this.state;
    const details = this.state.details;
    console.log('Data in the render ==>', details);
    // const {isAuth} = this.props; use with HOC


    return <AuthProvider render={(isAuth) =>
      <React.Fragment>
        <WelcomeText isAuth={isAuth} />
        <MainLayout>
          <MovieSearch onSubmit={this.findMovie} />
          {movies.map((movie, index) => (
            <MovieCard
              deleteMovie={this.deleteMovie}
              key={movie.id}
              {...movie}
            />
          ))}
        </MainLayout>
      </React.Fragment>
    } />


    // changes for router
    // <div>
    //   <h1 className="main-title">Movie App</h1>
    //   <div className="content">
    //     {/* <MovieForm onSubmit={this.addMovie} /> */}
    //     <MovieSearch onSubmit={this.findMovie} />
    //     {movies.map( (movie, index) => (
    //       <MovieCard
    //         deleteMovie={this.deleteMovie}
    //         key={movie.id}
    //         {...movie}              
    //       />
    //     ))}          
    //   </div>
    // </div>

  }
}

// export default Home;
// Use this way to call HOC component (WithAuth)
// export default WithAuth(Home);

export default Home; // With AuthProvider
