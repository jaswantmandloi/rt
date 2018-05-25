import asyncComponent from '../Shared/AsyncComponent';


export default asyncComponent(() =>
    import('./Xhr').then(
      (module) => {
        return module.default
      }
    )
)
