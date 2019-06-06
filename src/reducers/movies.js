import initialState from './initialState'
import {REQUEST_MOVIES} from '../actions/actionsTypes'
import movies from '../data/movies';

export default (state = initialState.movies, action) => {
    switch (action.type) {
        case REQUEST_MOVIES:
            return { ...state, data: movies.movies}
        default:
            return state
    }
}