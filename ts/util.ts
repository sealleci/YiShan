import { NestedArray } from './type.js'

/**
 * Sleep for given time.
 * @param ms an integer for milliseconds.
 * @returns Promise.
 */
function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

/**
 * Return a random integer within given range.
 * 
 * Usages:
 * - ```roll(5) -> i in [0, 5)```.
 * - ```roll(1, 10) -> i in [1, 10]```.
 */
function roll(min: number, max?: number): number {
    if (max === undefined) {
        max = min - 1
        min = 0
    }

    if (min > max) {
        [min, max] = [max, min]
    }

    return Math.floor(Math.random() * (max - min + 1)) + Math.floor(min)
}

/**
 * Return a discrete array of given range.
 * 
 * Usages:
 * - ```range(3) -> [0, 1, 2]```.
 * - ```range(1, 3) -> [1, 2, 3]```.
 */
function range(start: number, end?: number): readonly number[] {
    if (end === undefined) {
        if (start <= 0) {
            return []
        }
        end = start - 1
        start = 0
    }

    if (start > end) {
        [start, end] = [end, start]
    }

    let array: number[] = []
    for (let i = start; i <= end; i += 1) {
        array.push(i)
    }

    return array
}

/**
 * Flatten nested array to one dimension.
 * 
 * Usages:
 * - ```flatten([[1], [2]]) -> [1, 2]```.
 */
function flatten<T>(nested_array: NestedArray<T>): T[] {
    function flatten2DArray<S>(array: S[][]): S[] {
        return ([] as S[]).concat(...array)
    }
    return flatten2DArray(nested_array.map(x => Array.isArray(x) ? flatten(x) : [x]))
}

/**
 * @param text Original string.
 * @param filler Padding filler.
 * @param width Padding width.
 * @param is_left Flag which determines left or right padding.
 * @returns string.
 */
function pad(text: string, filler: string, width: number, is_left: boolean = true): string {
    if (text.length + filler.length > width) {
        return text
    }

    let remain_width = width - text.length
    let result = text

    while (true) {
        if (remain_width < filler.length) {
            break
        }

        result = is_left ? filler + result : result + filler
        remain_width -= filler.length
    }

    return result
}

/**
 * Return the current local time.
 * @return string ```{fmt: "yyyy-MM-dd HH:mm:ss"}```.
 */
function getCurrentTime(): string {
    const date = new Date()
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${pad(date.getHours().toString(), '0', 2)}:${pad(date.getMinutes().toString(), '0', 2)}:${pad(date.getSeconds().toString(), '0', 2)}`
}

function clearChildren(element: HTMLElement) {
    for (let child of Array.from(element.childNodes)) {
        element.removeChild(child)
    }
}

function toggleClass(element: HTMLElement, class_name: string) {
    if (element.classList.contains(class_name)) {
        element.classList.remove(class_name)
    } else {
        element.classList.add(class_name)
    }
}

function addClass(element: HTMLElement, class_name: string) {
    if (!element.classList.contains(class_name)) {
        element.classList.add(class_name)
    }
}

function removeClass(element: HTMLElement, class_name: string) {
    if (element.classList.contains(class_name)) {
        element.classList.remove(class_name)
    }
}

export { sleep, roll, range, flatten, pad }
export { getCurrentTime }
export { clearChildren, toggleClass, addClass, removeClass }

// function test() {
//     console.log(getCurrentTime())
// }
// test()