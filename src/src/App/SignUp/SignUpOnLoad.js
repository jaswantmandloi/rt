import asyncComponent from '../../Core/AsyncComponent';

export default asyncComponent(() =>
    import('./SignUp').then(
      (module) => {
        return module.default
      }
    )
)
