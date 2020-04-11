import React from 'react';

const Choice = ({ text }) => (
  <>
  <input type="radio" id={text} name="choice" value={text}/>
  <label for={text}>{text}</label><br/>
  </>
);

export default Choice;
