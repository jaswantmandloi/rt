

const FirebaseRdcr = (state = {}, action) => {
    switch (action.type) {
  
      case 'INIT':
        return {};
  
      case 'FIREBASE_AUTH_STATE_CHANGE':
        return {
          ...state,                  
            loggedInUser: action.payload                    
        };      
        
      case 'FIREBASE_USER_STATE_CHANGE':
        return {
          ...state,                  
            userData: action.payload                    
        };      

      case 'FIREBASE_PLANS_CHANGE':
        return {
          ...state,                  
            plans: action.payload                    
        };      
    
      default:
        return state
    }
}


export default FirebaseRdcr;