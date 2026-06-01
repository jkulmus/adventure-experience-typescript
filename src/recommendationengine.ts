import { Experience } from "./Experience";

export class RecommendationEngine {
    static findMatch(
        experiences: Experience[],
        mood: string,
        group: string
    ): Experience | null {
        for (const experience of experiences) {
            if (experience.mood === mood && experience.group === group) {
                return experience;
            }
        }

        return null;
    }
}