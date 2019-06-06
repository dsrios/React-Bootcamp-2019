import {CreateStore} from 'redux';
import rootReducer from 'reducers';

export default (initialState) => {
    const store = CreateStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store;
}


