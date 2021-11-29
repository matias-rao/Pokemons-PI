import {createStore, applyMiddleware, compose } from "redux";

import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// thunk para crear acciones con promesas
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
