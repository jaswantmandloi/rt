import asyncComponent from '../../Core/AsyncComponent';

export default asyncComponent(() =>
    import('./UserDash').then(
      (module) => {
        return module.default
      }
    )
)
