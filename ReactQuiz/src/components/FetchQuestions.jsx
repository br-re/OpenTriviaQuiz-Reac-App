import React, { useState } from 'react';
import axios from 'axios';

const FetchQuestions = ({ setQuestions, setFirst, numQuestions, setNumQuestions, setRes }) => {
    const fetchQuestions = () => {
        const validNumQuestions = Math.max(1, Math.min(parseInt(numQuestions, 10) || 1, 50));
        setNumQuestions(validNumQuestions);

        axios
            .get(`https://opentdb.com/api.php?amount=${validNumQuestions}&type=multiple`)
            .then(res => {
                const shuffleArray = (array) => {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                    return array;
                };

                setQuestions(
                    res.data.results.map((q) => ({
                        ...q,
                        allAnswers: shuffleArray([...q.incorrect_answers, q.correct_answer]),
                    }))
                );
                setFirst(false);
                setRes(0);
            })
            .catch(err => alert(err));
    };

    return (
        <div className="numQuestions">
            <h3>Choose a number of questions (max 50)</h3>
            <label>
                Number of Questions:
                <input
                    type="number"
                    min={1}
                    max={50}
                    value={numQuestions}
                    onChange={(e) => setNumQuestions(e.target.value)}
                />
            </label>
            <button onClick={fetchQuestions}>START</button>
        </div>
    );
};

export default FetchQuestions;