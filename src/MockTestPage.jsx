/** @format */

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { HTTPURL } from "./Matcher";

export default function MockTestPage() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTest, setSelectedTest] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const res = await fetch(`${HTTPURL}tests/getTest`);
        const data = await res.json();
        setTests(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchTests();
  }, []);

  const startTest = (test) => {
    setSelectedTest(test);
    setUserAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const selectOption = (qIndex, option) => {
    if (submitted) return;
    setUserAnswers({ ...userAnswers, [qIndex]: option });
  };

  const submitTest = () => {
    let correct = 0;
    selectedTest.questions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-5xl mx-auto mt-16 p-6">
        {!selectedTest ? (
          <>
            <h1 className="text-3xl font-bold mb-6 text-center">
              Available Mock Tests
            </h1>

            {loading ? (
              <div className="text-center text-gray-500">Loading Tests...</div>
            ) : tests.length === 0 ? (
              <div className="text-center text-gray-500">
                No tests available
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tests.map((test) => (
                  <div
                    key={test._id}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition"
                    onClick={() => startTest(test)}
                  >
                    <h2 className="text-xl font-semibold mb-2">{test.title}</h2>
                    <p className="text-gray-600">
                      {test.questions.length} Questions
                    </p>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedTest.title}</h2>

            {selectedTest.questions.map((q, qIndex) => (
              <div key={qIndex} className="mb-6 p-4 border rounded-xl">
                <h3 className="font-semibold mb-3 text-lg">
                  {qIndex + 1}. {q.question}
                </h3>

                <div className="space-y-2">
                  {q.options.map((opt, optIndex) => {
                    const isSelected = userAnswers[qIndex] === opt;
                    const isCorrect = submitted && opt === q.answer;
                    const isWrong = submitted && isSelected && opt !== q.answer;

                    return (
                      <div
                        key={optIndex}
                        className={`p-3 rounded-lg border cursor-pointer transition
                          ${
                            isSelected &&
                            !submitted &&
                            "bg-blue-100 border-blue-400"
                          }
                          ${isCorrect && "bg-green-100 border-green-500"}
                          ${isWrong && "bg-red-100 border-red-500"}
                        `}
                        onClick={() => selectOption(qIndex, opt)}
                      >
                        {opt}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {!submitted ? (
              <button
                onClick={submitTest}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 mt-4 w-full"
              >
                Submit Test
              </button>
            ) : (
              <div className="text-center mt-6">
                <h2 className="text-2xl font-bold">
                  Score: {score} / {selectedTest.questions.length}
                </h2>
                <button
                  onClick={() => setSelectedTest(null)}
                  className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-900 mt-4"
                >
                  Back to Tests
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
