import React, { useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

function Question({ question, questionNumber, amountOfQuestions, nextQuestion, myTimer }) {
  const [ value, setValue ] = React.useState('')

  const handleChange = event => {
    setValue(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    return nextQuestion(value);
  }

  const formatChoices = () => {
    return question.choices.map(
      (text, index) => <FormControlLabel value={text} control={<Radio />} label={text} key={index} />
    )
  }

  useEffect(() => {
    return () => {
      clearTimeout(myTimer);
    };
  }, [myTimer])

  return (
    <FormControl component="fieldset" className="fade-in">
      <h2>{`${questionNumber}. ${question.text}`}</h2>
      <RadioGroup
        aria-label={question.text}
        name={question.text}
        value={value}
        onChange={handleChange} >
        { formatChoices() }
      </RadioGroup>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleSubmit}
        disabled={!value} >
        Next
      </Button>
    </FormControl>
  )
}

export default Question;
