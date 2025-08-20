/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // Call immediately
    fn(...args);

    // Repeat every t ms
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Return cancel function
    const cancelFn = () => clearInterval(intervalId);

    return cancelFn;
};
