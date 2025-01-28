'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/data/questions'; // Adjust import path as needed
import SurveyQuestion from '@/components/SurveyQuestion';

export default function SurveyPage() {
    const router = useRouter();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});

    // Check if user is logged in (simple localStorage check)
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!isLoggedIn) {
            router.replace('/');
        }
    }, [router]);

    // If we’re past the last question, survey is complete
    const isComplete = currentIndex >= questions.length;

    const handleAnswer = (answerIndex: number) => {
        const currentQuestion = questions[currentIndex];

        // 1. Save user’s selected answer
        setUserAnswers((prev) => ({
            ...prev,
            [currentQuestion.id]: answerIndex,
        }));

        // 2. Check branching
        const nextQuestionId = currentQuestion.branching?.[answerIndex];
        if (nextQuestionId !== undefined) {
            const branchIndex = questions.findIndex((q) => q.id === nextQuestionId);
            if (branchIndex !== -1) {
                setCurrentIndex(branchIndex);
                return;
            }
        }

        // 3. Otherwise, next question
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const resetSurvey = () => {
        setCurrentIndex(0);
        setUserAnswers({});
    };

    if (isComplete) {
        return (
            <div className="max-w-lg mx-auto mt-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Survey Complete!</h2>
                <p className="mb-4">Thanks for taking the survey!</p>
                <button
                    onClick={resetSurvey}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Restart Survey
                </button>

                {/* Debugging / results */}
                <pre className="bg-gray-200 p-2 mt-6 text-left">
          {JSON.stringify(userAnswers, null, 2)}
        </pre>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];

    return (
        <div className="max-w-lg mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-2 text-center">Mind Testing Survey</h1>
            <p className="text-center mb-4">
                Question {currentIndex + 1} of {questions.length}
            </p>

            <SurveyQuestion
                questionText={currentQuestion.text}
                answers={currentQuestion.answers}
                onAnswer={handleAnswer}
            />
        </div>
    );
}
