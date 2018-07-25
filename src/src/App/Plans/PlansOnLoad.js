import asyncComponent from '../../Core/AsyncComponent';

export default asyncComponent(() =>
    import('./Plans').then(
      (module) => {
        return module.default
      }
    )
)
