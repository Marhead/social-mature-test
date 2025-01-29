// data/questions.ts

import { Question } from "@/types/survey";

/**
 * A small sample of questions, including a branching example:
 * - If the user picks the 2nd answer (index 1) on question #47,
 *   jump to question #58 instead of going to the next question in order.
 */
export const questions: Question[] = [
    {
        id: 1,
        question: "Question #1: 사상 최악의 덱은?",
        answers: ["악자몽ex 덱", "우레폰 덱", "가디안ex 덱", "드래펄트ex 덱", "타부자고ex 덱"],
    },
    {
        id: 2,
        question: "Question #2: What is your favorite color?",
        answers: ["Red", "Blue", "Green", "Yellow", "Other"],
    },
    {
        id: 3,
        question: "Question #3: Another normal question (no branching).",
        answers: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    },
    {
        id: 4,
        question: "Question #4: Another normal question (no branching).",
        answers: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    },
    {
        id: 5,
        question: "Question #5: Another normal question (no branching).",
        answers: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    },
    {
        id: 6,
        question: "Question #6: Another normal question (no branching).",
        answers: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    },
    {
        id: 7,
        question: "Question #7: Another normal question (no branching).",
        answers: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    },
    {
        id: 8,
        question: "Question #8: Another normal question (no branching).",
        answers: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    },
    {
        id: 9,
        question: "Question #9: If you pick answer #2 below, you'll jump to question #58!",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"],
        branching: {
            1: 14, // "Answer 2" -> jump to ID=58
        },
    },
    {
        id: 10,
        question: "Question #10: Another normal question (no branching).",
        answers: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    },
    {
        id: 11,
        question: "Question #11: Another normal question (no branching).",
        answers: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    },
    {
        id: 12,
        question: "Question #12: Another normal question (no branching).",
        answers: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    },
    {
        id: 13,
        question: "Question #13: Another normal question (no branching).",
        answers: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    },
    {
        id: 14,
        question: "Question #14: Another normal question (no branching).",
        answers: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    },
    {
        id: 15,
        question: "Question #15: You arrived here from Q47 if you chose the 2nd answer!",
        answers: ["Ok", "Great", "Interesting", "Not sure", "Done"],
    },
    {
        id: 16,
        question: "Question #16: Another normal question (no branching).",
        answers: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    },
    {
        id: 17,
        question: "Question #17: Another normal question (no branching).",
        answers: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    },
    {
        id: 18,
        question: "Question #18: Another normal question (no branching).",
        answers: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    },
    // ... Continue up to your total of 120 questions
];
