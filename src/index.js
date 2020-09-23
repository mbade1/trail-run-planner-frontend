import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//new store
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';


//setup the store
//applyMiddleware
//pass in the reducer - hasn't been created yet. Need to create this! Second arg is any middleware, in this case, thunk
//Also need to set up dev tools

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

