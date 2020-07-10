import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Question from './Question';

function App() {
  const [loaded, setLoaded] = useState(false)
  const [ questionsArray, setQuestionsArray ] = useState([])
  const [ currentIndex, setCurrentIndex ] = useState(-1)
  const [ timer, setTimer ] = useState(-1)

  useEffect(() => {
    // fetch and set questions
    axios.get("http://localhost:3000/questions")
    .then(res => {
      setQuestionsArray(res.data);
      setCurrentIndex(0);
      setLoaded(true);
    })
  },  [])

  const handleSubmit = event => {
    event.preventDefault();
    // record answer
    setTimer(setTimeout(() => {
      if (currentIndex + 1 === questionsArray.length) {
        // finish the quiz
        alert("Quiz is done!")
      } else {
        // go to next question
        setCurrentIndex(currentIndex + 1)
      }
    }, 200))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>QUIZL</h1>
      </header>
      <main>
        {
          loaded &&
          <Question
            key={currentIndex}
            question={questionsArray[currentIndex]}
            questionNumber={currentIndex + 1}
            amountOfQuestions={questionsArray.length}
            handleSubmit={handleSubmit}
            timer={timer}
            />
        }
      </main>
      <footer>© 2020 Quizl</footer>
    </div>
  );
}

export default App;
