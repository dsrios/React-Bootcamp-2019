import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

export default () => {
    const store = createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store;
}


