import React, { useState, createContext } from "react";

function Quiz2({ problem, setProblem }) {
  // const [problem, setProblem] = useState({
  //   question: "",
  //   option1: "",
  //   option2: "",
  //   option3: "",
  //   option4: "",
  //   answer: ""
  // });

  function handleQuestionChange(event) {
    setProblem(prevProb => ({ ...prevProb, question: event.target.value }));
  }

  function handleOptionChange(event) {
    const { name, value } = event.target;
    setProblem(prevProb => ({ ...prevProb, [name]: value }));
  }

  function setAsAnswer(optionValue) {
    setProblem(prev => ({ ...prev, answer: optionValue }));
  }

  return (
    <>
      <input type="text" placeholder="Enter your question" value={problem.question} onChange={handleQuestionChange}/>
      <br/>
      <br/>

      <input type="text" placeholder="Option 1" name="option1" value={problem.option1} onChange={handleOptionChange}/>
      &nbsp;
      <button onClick={() => setAsAnswer(problem.option1)} style={{ marginLeft: "5px" }}>
        Set as Answer
      </button>
      <br/>

      <input type="text" placeholder="Option 2" name="option2" value={problem.option2} onChange={handleOptionChange}/>
      &nbsp;
      <button onClick={() => setAsAnswer(problem.option2)} style={{ marginLeft: "5px" }}>
        Set as Answer
      </button>
      <br/>

      <input type="text" placeholder="Option 3" name="option3" value={problem.option3} onChange={handleOptionChange}/>
      &nbsp;
      <button onClick={() => setAsAnswer(problem.option3)} style={{ marginLeft: "5px" }}>
        Set as Answer
      </button>
      <br/>

      <input type="text" placeholder="Option 4" name="option4" value={problem.option4} onChange={handleOptionChange}/>
      &nbsp;
      <button onClick={() => setAsAnswer(problem.option4)} style={{ marginLeft: "5px" }}>
        Set as Answer
      </button>
      <br/>

      <p>Question: {problem.question}</p>

      {/* <label>
        <input type="radio" name="option" onChange={() => handleAnswerSelect(problem.option1)}/>
        {problem.option1}
      </label>
      <br/>

      <label>
        <input type="radio" name="option" onChange={() => handleAnswerSelect(problem.option2)}/>
        {problem.option2}
      </label>
      <br/>

      <label>
        <input type="radio" name="option" onChange={() => handleAnswerSelect(problem.option3)}/>
        {problem.option3}
      </label>
      <br/>

      <label>
        <input type="radio" name="option" onChange={() => handleAnswerSelect(problem.option4)}/>
        {problem.option4}
      </label>
      <br/>
      <br/> */}

      <p>Answer: {problem.answer}</p>

    </>
  );
}

export default Quiz2;