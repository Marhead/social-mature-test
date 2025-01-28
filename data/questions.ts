// data/questions.ts

import { Question } from "../types/survey";

/**
 * A small sample of questions, including a branching example:
 * - If the user picks the 2nd answer (index 1) on question #47,
 *   jump to question #58 instead of going to the next question in order.
 */
export const questions: Question[] = [
    {
        id: 1,
        text: "Question #1: How are you feeling today?",
        answers: ["Very Good", "Good", "Neutral", "Bad", "Very Bad"],
    },
    {
        id: 2,
        text: "Question #2: What is your favorite color?",
        answers: ["Red", "Blue", "Green", "Yellow", "Other"],
    },
    {
        id: 47,
        text: "Question #47: If you pick answer #2 below, you'll jump to question #58!",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"],
        branching: {
            1: 58, // "Answer 2" -> jump to ID=58
        },
    },
    {
        id: 58,
        text: "Question #58: You arrived here from Q47 if you chose the 2nd answer!",
        answers: ["Ok", "Great", "Interesting", "Not sure", "Done"],
    },
    {
        id: 3,
        text: "Question #3: Another normal question (no branching).",
        answers: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    },
    // ... Continue up to your total of 120 questions
];
