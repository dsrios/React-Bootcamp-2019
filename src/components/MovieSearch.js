import React, { Component } from 'react';

class MovieSearch extends Component {

    constructor(props) {
        super(props);

        this.state= {
            params: ''
        };
    }

    handleChange = (e) => {
        const params = e.target.params;
        const value = e.target.value;

        this.setState({ params: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.params);
    }



    render() {
        return <form className="searchForm" onSubmit={this.handleSubmit}>
            <input value={this.state.params} name='params' placeholder='Word to search' onChange={this.handleChange}></input>
            <input type="submit" value="Find" />
        </form>
    }

}

export default MovieSearch;