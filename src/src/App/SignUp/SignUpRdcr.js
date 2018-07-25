import {registerReducer} from '../../Core/AsyncReducers';

const SignUpRdcr = (state = {}, action) => {
  switch (action.type) {

    case 'SIGNUP_RESET':
      return {};

    case 'CHANGE_SIGNUP_STATE':      
      return {
        ...state,
        ...action.payload
      };    
    break;
    case 'SET_PLAN_ID':
      return {
        ...state,
        ...action.payload
      };

    default:
      return state
  }
}

registerReducer({SignUpRdcr : SignUpRdcr});

