/**
 * Sleep for given time.
 *
 * Usage:
 * ``` js
 * await sleep(100)
 * ```
 * @param ms Milliseconds.
 */
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
/**
 * Return a random integer within given range.
 *
 * Usage:
 * ``` js
 * roll(5) // i in [0, 5)
 * roll(1, 10) // i in [1, 10]
 * ```
 */
function roll(min, max) {
    if (max === undefined) {
        max = min - 1;
        min = 0;
    }
    if (min > max) {
        [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + Math.floor(min);
}
/**
 * Return a discrete array of given range.
 *
 * Usage:
 * ``` js
 * range(3) // [0, 1, 2]
 * range(1, 3) // [1, 2, 3]
 * ```
 */
function range(start, end) {
    if (end === undefined) {
        if (start <= 0) {
            return [];
        }
        end = start - 1;
        start = 0;
    }
    if (start > end) {
        [start, end] = [end, start];
    }
    let array = [];
    for (let i = start; i <= end; i += 1) {
        array.push(i);
    }
    return array;
}
/**
 * Flatten nested array to one dimension.
 *
 * Usage:
 * ``` js
 * flatten([[1], [2]]) // [1, 2]
 * ```
 */
function flatten(nested_array) {
    function flatten2DArray(array) {
        return [].concat(...array);
    }
    return flatten2DArray(nested_array.map(x => Array.isArray(x) ? flatten(x) : [x]));
}
/**
 * @param text Original string.
 * @param filler Padding filler.
 * @param width Padding width.
 * @param is_left Flag which determines left or right padding.
 */
function pad(text, filler, width, is_left = true) {
    if (text.length + filler.length > width) {
        return text;
    }
    let remain_width = width - text.length;
    let result = text;
    while (true) {
        if (remain_width < filler.length) {
            break;
        }
        result = is_left ? filler + result : result + filler;
        remain_width -= filler.length;
    }
    return result;
}
/**
 * Print given value into console.
 * @param lazy_value Value with lazy evaluation.
 */
function log(label, lazy_value) {
    console.log(`${pad('(' + label + ')', ' ', 40, false)} => ${lazy_value()}`);
}
/**
 * Determine whether given condition is true, and throw error when false.
 * @param lazy_condition Condition with lazy evaluation.
 */
function assert(label, lazy_condition) {
    if (lazy_condition()) {
        console.log(`${pad('(' + label + ')?', ' ', 40, false)} => true`);
    }
    else {
        throw new Error(`${pad('(' + label + ')?', ' ', 40, false)} => false`);
    }
}
/**
 * Call functions in a row which are both without parameters and returns.
 */
function conduct(...functions) {
    for (let i = 0; i < functions.length; i += 1) {
        functions[i]();
    }
}
/**
 * Return the current local time.
 *
 * Format of time:
 * ``` js
 * /yyyy-MM-dd HH:mm:ss/
 * ```
 */
function getTime() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${pad(date.getHours().toString(), '0', 2)}:${pad(date.getMinutes().toString(), '0', 2)}:${pad(date.getSeconds().toString(), '0', 2)}`;
}
/**
 * Reutrn a UUIDv4.
 *
 * Format of UUIDv4:
 * ``` js
 * /[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/
 * ```
 */
function getUUID() {
    function getNumber(limit) {
        return (limit * Math.random()) | 0;
    }
    function getXes(count) {
        let result = '';
        for (let i = 0; i < count; i += 1) {
            result += getNumber(16).toString(16).toLowerCase();
        }
        return result;
    }
    function getVariant() {
        return ((getNumber(16) & 0x3) | 0x8).toString(16).toLowerCase();
    }
    return `${getXes(8)}-${getXes(4)}-4${getXes(3)}-${getVariant()}${getXes(3)}-${getXes(12)}`;
}
/**
 * Determine whether a variable is not ```null``` and ```undefined```.
 */
function isReal(variable) {
    return variable !== null && variable !== undefined;
}
/**
 * Determine whether a number is not ```NaN``` and ```Infinity```.
 */
function isCommon(value) {
    return !(isNaN(value) || value === Infinity);
}
function clearChildren(element) {
    for (const child of Array.from(element.childNodes)) {
        element.removeChild(child);
    }
}
function toggleClass(element, class_name) {
    if (element.classList.contains(class_name)) {
        element.classList.remove(class_name);
    }
    else {
        element.classList.add(class_name);
    }
}
function addClass(element, class_name) {
    if (!element.classList.contains(class_name)) {
        element.classList.add(class_name);
    }
}
function removeClass(element, class_name) {
    if (element.classList.contains(class_name)) {
        element.classList.remove(class_name);
    }
}
export { sleep, roll, range, flatten, pad, log, assert, getTime, getUUID, conduct, isReal, isCommon };
export { clearChildren, toggleClass, addClass, removeClass };
//# sourceMappingURL=util.js.map