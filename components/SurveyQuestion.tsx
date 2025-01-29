// components/SurveyQuestion.tsx

import React from "react";

interface SurveyQuestionProps {
    questionText: string;
    answers: string[];
    onAnswer: (answerIndex: number) => void;
}

const SurveyQuestion: React.FC<SurveyQuestionProps> = ({
                                                           questionText,
                                                           answers,
                                                           onAnswer,
                                                       }) => {
    return (
        <div className="my-16">
            <p className="font-bold mb-2">{questionText}</p>
            {answers.map((answer, idx) => (
                <button
                    key={idx}
                    onClick={() => onAnswer(idx)}
                    className="
            block w-full
            mb-2
            py-2 px-4
            bg-blue-100
            text-left
            rounded
            cursor-pointer
            hover:bg-blue-200
            transition-colors
          "
                >
                    {answer}
                </button>
            ))}
        </div>
    );
};

export default SurveyQuestion;
