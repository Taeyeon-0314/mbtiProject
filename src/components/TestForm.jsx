import { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answers.includes(null)) {
      alert("모든 질문에 답변해 주세요.");
      return;
    }
    onSubmit(answers);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200"
    >
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold text-lg mb-3 text-gray-800">
            {q.id}. {q.question}
          </p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className="block p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={() => handleChange(index, option)}
                  className="mr-3"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-300 ease-in-out"
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
