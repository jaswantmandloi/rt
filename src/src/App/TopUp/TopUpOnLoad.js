import AsyncComponent from '../../Core/AsyncComponent';

export default AsyncComponent(() =>
    import('./TopUp').then(
      (module) => {
        return module.default
      }
    )
)
