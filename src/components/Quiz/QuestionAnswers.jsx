import React, { useEffect, useState } from 'react';
import questionData from './questionsData';
import './quiz.css';

const QuestionAnswers = ({question, setQuestion, setGameFinish}) => {
    const correctAnswer = questionData[question-1].answer;

    const [currQuestion, setCurrQuestion] = useState(false);
    const [userAnswer, setUserAnswer] = useState(null);
    const [className, setClassName] = useState('quiz__answer');
    
    useEffect(() => {
        setCurrQuestion(questionData[question-1])
    }, [questionData, question]);
    
    const handleChange = value => {
        setUserAnswer(value);

        setClassName(value === correctAnswer
            ? 'quiz__answer correct' 
            : 'quiz__answer wrong'
        );

        setTimeout(() => {
            if (value === correctAnswer) {
                setQuestion(question + 1); 
                setUserAnswer(null);
            } else {
                setGameFinish(true);
            }
        }, 4000);
    };

    return ( 
        <>
            <h2 className='quiz__question'>
                {questionData[question-1].question}
            </h2>
            <ul className='quiz__answers'>
                {questionData[question-1].answerOptions.map(value => (
                    <li 
                        className={userAnswer === value ? className : 'quiz__answer'} 
                        onClick={() => handleChange(value)}
                    >
                        {value}
                    </li>
                ))}
            </ul>           
        </>
    );
}
 
export default QuestionAnswers;