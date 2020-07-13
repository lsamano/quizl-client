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
  const [ gradedArray, setGradedArray ] = useState([]);

  // For Dev Purposes
  // const [ viewResults, setViewResults ] = useState(true)
  // const [ score, setScore ] = useState(2)
  // const [ gradedArray, setGradedArray ] = useState([{"text":"Which of the following is a Nintendo franchise?","isCorrect":true},{"text":"Which of the following is a Capcom franchise?","isCorrect":false},{"text":"Which of the following is a Bethesda franchise?","isCorrect":true}]);

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
    const currentQuestion = questionsArray[currentIndex]
    const answerIndex = currentQuestion["answerIndex"]
    const answerIsCorrect = answerGiven === currentQuestion["choices"][answerIndex]
    const newestObj = { text: currentQuestion.text, isCorrect: answerIsCorrect }
    setGradedArray([...gradedArray, newestObj]);
    // add score if correct
    if (answerIsCorrect) {
      setScore(score + 1)
    }
    // timer for better user experience
    setMyTimer(setTimeout(() => {
      if (currentIndex + 1 === questionsArray.length) {
        // finish the quiz
        setViewResults(true);
      } else {
        // go to next question
        setCurrentIndex(currentIndex + 1)
      }
    }, 200))
  }

  const renderQuestion = () => {
    if (viewResults) {
      return (
        <Results
          score={score}
          numberOfQuestions={questionsArray.length}
          gradedArray={gradedArray}
          resetQuiz={resetQuiz} />
      )
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

  const resetQuiz = event => {
    setViewResults(false);
    setScore(0);
    setGradedArray([]);
    setCurrentIndex(0);
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
