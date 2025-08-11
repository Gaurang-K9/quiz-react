import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './Quiz'
import Quiz2 from './Quiz2'
import Option from './Option'
import OptionSelector from './OptionSelector'
import QuizArray from './QuizArray'
import QuizArray2 from './QuizArray2'
import OptionArray from './OptionArray'

function App() {
  const [problems, setProblems] = useState([]);
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  return (
    <>
    {/* <Quiz/> */}
    {/* <Quiz2/> */}
    {/* <Option/> */}
    {/* <Quiz2 problem={problem} setProblem={setProblem} />
    <OptionSelector problem={problem}/> */}
    {/* <QuizArray2/> */}


    {/* <QuizArray problems={problems} setProblems={setProblems} problem={problem}
      setProblem={setProblem}/>
    <OptionArray problems={problems}/> */}

    {!isQuizStarted ? (
      <>
        <QuizArray problems={problems} setProblems={setProblems} />
        {problems.length > 0 && (
          <button onClick={() => setIsQuizStarted(true)}>Start Quiz</button>
        )}
      </>
    ) : (
      <OptionArray problems={problems} />
    )}
    </>
  )
}

export default App
