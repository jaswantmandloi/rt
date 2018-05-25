import {registerReducer} from '../Shared/AsyncReducers';
import {store} from '../Shared/Store';

const BlogRdcr = (state = [], action) => {
  switch (action.type) {

    case 'INIT':
      return {};

    case 'ADD_BLOG':
      return [
        ...state,
        {          
          text: action.text          
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

registerReducer(store, {BlogRdcr : BlogRdcr});

