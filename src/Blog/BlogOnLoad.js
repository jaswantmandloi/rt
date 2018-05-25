import {registerReducer} from '../Shared/AsyncReducers';
import {store} from '../Shared/Store';
import asyncComponent from '../Shared/AsyncComponent';



export default asyncComponent(() =>
    import('./BlogCntnr').then(
      (module) => {
        return module.default
      }
    )
)
