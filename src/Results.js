import React from 'react';

const Results = ({ score, numberOfQuestions, gradedArray }) => {
  const showGrading = () => {
    return gradedArray.map(
      (answer, index) => <li key={index}>{ answer ? "✅" : "❌" }</li>
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
        {Math.round(score/numberOfQuestions * 100)}%
      </p>
      <ol>
      { showGrading() }
      </ol>
    </>
  )
};

export default Results;
