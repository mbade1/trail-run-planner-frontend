import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//new store
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './reducers/reducer'
import { BrowserRouter as Router } from 'react-router-dom';
import { trackPromise} from 'react-promise-tracker';
import { usePromiseTracker } from "react-promise-tracker";


const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && 
    <h1>Hey some async call in progress ! </h1>
  );  
}



//setup the store
//applyMiddleware
//pass in the reducer - hasn't been created yet. Need to create this! Second arg is any middleware, in this case, thunk
//Also need to set up dev tools


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(thunk)),
)

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <App />
      <LoadingIndicator/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

