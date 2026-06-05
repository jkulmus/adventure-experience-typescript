import { Experience } from "./Experience";
import { experiences } from "./data";

/**
 * Simulates asychronously loading experience data
 */

export async function loadExperiences(): Promise<Experience[]> {
    
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(experiences);
        }, 2000);
    });
}