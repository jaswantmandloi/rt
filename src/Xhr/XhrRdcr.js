import {registerReducer} from '../Shared/AsyncReducers';
import {store} from '../Shared/Store';

const XhrRdcr = (state = [], action) => {
  switch (action.type) {

    case 'INIT':
      return {};

    case 'FETCH_BOOKS_SUCCESS':
      return [
        ...state,
        ...action.books
      ]    

    case 'ADD_BLOG':
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

registerReducer(store, {XhrRdcr : XhrRdcr});

