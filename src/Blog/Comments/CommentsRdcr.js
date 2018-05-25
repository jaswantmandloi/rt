import {registerReducer} from '../../Shared/AsyncReducers';
import {store} from '../../Shared/Store';

const CommentsRdcr = (state = [], action) => {
  switch (action.type) {

    case 'INIT':
      return [];

    case 'ADD_COMMENT':
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

registerReducer(store, {CommentsRdcr : CommentsRdcr});

