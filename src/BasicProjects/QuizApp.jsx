import React, { useState } from 'react';

const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which sport involves hitting a ball with a bat?",
        answers: [
            { text: "Tennis", correct: false },
            { text: "Soccer", correct: false },
            { text: "Cricket", correct: true },
            { text: "Basketball", correct: false },
        ]
    },
    {
        question: "Which of the following is a flowering plant often associated with love and romance?",
        answers: [
            { text: "Sunflower", correct: false },
            { text: "Rose", correct: true },
            { text: "Tulip", correct: false },
            { text: "Daisy", correct: false },
        ]
    },
    {
        question: "How many legs does a spider have?",
        answers: [
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false },
        ]
    },
];

const QuizApp = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    };

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }
        handleNextQuestion();
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="app bg-white w-90 md:max-w-600px m-100px-auto  p-30px border-radius-10px">
                <h1 className="text-25 bg-001e4d font-weight-600 border-bottom-1px-solid-333 pb-30 font-bold">Simple Quiz</h1>
                {currentQuestionIndex < questions.length ? (
                    <div className="quiz pb-20px">
                        <h2 className="text-18px color-001e4d font-weight-600 mb-20px">{`${currentQuestionIndex + 1}. ${questions[currentQuestionIndex].question}`}</h2>
                        <div id="answer-buttons">
                            {questions[currentQuestionIndex].answers.map((answer, index) => (
                                <button
                                    key={index}
                                    className="btn bg-fff color-222 font-weight-500 width-100p border-1px-solid-222 py-10px my-10px-0 text-align-left border-radius-4px cursor-pointer transition-all-0.3s"
                                    onClick={() => handleAnswerClick(answer.correct)}
                                >
                                    {answer.text}
                                </button>
                            ))}
                        </div>
                        <button
                            className="btn bg-001e4d color-fff font-weight-500 width-150px border-0 py-10px my-20px-auto border-radius-4px cursor-pointer display-none"
                            onClick={handleNextQuestion}
                        >
                            Next
                        </button>
                    </div>
                ) : (
                    <div className="quiz">
                        <h2 className="text-18px color-001e4d font-weight-600 mb-20px">{`You scored ${score} out of ${questions.length}!`}</h2>
                        <button
                            className="btn bg-001e4d color-fff font-weight-500 width-150px border-0 py-10px my-20px-auto border-radius-4px cursor-pointer"
                            onClick={restartQuiz}
                        >
                            Play Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizApp;
