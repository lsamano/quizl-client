import React from 'react';

const Choice = ({ text }) => (
  <div className="choice">
  <input type="radio" id={text} name="choice" value={text}/>
  <label htmlFor={text}>{text}</label><br/>
  </div>
);

export default Choice;
