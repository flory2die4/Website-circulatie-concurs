import Header from './Components/Header';
import Questions from './Components/Questions'
import { useState } from 'react'

const App = () => {
  const [questions,  setQuestions] = useState([
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
    },
    {
      question: "blabla",
      correctAnswear: "1",
      answears: [
        "1", "2", "3", "4"
      ]
    }
  ])

  return (
    <div>
      <Header question="" />
      <Questions questions={questions} />
    </div>
  )
}
export default App;