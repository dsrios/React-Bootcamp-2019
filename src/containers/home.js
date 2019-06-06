import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestMovies } from '../actions/movies';
import { requestUsers } from '../actions/users';
import Home from '../views/Home'

const mapStateToProps = (state) => ({
    movies: state.movies,
    users: state.users
})

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        requestMovies, // Permite que esto sea llamado como un dispatch
        requestUsers
    },
    dispatch
);

export default connect (mapStateToProps, mapDispatchToProps)(Home);// High Orden Component