import React,{useState} from "react";

function OptionSelector({problem}){
  const [selectedOption, setSelectedOption] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  function handleOptionChange(option){
    setSelectedOption(option);
  }

  function result(){
    if (!selectedOption) {
      alert("Please select an option first!");
      return;
    }
    setIsCorrect(selectedOption === problem.answer);
  }

  return(
    
    <>
    <h3>Question: {problem.question}?</h3>
    <label><input type="radio" name="radio-option" onChange={() => handleOptionChange(problem.option1)}/>{problem.option1}</label>
    <br/>

    <label><input type="radio" name="radio-option" onChange={() => handleOptionChange(problem.option2)}/>{problem.option2}</label>
    <br/>

    <label><input type="radio" name="radio-option" onChange={() => handleOptionChange(problem.option3)}/>{problem.option3}</label>
    <br/>

    <label><input type="radio"  name="radio-option" onChange={() => handleOptionChange(problem.option4)}/>{problem.option4}</label>
    <br/>
    <p>Selected Option: {selectedOption}</p>
    <button onClick={result}>Check Result</button>
    {isCorrect !== null && (
        <p style={{ color: isCorrect ? "green" : "red" }}>
          {isCorrect ? "✅ Correct!" : "❌ Wrong! The correct answer is: " + problem.answer}
        </p>
      )}
    </>
  );
}

export default OptionSelector;