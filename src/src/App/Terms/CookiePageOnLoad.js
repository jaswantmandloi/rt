import asyncComponent from '../../Core/AsyncComponent';

export default asyncComponent(() =>
    import('./CookiePage').then(
      (module) => {
        return module.default
      }
    )
)
