import Header from './Components/Header';
import Answears from './Components/Answear'
import { useState } from 'react'

const App = () => {
  const [questions,  setQuestions] = useState([
    {
      question: "blabasdfghjjjjjjla",
      correctAnswear: "1",
      answears: [
        "1", "2", "3", "4"
      ]
    },
    {
      question: "blabla",
      correctAnswear: "1",
      answears: [
        "1", "2", "3", "4"
      ]
    },
    {
      question: "blabla",
      correctAnswear: "1",
      answears: [
        "1", "2", "3", "4"
      ]
    }
  ])

  const [showAnswears, setShowAnswears] = useState(true);

  const goToNextQuestion = () => {
    setQuestions(questions.filter((question) => questions.indexOf(question) !== 0))
  }

  const verifyAnswear = (answear, correctAnswear=questions[0].correctAnswear) => {
    if (answear === correctAnswear) {
      console.log('isCorrect');
    }

    else {
      console.log("it's incorrect");
    }
    setShowAnswears(!showAnswears)
    setTimeout(() => {
      goToNextQuestion()
      setShowAnswears(!showAnswears)
    }, 2000)
  }

  return (
    <div>
      <Header question={questions[0].question} />
      { showAnswears && <Answears verifyAnswear={verifyAnswear} answears={questions[0].answears} /> }
    </div>
  )
}
export default App;