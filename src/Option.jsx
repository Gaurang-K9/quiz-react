import React,{useState} from "react";

function Option(){
  const[question,setQuestion] = useState("")
  const[option1, setOption1] = useState("");
  const[option2, setOption2] = useState("");
  const[answer, setAnswer] = useState("");

  function handleChangeOption1(event){
    setOption1(event.target.value);
  }

  function handleChangeOption2(event){
    setOption2(event.target.value);
  }

  function handleSelectAnswer(option){
    setAnswer(option);
  }

  return(
    <>
    <input type="text" placeholder="Option1" value={option1} onChange={handleChangeOption1}/>
    <button onClick={() => handleSelectAnswer(option1)}>Select as Answer</button>
    <br/>

    <input type="text" placeholder="Option1" value={option2} onChange={handleChangeOption2}/>
    <button onClick={() => handleSelectAnswer(option2)}>Select as Answer</button>
    <br/>

    <p>Option1: {option1}</p>
    <p>Option2: {option2}</p>
    <p>Answer: {answer}</p>
    </>
  );
}

export default Option;