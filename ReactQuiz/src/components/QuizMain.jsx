import React, { useState } from 'react';
import FetchQuestions from './FetchQuestions';
import QuizComplete from './QuizComplete';
import Quiz from './quiz';

const MainComponent = () => {
    const [questions, setQuestions] = useState([]);
    const [numQuestions, setNumQuestions] = useState(5);
    const [first, setFirst] = useState(true);
    const [quizComplete, setQuizComplete] = useState(false);
    const [result, setResult] = useState(0);

    const oneUp = (res) => {
        setResult(res)
    }

    const handleRestart = () => {
        setFirst(true);
        setQuizComplete(false);
        setQuestions([]);
    };

    return (
        <div className='quizContainer'>
            {first && (
                
                <FetchQuestions
                    setQuestions={setQuestions}
                    setFirst={setFirst}
                    numQuestions={numQuestions}
                    setNumQuestions={setNumQuestions}
                    setRes={setResult}
                />
            )}
            {!first && quizComplete && (
                <QuizComplete onRestart={handleRestart} result={result} qNum={numQuestions}/>
            )}
            {!first && !quizComplete && questions.length > 0 && (
                <Quiz questions={questions} onComplete={() => setQuizComplete(true)} resUp={oneUp} res={result}/>
            )}
        </div>
    );
};

export default MainComponent;