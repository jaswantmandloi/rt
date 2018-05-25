
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';



export function registerReducer(store, newReducers) {
  const state = store.getState();
  const lastReducers = store.lastRducers;
  var newReducers = {...lastReducers, ...newReducers};
  store.lastRducers = newReducers;
  const allNewReducers = createReducer(newReducers, store);
  
  store.replaceReducer(allNewReducers);
}



function createReducer (reducers, store) {
    return combineReducers({      
      ...reducers
    });
}
