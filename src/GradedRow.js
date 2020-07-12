import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const GradedRow = ({text, isCorrect, index}) => {
  return (
    <TableRow>
      <TableCell>{`${index + 1}. ${text}`}</TableCell>
      <TableCell>{ isCorrect ? <CheckIcon style={{ color: green[500] }} /> : <ClearIcon style={{ color: red[500] }}/> }</TableCell>
    </TableRow>
  )
}

export default GradedRow;
