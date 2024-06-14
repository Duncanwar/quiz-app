import React, { useState } from "react";
import "./App.css"; // Import your CSS file
import Question from "./components/Question";
import Result from "./components/Result";
import Navigation from "./components/Navigation";

const questions = [
  // Replace with your questions and answers
  {
    question: "What is the capital of France?",
    answerOptions: ["London", "Paris", "Berlin"],
    correctAnswer: "Paris",
  },
  // Add more questions here
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const handleNextImage = () => {
    setCurrentQuestionIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= questions.length ? 0 : nextIndex;
    });
  };

  const handlePrevImage = () => {
    setCurrentQuestionIndex((prevIndex) => {
      const preIndex = prevIndex - 1;
      return preIndex < 0 ? questions.length - 1 : prevIndex;
    });
  };

  const handleSelectAnswer = (answer) => {
    setSelectedAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  const handleSubmitQuiz = () => {
    let calculatedScore = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setIsFinished(true);
  };

  return (
    <div className="App">
      {isFinished ? (
        <Result
          score={score}
          questions={questions}
          onRestart={() => window.location.reload()}
        />
      ) : (
        <>
          <Question
            currentQuestion={questions[currentQuestionIndex]}
            onSelectAnswer={handleSelectAnswer}
          />
          <Navigation onNext={handleNextImage} onPrev={handlePrevImage} />
          <button
            onClick={handleSubmitQuiz}
            disabled={selectedAnswers.length === 0}
          >
            Submit Quiz
          </button>
        </>
      )}
    </div>
  );
}

export default App;
