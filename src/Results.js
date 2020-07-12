import React from 'react';

const Results = ({ score, numberOfQuestions, gradedArray }) => {
  const showGrading = () => {
    return gradedArray.map(({text, isCorrect}, index) => {
      return (
        <tr key={index}>
          <td></td>
          <td>{`${index + 1}. ${text}`}</td>
          <td>{ isCorrect ? "✅" : "❌" }</td>
        </tr>
      )
    })
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
      <table>
        <tbody>
          { showGrading() }
        </tbody>
    </table>
    </>
  )
};

export default Results;
