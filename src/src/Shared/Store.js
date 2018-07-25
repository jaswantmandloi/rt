import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import { combineReducers } from 'redux';
//import  thunk from 'redux-thunk';



import { promiseMiddleware, localStorageMiddleware } from './Middleware';
import InitReduces from './InitReduces';


const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(promiseMiddleware, localStorageMiddleware, myRouterMiddleware);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(promiseMiddleware, localStorageMiddleware, createLogger(), myRouterMiddleware)
  }
};


const store = createStore(
  combineReducers(InitReduces), composeWithDevTools(getMiddleware())
);

store.lastRducers = InitReduces;

export  {store, history};
