import React from 'react';

const ChooseQuiz = ({ setIndex, quizzes }) => {
  const listQuizzes = () => {
    return quizzes.map((quiz, index) => (
      <li style={{listStyleType: "none", }} key={quiz._id} onClick={event => setIndex(index)}>{quiz.title}</li>
    ))
  }

  return (
    <div>
      <h2>Choose a Quiz:</h2>
      <ul>
        { listQuizzes() }
      </ul>
    </div>
  )
}

export default ChooseQuiz;
