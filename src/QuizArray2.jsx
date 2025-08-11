import React, { useState } from "react";

function QuizArray2() {
  const [problems, setProblems] = useState([]); // Stores all problems
  const [newProblem, setNewProblem] = useState({
    question: "",
    options: ["", "", "", ""],
    answer: ""
  });

  // Handle question input change
  function handleQuestionChange(event) {
    setNewProblem(prev => ({ ...prev, question: event.target.value }));
  }

  // Handle option input change dynamically
  function handleOptionChange(index, value) {
    setNewProblem(prev => {
      const updatedOptions = [...prev.options];
      updatedOptions[index] = value;
      return { ...prev, options: updatedOptions };
    });
  }

  // Set selected answer
  function setAsAnswer(option) {
    setNewProblem(prev => ({ ...prev, answer: option }));
  }

  // Function to add the question to the array
  function handleAddProblem() {
    if (
      newProblem.question.trim() === "" ||
      newProblem.options.some(opt => opt.trim() === "") ||
      newProblem.answer === ""
    ) {
      alert("Please fill in all fields and select an answer.");
      return;
    }

    setProblems(prev => [...prev, newProblem]); // Add problem to the array

    // Reset input fields using a new object reference
    setNewProblem({
      question: "",
      options: ["", "", "", ""],
      answer: ""
    });
  }

  return (
    <div>
      <h2>Create a Quiz</h2>

      <input
        type="text"
        placeholder="Enter your question"
        value={newProblem.question}
        onChange={handleQuestionChange}
      />
      <br /><br />

      {newProblem.options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          &nbsp;
          <button onClick={() => setAsAnswer(option)}>
            {newProblem.answer === option ? "✔ Selected" : "Set as Answer"}
          </button>
        </div>
      ))}

      <br />
      <button onClick={handleAddProblem}>Submit Question</button>

      <h2>Questions List</h2>
      {problems.length === 0 ? (
        <p>No questions added yet.</p>
      ) : (
        problems.map((q, index) => (
          <div
            key={index}
            style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
          >
            <p>
              <strong>Q{index + 1}:</strong> {q.question}
            </p>
            {q.options.map((opt, idx) => (
              <p key={idx}>{idx + 1}. {opt}</p>
            ))}
            <p>
              <strong>Answer:</strong> {q.answer}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default QuizArray2;
