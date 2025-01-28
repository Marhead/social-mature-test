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
        <div style={{ marginTop: "1rem" }}>
            <p style={{ fontWeight: "bold" }}>{questionText}</p>
            {answers.map((answer, idx) => (
                <button
                    key={idx}
                    onClick={() => onAnswer(idx)}
                    style={{
                        display: "block",
                        width: "100%",
                        margin: "0.5rem 0",
                        padding: "0.75rem",
                        cursor: "pointer",
                    }}
                >
                    {answer}
                </button>
            ))}
        </div>
    );
};

export default SurveyQuestion;
