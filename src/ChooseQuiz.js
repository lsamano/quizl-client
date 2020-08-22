import React from 'react';

const ChooseQuiz = ({ setIndex, quizzes }) => {
  const listQuizzes = () => {
    return quizzes.map((quiz, index) => (
      <div key={quiz._id} onClick={event => setIndex(index)}>{quiz.title}</div>
    ))
  }
  
  return (
    <div>
      <h2>Choose a Quiz:</h2>
    { listQuizzes() }
    </div>
  )
}

export default ChooseQuiz;
