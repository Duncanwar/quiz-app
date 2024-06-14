function Result({ score, questions, onRestart }) {
    return (
      <div className="result">
        <h2>Your Score: {score} out of {questions.length}</h2>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              {question.question} - {' '}
              {selectedAnswer(question.correctAnswer, questions[index].answerOptions)}
            </li>
          ))}
        </ul>
        <button onClick={onRestart}>Restart Quiz</button>
      </div>
    );
  }
  
  const selectedAnswer = (correctAnswer, answerOptions) => {
    // Helper function to identify chosen answer from user selections
    const chosenAnswer = [...new Set(selectedAnswers)].find(
      (answer) => answer === correctAnswer
    );
  
    // Here's how to display chosen and correct answers:
  
    if (chosenAnswer) {
      return (
        <>
          <span style={{ color: 'green' }}>Your Answer: {chosenAnswer}</span> (Correct)
        </>
      );
    } else {
      return (
        <>
          <span style={{ color: 'red' }}>Your Answer: Not Selected</span> (Correct Answer: {correctAnswer})
        </>
      );
    }
  };
export default Result  