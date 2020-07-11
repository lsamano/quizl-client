import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Question from './Question';

function App() {
  const [ loaded, setLoaded ] = useState(false)
  const [ questionsArray, setQuestionsArray ] = useState([])
  const [ currentIndex, setCurrentIndex ] = useState(-1)
  const [ myTimer, setMyTimer ] = useState(-1)

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
    setMyTimer(setTimeout(() => {
      if (currentIndex + 1 === questionsArray.length) {
        // finish the quiz
        alert("Quiz is done!")
      } else {
        // go to next question
        setCurrentIndex(currentIndex + 1)
      }
    }, 200))
  }

  const renderQuestion = () => {
    if (loaded) {
      return (
        <Question
          key={currentIndex}
          question={questionsArray[currentIndex]}
          questionNumber={currentIndex + 1}
          amountOfQuestions={questionsArray.length}
          handleSubmit={handleSubmit}
          myTimer={myTimer}
          />
      )
    } else {
      return null
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>QUIZL</h1>
      </header>
      <main>
        {
          renderQuestion()
        }
      </main>
      <footer>© 2020 Quizl</footer>
    </div>
  );
}

export default App;
