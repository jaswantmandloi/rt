import asyncComponent from '../../Core/AsyncComponent';

export default asyncComponent(() =>
    import('./TermsPage').then(
      (module) => {
        return module.default
      }
    )
)
