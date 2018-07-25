import asyncComponent from '../../Core/AsyncComponent';

export default asyncComponent(() =>
    import('./PrivacyPage').then(
      (module) => {
        return module.default
      }
    )
)
