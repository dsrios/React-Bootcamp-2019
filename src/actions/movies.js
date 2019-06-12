import { REQUEST_MOVIES } from './actionsTypes'; // actions creators

export const requestMovies = () => ({
    type: REQUEST_MOVIES
})//return object

export const receiveMovies = () => ({
    type: RECEIVE_MOVIES,
    payload: movies
})

export const catchMovies = (error) => ({
    type: ERROR_MOVIES,
    payload: error
})

// export const fetchMovies = () => (dispatch) => {
//     dispatch(requestMovies())
//     getMovies().then(())
// }