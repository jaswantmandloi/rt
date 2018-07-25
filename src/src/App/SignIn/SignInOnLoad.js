import asyncComponent from '../../Core/AsyncComponent';

export default asyncComponent(() =>
    import('./SignIn').then(
      (module) => {
        return module.default
      }
    )
)
