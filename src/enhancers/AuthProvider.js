import React, { Component } from 'react';

export default class AuthProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: (window.localStorage.getItem('username') === 'Diego')
        }
    }

    render() {
        return this.props.render(this.state.isAuth)
    }
}