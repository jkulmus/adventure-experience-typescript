import { experiences } from "./data";
import { RecommendationEngine } from "./RecommendationEngine";
import { recursiveSearch } from "./RecursiveSearch";
import { loadExperiences } from "./AsyncLoader";
import { validateMood } from "./Validation";

console.log("Adventure Experience Recommendation Toolkit");

const result = RecommendationEngine.findMatch(
    experiences,
    "adventure",
    "friends"
);

if (result) {
    console.log("\nRecommendation:");
    console.log(result.title);
    console.log(result.description);
} else {
    console.log("No matching experience found");
}

// Recursion Demo
const moods = [
    "relaxing",
    "adventure",
    "fantasy"
];

console.log("\nRecursive Search Test:");

const found = recursiveSearch(
    moods,
    "fantasy"
);

console.log(`Fantasy found: ${found}`);

async function runAsyncDemo() {
    console.log("\nLoading experiences...");

    const loadedExperiences = await loadExperiences();

    console.log(
        `Loaded ${loadedExperiences.length} experiences successfully`
    );
}

runAsyncDemo();

console.log("\nException Handling Test:");

try {
    validateMood("scary");

    console.log("Mood is valid");
} catch (error) {
    if (error instanceof Error) {
        console.log(`Caught Error: ${error.message}`);
    }
}