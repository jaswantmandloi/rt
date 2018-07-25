
import { reducer as formReducer } from 'redux-form';
 
let signUpFrmLastState = { user_type: 'Individual' };

const frmRducr = formReducer.plugin({
  SignUpForm: (state, action) => {  
    if(action.type == "@@redux-form/CHANGE") {      
      signUpFrmLastState = {...signUpFrmLastState, ...state.values};      
    }
    
    return state;
  }
});


export {frmRducr, signUpFrmLastState}
