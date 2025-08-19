/**
 * @param {any[]} arr
 * @param {Function} fn
 * @return {any[]}
 */
var sortBy = function(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};
