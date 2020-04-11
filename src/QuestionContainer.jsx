import React from 'react';
import Choice from './Choice';

const QuestionContainer = ({ question, questionNumber, amountOfQuestions, handleSubmit }) => {
  const formattedChoices = question.choices.map(
    (text, index) => <Choice text={text} key={index}/>
)

  const calculateProgress = `${questionNumber}/${amountOfQuestions}`

  return (
    <form className="fade-in">
      <h2>{`${questionNumber}. ${question.text}`}</h2>
      { formattedChoices }
      <input type='button' value="Back" />
      { calculateProgress }
      <input type='submit' value="Next" onClick={handleSubmit} />
    </form>
  )
};

export default QuestionContainer;
