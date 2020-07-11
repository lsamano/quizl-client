import React from 'react';

const Results = ({ score, numberOfQuestions, gradedArray }) => {
  const showAnswers = () => {
    return gradedArray.map(
      (answer, index) => <li key={index}>{ answer ? "CORRECT" : "X" }</li>
    )
  }

  return (
    <>
      <h2>
        Results
      </h2>
      <p>
        Score: { score } / { numberOfQuestions }
      </p>
      <p>
        {score/numberOfQuestions * 100}%
      </p>
      <ol>
      { showAnswers() }
      </ol>
    </>
  )
};

export default Results;
