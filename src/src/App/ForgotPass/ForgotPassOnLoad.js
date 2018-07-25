import asyncComponent from '../../Core/AsyncComponent';

export default asyncComponent(() =>
    import('./ForgotPassForm').then(
      (module) => {
        return module.default
      }
    )
)
