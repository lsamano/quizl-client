import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import QuestionContainer from './QuestionContainer';

function App() {
  const [loaded, setLoaded] = useState(false)
  const [ questionsArray, setQuestionsArray ] = useState([])
  const [ currentIndex, setCurrentIndex ] = useState(0)

  useEffect(() => {
    // fetch and set questions
    axios.get("http://localhost:3000/questions")
    .then(res => {
      setQuestionsArray(res.data);
      setLoaded(true);
    })
  },  [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>QUIZL</h1>
      </header>
      <main>
        {
          loaded &&
          <QuestionContainer question={questionsArray[0]}/>
        }
      </main>
      <footer>© 2020 Quizl</footer>
    </div>
  );
}

export default App;
