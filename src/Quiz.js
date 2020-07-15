import React, { useState } from 'react';
import Question from './Question';
import Results from './Results';

const Quiz = () => {
  const [ questionsArray, setQuestionsArray ] = useState([])
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const [ myTimer, setMyTimer ] = useState(-1)
  const [ viewResults, setViewResults ] = useState(false)
  const [ score, setScore ] = useState(0)
  const [ gradedArray, setGradedArray ] = useState([]);

  // For Dev Purposes
  // const [ viewResults, setViewResults ] = useState(true)
  // const [ score, setScore ] = useState(2)
  // const completedQuiz = [{"text":"Which of the following is a Nintendo franchise?","isCorrect":true,"answerGiven":"All of the Above"},{"text":"Which of the following is a Capcom franchise?","isCorrect":false,"answerGiven":"Final Fantasy"},{"text":"Which of the following is a Bethesda franchise?","isCorrect":true,"answerGiven":"Doom"}]
  // const [ gradedArray, setGradedArray ] = useState([...completedQuiz]);

  const nextQuestion = answerGiven => {
    // record answer
    const currentQuestion = questionsArray[currentIndex]
    const answerIndex = currentQuestion["answerIndex"]
    const answerIsCorrect = answerGiven === currentQuestion["choices"][answerIndex]
    const newestObj = {
      text: currentQuestion.text,
      isCorrect: answerIsCorrect,
      answerGiven
    }
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

  const resetQuiz = event => {
    setViewResults(false);
    setScore(0);
    setGradedArray([]);
    setCurrentIndex(0);
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
    else if (questionsArray.length > 0) {
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
    <div>
    { renderQuestion() }
    </div>
  )
}

export default Quiz;
