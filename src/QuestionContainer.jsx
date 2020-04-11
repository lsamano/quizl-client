import React from 'react';
import Choice from './Choice';

const QuestionContainer = ({ question }) => {
  const formattedChoices = question.choices.map(
    (text, index) => <Choice text={text} key={index}/>
)

  return (
    <div className="fade-in">
      <h2>{question.text}</h2>
      <form>
        { formattedChoices }
        <input type='submit' />
      </form>
    </div>
  )
};

export default QuestionContainer;
