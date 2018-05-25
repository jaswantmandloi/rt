
const AsyncComponentRdcr = (state = {}, action) => {
  switch (action.type) {    
    case 'AsyncComponent':
      let componentName = action.componentName;
      return [
        ...state,
        {          
          componentName : action.component          
        }
      ]    
    default:
      return state
  }
}


export default AsyncComponentRdcr;

