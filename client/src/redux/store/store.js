import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import registerReducer from '../reducers/registerReducer'
import loginReducer from '../reducers/loginReducer';
import authReducer from '../reducers/authReducer';
import profileReducer from '../reducers/profileReducer';

const reducers = combineReducers({
    createNewUser: registerReducer,
    login: loginReducer,
    authentication: authReducer,
    defaultProfile: profileReducer
});
const initialState = {};
const middleware = [thunk];
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;