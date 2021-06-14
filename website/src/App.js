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
      question: "Care sunt culorile semaforului pentru pietoni?",
      correctAnswear: "Roșu și verde",
      answears: [
        "Roșu și verde", "Roșu, galben și verde", "Portocaliu, Roșu", "Roșu și albastru"
      ]
    },
    {
      question: "Care este culoare pe care se traverseaza corect strada?",
      correctAnswear: "verde",
      answears: [
        "verde", "Roșu"
      ]
    },
    {
      question: "Ce reprezintă culoarea roșu pentru semaforul de piteoni?",
      correctAnswear: "da",
      answears: [
        "poți traversa", "nu poți traversa"
      ]
    },
    {
      question: "Daca este o trecere de piteoni fără semafor, putem traversa?",
      correctAnswear: "da",
      answears: [
        "da", "nu"
      ]
    },
    {
      question: "Putem traversa pe trecerea de pietoni cu o bicicletă?",
      correctAnswear: "da, doar dacă suntem lângă bicicleta",
      answears: [
        "niciodata", "doar daca suntem pe ea", "da, doar dacă suntem lângă bicicleta"
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
      <div className="container">
        <Route exact path='/'>
          <Quizzis quizzis={['1', '2', '2', '4']} />
        </Route>
        <Route path='/quizz'>
        <div style={{width:'100%', height: '100%', backgroundColor: background === 'basic' ? '#212128' : background === 'correct' ? '#0eed73'  : '#eb4034'}}>
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
        </div>
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