import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import MainLayout from '../layouts/MainLayout';
import Axios from 'axios';
import { tsImportEqualsDeclaration } from '@babel/types';

const URL = "https://api.themoviedb.org/3/";
const DETAILS = "movie/";
const API_KEY = "?api_key=ac2219349339922dfc79ab548de5ce10";

export default class MovieDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: ''
        };
    }

    // state = {
    //     movies: ''
    // }

    getMovie = (movieId) => {
        Axios.get(`${URL}${DETAILS}${movieId}${API_KEY}`).then(
            res => {
                if (res.status === 200) {
                    console.log('MOVIE ', res.data);
                    this.setState({ movies: res.data })

                }
            }
        )
    }

    componentDidMount() {
        // call getMovie
        // update the Set
        if (this.props.match.params.id) {
            this.getMovie(this.props.match.params.id);
        }
    }

    render() {
        const movie = this.state.movies;
        const {genres} = movie;
        const { match } = this.props;

        console.log('All data for params', match.params.id);
        console.log('RENDER CONST MOVIE', movie, genres);

        return <React.Fragment>
            <MainLayout>
                <MovieCard {...movie} />
                <div>
                    <label>
                        Details:
                    </label>

                    {genres
                        ? <ul>
                            {
                                genres.map((gen, index) => (
                                    <li>{gen.name}</li>
                                ))
                            }
                        </ul>
                        : ""
                    }                    
                </div>
            </MainLayout>
        </React.Fragment>
    }

}