function compose (middleware) {
  if (!Array.isArray(middleware)) throw new TypeError('middleware must be an array');
  for (const fn of middleware) {
    if (typeof fn !== 'function') throw new TypeError('middleware must be an function');
  }

  return function (ctx, next) {

    let index = -1;
    function dispatch (i) {
      // 此条件成立: 栈溢出时
      if (i <= index) return Promise.reject(new Error('next() called multiple times'));
      index = i; // 将当前下标值保存至index中
      let fn = middleware[i]; // 调用当前下标对应的函数
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return dispatch(0);
  }
}