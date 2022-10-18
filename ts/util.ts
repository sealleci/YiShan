import { NestedArray } from './type'

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
 * Return a random integer of given range.
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
 * Return an array of given range.
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
 * Flatten a nested array to one dimension.
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

function clearChildrenOfElement(element: HTMLElement) {
    for (let child of Array.from(element.childNodes)) {
        element.removeChild(child)
    }
}

function toggleClassOfElement(element: HTMLElement, class_name: string) {
    if (element.classList.contains(class_name)) {
        element.classList.remove(class_name)
    } else {
        element.classList.add(class_name)
    }
}

function addClassOfElement(element: HTMLElement, class_name: string) {
    if (!element.classList.contains(class_name)) {
        element.classList.add(class_name)
    }
}

function removeClassOfElement(element: HTMLElement, class_name: string) {
    if (element.classList.contains(class_name)) {
        element.classList.remove(class_name)
    }
}

export { sleep, roll, range, flatten }
export { clearChildrenOfElement, toggleClassOfElement, addClassOfElement, removeClassOfElement }