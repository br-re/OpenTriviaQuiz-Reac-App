import React, { useState } from 'react';

const Quiz = ({ questions, onComplete, resUp, res }) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [isAnswered, setIsAnswered] = useState(false);


    const checkAnswer = (answer) => {
        const correctAnswer = questions[questionIndex].correct_answer;
        setSelectedAnswer(answer);
        setIsAnswered(true);

        if(answer === correctAnswer){
            resUp(res + 1)
        }

        setTimeout(() => {
            const nextIndex = questionIndex + 1;
            if (nextIndex >= questions.length) {
                onComplete();
            } else {
                setQuestionIndex(nextIndex);
                setSelectedAnswer('');
                setIsAnswered(false);
            }
        }, 4000);
    };

    const getButtonStyle = (answer) => {
        if (!isAnswered) return {};
        const correctAnswer = questions[questionIndex].correct_answer;
        if (answer === correctAnswer) {
            return { border: '1px solid green', color:'white' };
        }
        if (answer === selectedAnswer) {
            return { border: '1px solid red', color:'white' };
        }
        return {};
    };

    return (
        <div className="questions">
            <h2>Question {questionIndex + 1}/{questions.length}</h2>
            <p dangerouslySetInnerHTML={{ __html: questions[questionIndex].question }} />
            <div>
                {questions[questionIndex].allAnswers.map((answer) => (
                    <button
                        key={answer}
                        onClick={() => checkAnswer(answer)}
                        style={getButtonStyle(answer)}
                        disabled={isAnswered}
                    >
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Quiz;