function cacheFunction(fn) {
  const cache = {};
  const newFunction = (...args) => {
    if (cache[args]) {
      return cache[args];
    }
    const newCall = fn(null, ...args);
    cache[args] = newCall;
    return newCall;
  };
  return newFunction;
}
function sumFibs(n, a = 0, b = 1) {
  const fastFib = cacheFunction(sumFibs);
  if (a > n) return 0;
  if (a % 2 !== 0) return a + fastFib(n, a + b, a);
  return 0 + fastFib(n, a + b, a);
}

export { sumFibs, cacheFunction };
