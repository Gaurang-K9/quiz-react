import { useState } from "react";

function OptionArray({ problems }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  if (!problems || problems.length === 0 || !problems[currentIndex]) {
    return <p>Loading question...</p>;
  }

  const currentQuestion = problems[currentIndex];

  function handleSelectOption(option) {
    setSelectedOption(option);
  }

  function handleSubmitAnswer() {
    if (selectedOption === "") {
      alert("Please select an option");
      return;
    }

    const alreadyAnswered = userAnswers[currentIndex] !== undefined;

    const isCorrect = selectedOption === currentQuestion.answer;

    if (isCorrect && !alreadyAnswered) {
      setScore(prev => prev + 1);
    }

    // Save the user's answer
    setUserAnswers(prev => {
      const updated = [...prev];
      updated[currentIndex] = selectedOption;
      return updated;
    });

    setSelectedOption(""); // Reset for next question

    if (currentIndex === problems.length - 1) {
      setShowScore(true);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);

      // Set selected option to what user had previously picked
      const previousAnswer = userAnswers[currentIndex - 1] || "";
      setSelectedOption(previousAnswer);
    }
  }

  return (
    <div>
      {showScore ? (
        <h2>Your Score is: {score} / {problems.length}</h2>
      ) : (
        <>
          <h3>Question {currentIndex + 1} of {problems.length}</h3>
          <p><strong>Q:</strong> {currentQuestion.question}?</p>

          {currentQuestion.options.map((opt, index) => (
            <label key={index}>
              <input
                type="radio"
                name="option"
                value={opt}
                checked={selectedOption === opt}
                onChange={() => handleSelectOption(opt)}
              />
              {opt}
              <br />
            </label>
          ))}

          <br />
          <button onClick={handleSubmitAnswer}>
            {currentIndex === problems.length - 1 ? "Submit Quiz" : "Submit Answer"}
          </button>
        </>
      )}

      <br /><br />
      <button onClick={handlePrev} disabled={currentIndex === 0 || showScore}>
        Prev
      </button>
    </div>
  );
}

export default OptionArray;


// import { useState } from "react";

// function OptionArray({problems}){

//   const [selectedOption, setSelectedOption] = useState("");
//   const [isCorrect, setIsCorrect] = useState(null);
//   const [score, setScore] = useState(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showScore, setShowScore] = useState(false);


//   if (!problems || problems.length === 0 || !problems[currentIndex]) {
//     return <p>Loading question...</p>; // or show a message like "No questions available"
//   }

//   const currentQuestion = problems[currentIndex];



//   function handleNext(){
//     if (currentIndex < problems.length - 1) {
//       setCurrentIndex(prev => prev + 1);
//     }
//   }
  
//   function handlePrev(){
//     if (currentIndex > 0) {
//       setCurrentIndex(prev => prev - 1);
//     }
//   }
  
//   // function handleNextQuestion() {
//   //   if (userAnswers[currentIndex] === "") {
//   //     alert("Please select an option before submitting.");
//   //     return;
//   //   }
//   //   setCurrentIndex(prev => prev + 1);
//   // }
  

//   function handleSelectOption(option) {
//     setSelectedOption(option);
//     setIsCorrect(option === problems[currentIndex].answer);
  
//     // if (option === problems[currentIndex].answer) {
//     //   setScore(prev => prev + 1);
//     // }
//   }

//   function handleSubmitQuiz(){
//     setShowScore(true);
//   }

//   function handleSubmitAnswer() {
//     if (selectedOption === "") {
//       alert("Please select an option");
//       return;
//     }
  
//     if (selectedOption === problems[currentIndex].answer) {
//       setScore(prev => prev + 1);
//     }
  
//     setSelectedOption("");
//     setCurrentIndex(prev => prev + 1);
//   }
  

//   return(
//     <div>
    
//     {showScore ? (
//     <h2>Your Score is: {score}/{problems.length}</h2>
//     ) : (
//     <>
//     {/* Question and option UI here */}
//     {/* Submit Answer / Submit Quiz button here */}
//     <h3>Question {currentIndex + 1} of {problems.length}</h3>
//     <p>Question: {currentQuestion.question}?</p>
//     {currentQuestion.options.map((opt, index) => (
//       <label key={index}>
//         <input type="radio" name="option" value={opt} checked={selectedOption === opt} onChange={() => handleSelectOption(opt)}/>
//         {opt}
//         <br/>
//       </label>
//     ))}
//     {currentIndex < problems.length - 1 ? (
//     <button onClick={handleSubmitAnswer}>Submit Answer</button>
//     ) : (
//     <button onClick={handleSubmitQuiz}>Submit Quiz</button>
//     )}
//     </>
// )}



//     <p><strong>Answer:</strong> {currentQuestion.answer}</p>
  
//     <button onClick={handlePrev} disabled={currentIndex === 0}>Prev</button>
//     <button onClick={handleNext} disabled={currentIndex === problems.length - 1}>Next</button>
//     </div>  
//   );
// }

// export default OptionArray;