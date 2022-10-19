function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
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
function flatten(nested_array) {
    function flatten2DArray(array) {
        return [].concat(...array);
    }
    return flatten2DArray(nested_array.map(x => Array.isArray(x) ? flatten(x) : [x]));
}
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
function diagnose(variable) {
    return variable !== null && typeof (variable) !== 'undefined';
}
function getCurrentTime() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${pad(date.getHours().toString(), '0', 2)}:${pad(date.getMinutes().toString(), '0', 2)}:${pad(date.getSeconds().toString(), '0', 2)}`;
}
function clearChildren(element) {
    for (let child of Array.from(element.childNodes)) {
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
export { sleep, roll, range, flatten, pad, diagnose };
export { getCurrentTime };
export { clearChildren, toggleClass, addClass, removeClass };
//# sourceMappingURL=util.js.map