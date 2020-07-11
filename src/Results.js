import React from 'react';

const Results = ({ score, numberOfQuestions, gradedArray }) => {
  const showAnswers = () => {
    return gradedArray.map((answer, index) => <li key={index}>{ answer ? "CORRECT" : "X" }</li>)
  }

  return (
    <>
      Results Screen
      Score: { score } / { numberOfQuestions }
      <br />
      {score/numberOfQuestions * 100}%
      <ol>
      { showAnswers() }
      </ol>
    </>
  )
};

export default Results;
