import initialState from './initialState';
import {REQUEST_USERS} from '../actions/actionsTypes';

import users from '../data/users';

export default (state = initialState.users, action) => {
    switch (action.type) {
        case REQUEST_USERS:
            return { ...state, data: users.users};

        default:
            return state;
    }
}