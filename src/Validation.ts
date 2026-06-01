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