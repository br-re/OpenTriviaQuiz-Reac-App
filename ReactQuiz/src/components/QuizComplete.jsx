import React from 'react';

const QuizComplete = ({ onRestart,result,qNum }) => {
    return (
        <div className="quizComplete">
            <h2>Quiz Complete!</h2>
            <h3>You scored {result}/{qNum} </h3>
            <p>Thank you for playing. You can restart the quiz by clicking below:</p>
            <button onClick={onRestart}>Restart</button>
        </div>
    );
};

export default QuizComplete;