import asyncComponent from '../../Core/AsyncComponent';

export default asyncComponent(() =>
    import('./StripePage').then(
      (module) => {
        return module.default
      }
    )
)
