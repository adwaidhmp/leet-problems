/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe: function(a){
            if(val===a){
                return true
            }
            else{
                throw new Error("Not Equal")
            }
        },
        notToBe:function(b){
            if (val!==b){
                return true
            }
            else{
                throw new Error("Equal")
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */