import React, { Component } from 'react';
import MainLayout from '../layouts/MainLayout';

class MovieForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            year: '',
            image: '',
            genre: '',
            overview: ''
        };

        this.yearRef = React.createRef();
    }



    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        // previene el envio de los parametros por get
        e.preventDefault();
        this.props.onSubmit(this.state);

        // Crear la peticion para enviar datos a la API

    }

    componentDidMount() {

        // nunca hacer esto en React !!! 
        // --> const movieID = window.document.getElementById('movieId').value = '1991';

        // Do not it always, this is the correct way to access the DOM.
        this.yearRef.current.focus();
    }

    render() {
        console.log('All data for params', this.props);
        console.log('Data for params', this.props.location.pathname);
        
        return <MainLayout>
            <form className="searchForm" onSubmit={this.handleSubmit}>
                <input value={this.state.id} name="id" placeholder='id' onChange={this.handleChange} />
                <input value={this.state.title} name="title" placeholder='title' onChange={this.handleChange} />
                <input value={this.state.year} ref={this.yearRef} name="year" placeholder='year' onChange={this.handleChange} />
                <input value={this.state.image} name="image" placeholder='image' onChange={this.handleChange} />
                <input value={this.state.genre} name="genre" placeholder='genre' onChange={this.handleChange} />
                <input value={this.state.overview} name="overview" placeholder='overview' onChange={this.handleChange} />
                <input type="submit" value="save" />
            </form >
        </MainLayout>
    }

}

export default MovieForm;