import React from 'react';

const withAuth = (WrappedComponent) => 
    class withAuth extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                isAuth: (window.localStorage.getItem('username') === 'Diego')
            }
        }


        componentDidMount() {
            // const currentUser = windows.localStorage.getItem('username');
        }

        render() {
            const data = {
                ...this.props,
                isAuth: (this.state.isAuth)
            }
            return <WrappedComponent {...data} />
        }
}

export default withAuth;
