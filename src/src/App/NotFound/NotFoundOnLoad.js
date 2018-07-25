import asyncComponent from '../../Core/AsyncComponent';

import { routes } from '../../Shared/Routes';

export default asyncComponent(() =>
    import('./NotFound').then(
      (module) => {
        return module.default
      }
    )
)
