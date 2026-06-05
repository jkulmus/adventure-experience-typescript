import { Experience } from "./Experience";

/**
 * Centralized list of available adventure experiences
 * Each experience contains a mood, group type, title, and description
 */

export const experiences: Experience[] = [

    // Relaxing Experiences

    new Experience(
        "relaxing",
        "solo",
        "Quiet Forst Retreat",
        "A peaceful getaway surrounded by nature trails and quiet spaces."
    ),

    new Experience(
        "relaxing",
        "family",
        "Lakeside Cabin Weekend",
        "A calm family trip with cozy cabins, easy walks, and lake activities."
    ),

    new Experience(
        "relaxing",
        "friends",
        "Campfire Lodge Escape",
        "A relaxing group retreat featuring campfires, games, and scenic views."
    ),

    // Adventure Experiences

    new Experience(
        "adventure",
        "solo",
        "Mountain Challenge Course",
        "A solo adventure with hiking, obstacle courses, and personal challenges."
    ),

    new Experience(
        "adventure",
        "family",
        "Family Adventure Trail",
        "A family-friendly adventure with scavenget hunts and outdoor exploration."
    ),

    new Experience(
        "adventure",
        "friends",
        "Extreme Team Expedition",
        "A high-energy group adventure with team challenges and outdoor activities."
    ),

    // Fantasy Experiences

    new Experience(
        "fantasy",
        "solo",
        "Hero's Quest Experience",
        "A story-driven solo adventure featuring quests, puzzles, and exploration."
    ),

    new Experience(
        "fantasy",
        "family",
        "Enchanted Family Village",
        "A magical family experience with storytelling, quests, and themed activities."
    ),

    new Experience(
        "fantasy",
        "friends",
        "Guild Adventure Weekend",
        "A fantasy group experience filled with teamwork, quests, and immersive challenges."
    )
];