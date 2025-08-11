import { useState } from "react";

function QuizArray({problems, setProblems}){
  
  // const [problems, setProblems] = useState([]);
  const [problem, setProblem] = useState({
    question:"",
    options:["", "", "", ""],
    answer:""
  });
  
  function handleQuestionChange(event) {
    setProblem(prev => ({ ...prev, question: event.target.value }));
  }

  function handleOptionChange(index, value) {
    setProblem(prev => {
      const updatedOptions = [...prev.options]; 
      updatedOptions[index] = value; 
      return { ...prev, options: updatedOptions };
    });
  }

  function setAsAnswer(option) {
    setProblem(prev => ({ ...prev, answer: option }));
  }

  function handleAddProblem() {
    if (problem.question.trim() === "" || problem.options.some(opt => opt.trim() === "") || problem.answer === "") {
        alert("Please fill in all fields and select an answer");
        return;
    }

    // const newProblem = { 
    //     question: problem.question, 
    //     options: [...problem.options],  // Clone options to prevent reference issues
    //     answer:problem.answer 
    // };

    setProblems(prevProb => [...prevProb, problem]);

    setProblem({
      question:"",
      options:["", "", "", ""],
      answer:""
    });
}


  return(
    <>
      <input type="text" placeholder="Enter your question" value={problem.question} onChange={handleQuestionChange}/>
      <br/><br/>

      {problem.options.map((option, index) => (
        <div key={index}>
          <input type="text" placeholder={`Option ${index + 1}`} value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          &nbsp;
          <button onClick={() => setAsAnswer(option)}>Set as Answer</button>
        </div>
      ))}

      <p><strong>Question:</strong> {problem.question}?</p>
      <p><strong>Options:</strong> {problem.options.join("/ ")}</p>
      <p><strong>Answer:</strong> {problem.answer}</p>
      
      <br />
      <button onClick={handleAddProblem}>Submit Question</button>

      <h2>Questions List</h2>
      {problems.length === 0 ? <p>No questions added yet.</p> : 
        problems.map((q, index) => (
          <div key={index} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <p><strong>Q{index + 1}:</strong> {q.question}</p>
            {q.options.map((opt, idx) => (
              <p key={idx}>{idx + 1}. {opt}</p>
            ))}
            <p><strong>Answer:</strong> {q.answer}</p>
          </div>
        ))
      }
    </>
  );
}

export default QuizArray;