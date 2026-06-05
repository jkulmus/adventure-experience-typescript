/**
 * Validates that a mood exists in the approved list
 * Throws an exception if the mood is invalid
 */

export function validateMood(mood: string): void {

    const validMoods = [
        "relaxing",
        "adventure",
        "fantasy"
    ];

    if (!validMoods.includes(mood)) {
        throw new Error(
            `Invalid mood entered: ${mood}`
        );
    }
}