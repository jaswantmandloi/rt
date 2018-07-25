
import { combineReducers } from 'redux';

import {store} from '../Shared/Store';



export function registerReducer(newReducers) {
  const state = store.getState();
  const lastReducers = store.lastRducers;
  newReducers = {...lastReducers, ...newReducers};
  store.lastRducers = newReducers;
  const allNewReducers = createReducer(newReducers, store);
  
  store.replaceReducer(allNewReducers);
}



function createReducer (reducers, store) {
    return combineReducers({      
      ...reducers
    });
}
