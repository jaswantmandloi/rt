
import { routerReducer } from 'react-router-redux';

import { frmRducr } from './FormReduces';
import { history } from './Store';
import  FirebaseRdcr from './Firebase/FirebaseRdcr';

const HistoryReducer = (state = {history : null}, action) => {
  return {
    history : history
  };
}

const initReducers = {
  router: routerReducer,
  HistoryReducer : HistoryReducer,
  form : frmRducr,
  firebase : FirebaseRdcr
};

export default initReducers
