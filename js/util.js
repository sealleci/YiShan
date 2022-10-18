"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeClass = exports.addClass = exports.toggleClass = exports.clearChildren = exports.getCurrentTime = exports.pad = exports.flatten = exports.range = exports.roll = exports.sleep = void 0;
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
exports.pad = pad;
function getCurrentTime() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${pad(date.getHours().toString(), '0', 2)}:${pad(date.getMinutes().toString(), '0', 2)}:${pad(date.getSeconds().toString(), '0', 2)}`;
}
exports.getCurrentTime = getCurrentTime;
function clearChildren(element) {
    for (let child of Array.from(element.childNodes)) {
        element.removeChild(child);
    }
}
exports.clearChildren = clearChildren;
function toggleClass(element, class_name) {
    if (element.classList.contains(class_name)) {
        element.classList.remove(class_name);
    }
    else {
        element.classList.add(class_name);
    }
}
exports.toggleClass = toggleClass;
function addClass(element, class_name) {
    if (!element.classList.contains(class_name)) {
        element.classList.add(class_name);
    }
}
exports.addClass = addClass;
function removeClass(element, class_name) {
    if (element.classList.contains(class_name)) {
        element.classList.remove(class_name);
    }
}
exports.removeClass = removeClass;
//# sourceMappingURL=util.js.map