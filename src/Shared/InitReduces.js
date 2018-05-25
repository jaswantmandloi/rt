
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { history } from './Store';

const HistoryReducer = (state = {history : null}, action) => {
  return {
    history : history
  };
}

const initReducers = {
  router: routerReducer,
  HistoryReducer : HistoryReducer,
  form : formReducer
};

export default initReducers
