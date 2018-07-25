import {registerReducer} from '../../Core/AsyncReducers';

const SignInRdcr = (state = {}, action) => {
  switch (action.type) {

    case 'SIGNIN_RESET':
      return {};

    case 'CHANGE_SIGNIN_STATE':      
      return {
        ...state,
        signInState : action.payload
      };
    case 'CHANGE_FORGOTPASS_STATE':      
      return {
        ...state,
        forgotPassState : action.payload
      };

    case 'CHANGE_FORGOTPASS_STATE_SUCCESS':      
      return {
        ...state,
        forgotPassStateSuccess : action.payload
      };

    default:
      return state
  }
}

registerReducer({SignInRdcr : SignInRdcr});

