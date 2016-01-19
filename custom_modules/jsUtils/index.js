/**
 * @param obj, a dictionary
 * used to convert a dictionary to an array,
 * let arr = Array.from(dictValues(obj));
 */

//------------------------------
// disabled for compiling error
//------------------------------
//
//function* dictValues(obj) {
//    for (let prop of Object.keys(obj))
//        yield obj[prop];
//}

/**
 * Convert a dictionary to an array
 * @param dictionary
 * @param keyName
 * @returns {Array}
 */
function dictToArray(dictionary, keyName){
    var array = [];
    for (var key in dictionary) {
        if (dictionary.hasOwnProperty(key)) {
            var obj = dictionary[key];
            if(keyName){
                obj[keyName] = key;
            }
            array.push(obj);
        }
    }

    return array;
}

/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

module.exports = {

    dictToArray,
    clamp

};