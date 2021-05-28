import Header from './Components/Header';
import Answears from './Components/Answear';
import Quizzis from './Components/Quizzis';
import { useState } from 'react'
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

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
      setShowAnswears(true)
    }, 2000)
  }

  return (
    <Router>
      <div className="container">
        <Route exact path='/'>
          <Quizzis quizzis={['1', '2', '2', '4']} />
        </Route>
        <Route path='/quizz'>
          <Header question={questions[0].question} />
          { showAnswears && <Answears verifyAnswear={verifyAnswear} answears={questions[0].answears} /> }
        </Route>
      </div>
    </Router>
  )
}
export default App;