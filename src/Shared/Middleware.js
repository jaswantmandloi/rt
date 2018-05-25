const promiseMiddleware = store => next => action => {
  next(action);
};

const localStorageMiddleware = store => next => action => {
  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}


export { promiseMiddleware, localStorageMiddleware }
