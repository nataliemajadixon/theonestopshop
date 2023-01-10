import { combineReducers, createStore } from "redux";
import rootReducers from "./reducer";
// import thunk from 'redux-thunk';

import {
    userRegisterReducer,
} from '../constants/userReducers'


const store = createStore(rootReducers);



const reducer = combineReducers({
    userRegister : userRegisterReducer,
})

// const initialState = {}

// const middleware = [thunk]




export default store;