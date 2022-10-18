"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeClassOfElement = exports.addClassOfElement = exports.toggleClassOfElement = exports.clearChildrenOfElement = exports.flatten = exports.range = exports.roll = exports.sleep = void 0;
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
exports.sleep = sleep;
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
exports.roll = roll;
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
exports.range = range;
function flatten(nested_array) {
    function flatten2DArray(array) {
        return [].concat(...array);
    }
    return flatten2DArray(nested_array.map(x => Array.isArray(x) ? flatten(x) : [x]));
}
exports.flatten = flatten;
function clearChildrenOfElement(element) {
    for (let child of Array.from(element.childNodes)) {
        element.removeChild(child);
    }
}
exports.clearChildrenOfElement = clearChildrenOfElement;
function toggleClassOfElement(element, class_name) {
    if (element.classList.contains(class_name)) {
        element.classList.remove(class_name);
    }
    else {
        element.classList.add(class_name);
    }
}
exports.toggleClassOfElement = toggleClassOfElement;
function addClassOfElement(element, class_name) {
    if (!element.classList.contains(class_name)) {
        element.classList.add(class_name);
    }
}
exports.addClassOfElement = addClassOfElement;
function removeClassOfElement(element, class_name) {
    if (element.classList.contains(class_name)) {
        element.classList.remove(class_name);
    }
}
exports.removeClassOfElement = removeClassOfElement;
//# sourceMappingURL=util.js.map