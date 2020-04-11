import React from 'react';
import Choice from './Choice';

const QuestionContainer = ({ question, questionNumber }) => {
  const formattedChoices = question.choices.map(
    (text, index) => <Choice text={text} key={index}/>
)

  return (
    <form className="fade-in">
      <h2>{`${questionNumber}. ${question.text}`}</h2>
      { formattedChoices }
      <input type='submit' value="Next Question" />
      <input type='button' value="Next Question" />
    </form>
  )
};

export default QuestionContainer;
