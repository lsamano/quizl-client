import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Question from './Question';
import Results from './Results';

function App() {
  const [ loaded, setLoaded ] = useState(false)
  const [ questionsArray, setQuestionsArray ] = useState([])
  const [ currentIndex, setCurrentIndex ] = useState(-1)
  const [ myTimer, setMyTimer ] = useState(-1)
  const [ viewResults, setViewResults ] = useState(false)
  const [ score, setScore ] = useState(0)
  const [ incorrectQuestions, setIncorrectQuestions ] = useState([]);

  useEffect(() => {
    // fetch and set questions
    axios.get("http://localhost:3000/questions")
    .then(res => {
      setQuestionsArray(res.data);
      setCurrentIndex(0);
      setLoaded(true);
    })
  },  [])

  const nextQuestion = answerGiven => {
    // record answer
    console.log(answerGiven);
    const currentQuestion = questionsArray[currentIndex]
    const answerIndex = currentQuestion["answerIndex"]
    const answerIsCorrect = answerGiven === currentQuestion["choices"][answerIndex]
    if (answerIsCorrect) {
      setScore(score + 1)
      console.log("correct");
    } else {
      // setIncorrectQuestions(incorrectQuestions.push(currentIndex));
      console.log("incorrect");
    }
    setMyTimer(setTimeout(() => {
      if (currentIndex + 1 === questionsArray.length) {
        // finish the quiz
        // alert("Quiz is done!")
        setViewResults(true);
      } else {
        // go to next question
        setCurrentIndex(currentIndex + 1)
      }
    }, 200))
  }

  const renderQuestion = () => {
    if (viewResults) {
      return <Results score={score} />
    }
    else if (loaded) {
      return (
        <Question
          key={currentIndex}
          question={questionsArray[currentIndex]}
          questionNumber={currentIndex + 1}
          amountOfQuestions={questionsArray.length}
          nextQuestion={nextQuestion}
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
