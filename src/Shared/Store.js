import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import { combineReducers } from 'redux';
import  thunk from 'redux-thunk';



import { promiseMiddleware, localStorageMiddleware } from './Middleware';
import InitReduces from './InitReduces';
import {registerReducer} from './AsyncReducers';

const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, thunk);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, thunk, createLogger())
  }
};

const store = createStore(
  combineReducers(InitReduces), composeWithDevTools(getMiddleware())
);

store.lastRducers = InitReduces;

//registerReducer(store, {});



export  {store, history};
