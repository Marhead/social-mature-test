// types/survey.ts

/**
 * Represents one survey question.
 * - `id` is the unique identifier (e.g., 47, 58).
 * - `text` is the question text.
 * - `answers` is the list of answer choices (exactly 5 in your case).
 * - `branching` is an optional map: the key is the 0-based index of the selected answer,
 *   and the value is the question ID to jump to.
 */
export interface Question {
    id: number;
    text: string;
    answers: string[];
    branching?: Record<number, number>; // e.g., {1: 58} means "if answer #1 was chosen, jump to question ID 58"
}
