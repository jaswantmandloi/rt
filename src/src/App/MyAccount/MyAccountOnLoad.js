import asyncComponent from '../../Core/AsyncComponent';

export default asyncComponent(() =>
    import('./MyAccount').then(
      (module) => {
        return module.default
      }
    )
)
