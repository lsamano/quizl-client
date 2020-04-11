import React from 'react';
import Choice from './Choice';

const QuestionContainer = ({ question }) => {
  const formattedChoices = question.choices.map(text => <Choice text={text} />)

  return (
    <div className="fade-in">
      <h2>{question.text}</h2>
      <form>
        { formattedChoices }
        <input type='submit' style={{color:"red"}}/>
      </form>
    </div>
  )
};

export default QuestionContainer;
