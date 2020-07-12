import React from 'react';
import GradedRow from './GradedRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';

const Results = ({ score, numberOfQuestions, gradedArray }) => {
  const showGrading = () => {
    return gradedArray.map(({text, isCorrect}, index) => (
      <GradedRow key={index} text={text} isCorrect={isCorrect} index={index} />
    ))
  }

  return (
    <>
      <h3>
        Results
      </h3>
      <h1>
        {Math.round(score/numberOfQuestions * 100)}%
      </h1>
      <p>{ score } / { numberOfQuestions } Correct</p>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            { showGrading() }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
};

export default Results;
