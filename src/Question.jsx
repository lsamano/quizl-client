import React, { useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

export default function Question({ question, questionNumber, amountOfQuestions, handleSubmit, timer }) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const formatChoices = () => {
    return question.choices.map(
      (text, index) => <FormControlLabel value={text} control={<Radio />} label={text} key={index} />
    )
  }

  useEffect(() => {
    return () => {
      console.log(timer);
      clearTimeout(timer);
      console.log(timer);
    };
  }, [])

  // <FormLabel component="legend">{question.text}</FormLabel>

  return (
    <FormControl component="fieldset" className="fade-in">
      <h2>{`${questionNumber}. ${question.text}`}</h2>
      <RadioGroup aria-label={question.text} name={question.text} value={value} onChange={handleChange}>
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
  );
}
