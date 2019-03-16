import {createStore, combineReducers, compose} from 'redux';
import persistState from 'redux-localstorage'

function tokenReducer(state="", action) {
    switch (action.type) {
        case "SET_TOKEN":
            return action.token;
        case "CLEAR_TOKEN":
            return "";
        default:
            return state;
    }
}

function userReducer(state=null, action) {
    switch (action.type) {
        case "LOGGED_IN":
            return action.user;
        case "SIGN_OUT":
            return null;
        default:
            return state;
    }
}

function albumsReducer(state=[], action) {
    switch (action.type) {
        case "SET_ALBUMS":
            return action.user;
        case "CLEAR_ALBUMS":
            return null;
        default:
            return state;
    }
}

let rootReducer = combineReducers({
    token: tokenReducer,
    user: userReducer,
    albums: albumsReducer
});

let mainEnhancer = compose(persistState('token'));

let store = createStore(rootReducer, {}, mainEnhancer)

export default store;