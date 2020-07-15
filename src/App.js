import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ChooseQuiz from './ChooseQuiz';
import Quiz from './Quiz';

function App() {
  const [ loaded, setLoaded ] = useState(false)
  const [ quizzes, setQuizzes ] = useState([]);

  useEffect(() => {
    // fetch and set questions
    axios.get("http://localhost:3000/quizzes")
    .then(res => {
      setQuizzes(res.data);
      setLoaded(true);
    })
  },  [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>QUIZL</h1>
      </header>
      <main>
        <Quiz />
      </main>
      <footer>© 2020 Quizl</footer>
    </div>
  );
}

export default App;
