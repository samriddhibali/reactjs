import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {DetailReducer} from './Reducer/DetailReducer';
import {LoginReducer} from './Reducer/LoginReducer';
import thunk from 'redux-thunk';

const Reducer = combineReducers({
    DetailReducer,
    LoginReducer
  })

const store = createStore(Reducer, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
