/**
 * Recursively searches an array for a target value
 */

export function recursiveSearch(
    items: string[],
    target: string,
    index: number = 0
): boolean {

    // Base case: reached end of array
    if (index >= items.length) {
        return false;
    }

    // Found the item
    if (items[index] === target) {
        return true;
    }

    // Recursive call
    return recursiveSearch(items, target, index + 1);
}