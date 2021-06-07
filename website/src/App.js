import Header from './Components/QuizzPage/Header';
import Answears from './Components/QuizzPage/Answears';
import Quizzis from './Components/AllQuizzisPage/Quizzis';
import AddQuizz from './Components/AddQuizzPage/AddQuizz';
import Footer from './Components/Footer';
import AddQuestion from './Components/AddQuizzPage/AddQuestion'
import { useState } from 'react'
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const App = () => {
  const [textIfAnswears, setTextifAnswears] = useState('')
  const [background, setBackground] = useState('basic')
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
      setTextifAnswears('Corect');
      setShowAnswears(!showAnswears)
      setBackground('correct')
      setTimeout(() => {
        goToNextQuestion()
        setShowAnswears(true)
        setBackground('basic');
      }, 2000)
    }

    else {
      setTextifAnswears(`Nu, raspunsul era ${correctAnswear}`)
      setShowAnswears(!showAnswears)
      setBackground('wrong')
      setTimeout(() => {
        goToNextQuestion()
        setShowAnswears(true)
        setBackground('basic');
      }, 2000)
    }
    
  }

  return (
    <Router>
      <div className="container" style={{
        backgroundColor: background === 'basic' ? '#212128' : background === 'correct' ? '#0eed73'  : '#eb4034'
      }}>
        <Route exact path='/'>
          <Quizzis quizzis={['1', '2', '2', '4']} />
        </Route>
        <Route path='/quizz'>
        { !showAnswears &&
          <h1 style={{
            textAlign: 'center',
            position: 'relative',
            top: '20rem'
          }}>{textIfAnswears}</h1>
        }
        { showAnswears && <Header 
            question={questions[0] ? questions[0].question : ''} 
          /> }
          { showAnswears && <Answears
                              verifyAnswear={verifyAnswear} 
                              answears={questions[0] ? questions[0].answears : []} 
                            /> 
                            
          }
        </Route>
        <Route exact path='/add-quizz'>
          <AddQuizz title="Adauga un chestionar" />
        </Route>
        <Route exact path='/add-question'>
          <AddQuestion title='Adauga o intrebare' />
        </Route>
        <Footer text="Zamfir Eduard Concursul Regional Aplicații IT „Pe calculator lucrăm, circulaţie să-nvăţăm“ – ediție specială 2021." />
      </div>
    </Router>
  )
}
export default App;