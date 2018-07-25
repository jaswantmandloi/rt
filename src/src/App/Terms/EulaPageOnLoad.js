import asyncComponent from '../../Core/AsyncComponent';

export default asyncComponent(() =>
    import('./EulaPage').then(
      (module) => {
        return module.default
      }
    )
)
