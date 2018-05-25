import {registerReducer} from '../Shared/AsyncReducers';
import {store} from '../Shared/Store';

const AppRdcr = (state = [], action) => {
  switch (action.type) {

    case 'INIT':
      return [];

    case 'ADD_APP_STATE':
      return [
        ...state,
        {          
          text: action.text          
        }
      ]    
    default:
      return state
  }
}

registerReducer(store, {AppRdcr : AppRdcr});

