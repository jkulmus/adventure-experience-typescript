/**
 * Adventure Experience Recommendation Toolkit
 * Demonstrates TypeScript classes, recursion, 
 * async functions, arrays, and exception handling
 */

import { experiences } from "./data";
import { RecommendationEngine } from "./RecommendationEngine";
import { recursiveSearch } from "./RecursiveSearch";
import { loadExperiences } from "./AsyncLoader";
import { validateMood } from "./Validation";

console.log("=====================================");
console.log(" Adventure Experience Toolkit");
console.log("=====================================");

/**
 * Recommendation Engine Demo
 * Searches the experience list for a matching
 * mood and group combination
 */

const result = RecommendationEngine.findMatch(
    experiences,
    "adventure",
    "friends"
);

console.log("\nRECOMMENDATION ENGINE")

if (result) {
    console.log("----------------------------");
    console.log(`Title: ${result.title}`);
    console.log(`Description: ${result.description}`);
} else {
    console.log("No matching experience found");
}

/**
 * Recursive Search Demo
 * Uses recursion to search an array
 * for a target mood value
 */

console.log("\nRECURSIVE SEARCH TEST");

const moods = [
    "relaxing",
    "adventure",
    "fantasy"
];

const found = recursiveSearch(
    moods,
    "fantasy"
);

console.log(`Fantasy found: ${found}`);

/**
 * Async Function Demo
 * Simulates loading data from an
 * external source such as a database
 */

async function runAsyncDemo() {

    console.log("\nASYNC DATA LOADING");
    console.log("\nLoading experiences...");

    const loadedExperiences = await loadExperiences();

    console.log(
        `Successfully loaded ${loadedExperiences.length} experiences`
    );
}

runAsyncDemo();

/**
 * Exception Handling Demo
 * Demonstrates validating input and catching thrown errors
 */

console.log("\nEXCEPTION HANDLING TEST");

try {
    validateMood("adventure");
    console.log("Adventure is a valid mood");
} catch (error) {
    if (error instanceof Error) {
        console.log(`Caught Error: ${error.message}`);
    }
}

try {
    validateMood("scary");
} catch (error) {
    if (error instanceof Error) {
        console.log(`Caught Error: ${error.message}`);
    }
}

console.log("\n=====================================");
console.log(" End of Program");
console.log("=====================================");