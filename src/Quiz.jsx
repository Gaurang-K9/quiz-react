import React,{useState} from "react";

function Quiz(){
  
  const [problem,setProblem] = useState({
    question:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    answer:""
  });
  
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");

  function handleQuestionChange(event){
    setProblem(prevProb => ({...prevProb, question: event.target.value}));
  }

  function handleOption1Change(event){
    setProblem(prevProb => ({...prevProb, option1: event.target.value}));
  }

  function handleOption2Change(event){
    setProblem(prevProb => ({...prevProb, option2: event.target.value}));
  }

  function handleOption3Change(event){
    setProblem(prevProb => ({...prevProb, option3: event.target.value}));
  }

  function handleOption4Change(event){
    setProblem(prevProb => ({...prevProb, option4: event.target.value}));
  }
  
  function handleOption1Button(event){
    setOption1(option1);
  }

  function handleOption2Button(event){
    setOption2(option2);
  }

  function handleOption3Button(event){
    setOption3(option3);
  }

  function handleOption4Button(event){
    setOption4(option4);
  }

  function handleAnswer(option){
    setAnswer(option);
  }

  return(
    <>
    
    <input type="text" placeholder="Enter your question" value={problem.question} 
    onChange={handleQuestionChange}/>
    <br/>
    <br/>
    
    <input type="text" placeholder="Option 1" 
    value={problem.option1}
    onChange={handleOption1Change}
    />
    &nbsp;
    <br/>
    
    <input type="text" placeholder="Option 2" 
    value={problem.option2}
    onChange={handleOption2Change}
    />
    &nbsp;
    <br/>
    
    <input type="text" placeholder="Option 3" 
    value={problem.option3}
    onChange={handleOption3Change}
    />
    &nbsp;
    <br/>
    
    <input type="text" placeholder="Option 4" 
    value={problem.option4}
    onChange={handleOption4Change}
    />
    &nbsp;
    
    <p>Question: {problem.question}</p>

    <label><input type="radio" name="option" onChange={handleOption1Button}/>{problem.option1}</label>
    <button onClick={()=> handleAnswer(option1)}></button>
    <br/>

    <label><input type="radio" name="option" onChange={handleOption2Button}/>{problem.option2}</label>
    <button onClick={()=> handleAnswer(option2)}></button>
    <br/>

    <label><input type="radio" name="option" onChange={handleOption3Button}/>{problem.option3}</label>
    <button onClick={()=> handleAnswer(option3)}></button>
    <br/>

    <label><input type="radio"  name="option" onChange={handleOption4Button}/>{problem.option4}</label>
    <button onClick={()=> handleAnswer(option4)}></button>
    <br/>

    <p>Answer: {problem.answer}</p>
    </>
  );
}

export default Quiz