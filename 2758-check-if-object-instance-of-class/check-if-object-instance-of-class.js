/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    // If either is null or undefined, return false
    if (obj == null || classFunction == null) return false;
    
    // Ensure classFunction is a function (constructor)
    if (typeof classFunction !== 'function') return false;
    
    // Get the prototype of the class
    const prototype = classFunction.prototype;
    
    // Check if obj's prototype chain includes the class's prototype
    let currentProto = Object.getPrototypeOf(obj);
    while (currentProto !== null) {
        if (currentProto === prototype) {
            return true;
        }
        currentProto = Object.getPrototypeOf(currentProto);
    }
    return false;
};
