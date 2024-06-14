import React from 'react';

function Question({ currentQuestion, onSelectAnswer }) {
  return (
    <div className="question">
      <h2>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.answerOptions.map((answer, index) => (
          <li key={index}>
            <input
              type="radio"
              id={`answer-${index}`}
              name="answer"
              value={answer}
              onChange={() => onSelectAnswer(answer)}
            />
            <label htmlFor={`answer-${index}`}>{answer}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
