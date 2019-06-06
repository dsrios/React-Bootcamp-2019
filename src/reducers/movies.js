import movies from '../data';

export default (state, action) => {
    switch (actions.type) {
        case REQUEST_MOVIES:
            return { ...state}
        default:
            break;
    }
}