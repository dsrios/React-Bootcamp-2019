import React, { Component } from 'react';

class MovieForm extends Component {

    state = {
        id: '',
        title: '',
        year: '',
        image: '',
        genre: '',
        overview: ''
    };

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

    render() {
        return <form className="searchForm" onSubmit={this.handleSubmit}>
            <input value={this.state.id} name="id" placeholder='id' onChange={this.handleChange} />
            <input value={this.state.title} name="title" placeholder='title' onChange={this.handleChange} />
            <input value={this.state.year} name="year" placeholder='year' onChange={this.handleChange} />
            <input value={this.state.image} name="image" placeholder='image' onChange={this.handleChange} />
            <input value={this.state.genre} name="genre" placeholder='genre' onChange={this.handleChange} />
            <input value={this.state.overview} name="overview" placeholder='overview' onChange={this.handleChange} />
            <input type="submit" value="save" />
        </form >
    }

}

export default MovieForm;