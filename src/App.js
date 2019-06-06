import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore'

import './App.css';
// import Home from './views/Home';
import Home from './containers/home';
import MovieForm from './components/MovieForm';
// import MovieSearch from './components/MovieSearch';
import MovieDetails from './views/MovieDetails';

function authUser() {
    return true;
}

const store = configureStore();
const Routes = () => {
    const userAuth = authUser();

    return <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={MovieForm} />
        {/* <Route exact path="/search" component={MovieSearch} /> */}
        <Route exact path="/addAuth" render={(props) => <MovieForm {...props} userAuth={userAuth} />} />
        <Route exact path="/details/:id" component={MovieDetails} />
        {/* <Route component={() => <div>Not Found</div>} /> */}
    </Router >
}

function App() {
    return <Provider store={store}>
            <Routes></Routes>
        </Provider>
}


// export default Home
export default App