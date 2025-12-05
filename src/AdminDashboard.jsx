/** @format */

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { ImOpt } from "react-icons/im";
import { HTTPURL } from "./Matcher";

export default function AdminDashboard() {
  const [tab, setTab] = useState("notes");

  // Notes states
  const [noteFile, setNoteFile] = useState(null);
  const [noteTitle, setNoteTitle] = useState("");

  // Test states
  const [testTitle, setTestTitle] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], answer: "" },
  ]);

  // ================= NOTES UPLOAD API =================
  const uploadNoteHandler = async () => {
    if (!noteTitle || !noteFile) {
      alert("Please add title & file");
      return;
    }

    const formData = new FormData();
    formData.append("title", noteTitle);
    formData.append("file", noteFile);

    try {
      const res = await fetch(`${HTTPURL}notes/addNotes`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      alert(data.message || "Uploaded");
    } catch (error) {
      console.log(error);
      alert("Error uploading note");
    }
  };

  // ================= TEST SAVE API =================
  const saveTestHandler = async () => {
    if (!testTitle) {
      alert("Add test title");
      return;
    }

    try {
      const res = await fetch(`${HTTPURL}tests/addTest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: testTitle, questions }),
      });

      const data = await res.json();
      alert(data.message || "Test Saved");
    } catch (error) {
      console.log(error);
      alert("Error saving test");
    }
  };

  // Add new question
  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], answer: "" },
    ]);
  };

  const updateQuestion = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;
    setQuestions(updated);
  };

  const updateOption = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-20">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {/* ===== TABS ===== */}
        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-xl shadow ${
              tab === "notes" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setTab("notes")}
          >
            Add Notes
          </button>

          <button
            className={`px-4 py-2 rounded-xl shadow ${
              tab === "tests" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setTab("tests")}
          >
            Add Test
          </button>
        </div>

        {/* ============ NOTES UPLOAD ============ */}
        {tab === "notes" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-xl font-semibold mb-4">Upload New Note</h2>

            <input
              type="text"
              placeholder="Enter Note Title"
              className="w-full p-3 border rounded-xl mb-4"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
            />

            <input
              type="file"
              className="w-full p-3 border rounded-xl mb-4"
              onChange={(e) => setNoteFile(e.target.files[0])}
            />

            <button
              className="px-6 py-3 bg-green-600 text-white rounded-xl shadow"
              onClick={uploadNoteHandler}
            >
              Upload Note
            </button>
          </motion.div>
        )}

        {/* ============ TEST CREATION ============ */}
        {tab === "tests" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-xl font-semibold mb-4">Create New Test</h2>

            <input
              type="text"
              placeholder="Enter Test Title"
              className="w-full p-3 border rounded-xl mb-4"
              value={testTitle}
              onChange={(e) => setTestTitle(e.target.value)}
            />

            {questions.map((q, index) => (
              <div
                key={index}
                className="p-4 border rounded-xl mb-6 bg-gray-50"
              >
                <input
                  type="text"
                  placeholder={`Question ${index + 1}`}
                  className="w-full p-2 border rounded mb-3"
                  value={q.question}
                  onChange={(e) =>
                    updateQuestion(index, "question", e.target.value)
                  }
                />

                {q.options.map((opt, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={`Option ${i + 1}`}
                    className="w-full p-2 border rounded mb-2"
                    value={opt}
                    onChange={(e) => updateOption(index, i, e.target.value)}
                  />
                ))}

                <input
                  type="text"
                  placeholder="Correct Answer"
                  className="w-full p-2 border rounded"
                  value={q.answer}
                  onChange={(e) =>
                    updateQuestion(index, "answer", e.target.value)
                  }
                />
              </div>
            ))}

            <button
              onClick={addQuestion}
              className="px-4 py-2 bg-yellow-500 text-white rounded-xl shadow mb-4"
            >
              + Add Question
            </button>

            <button
              className="px-6 py-3 bg-green-600 text-white rounded-xl shadow"
              onClick={saveTestHandler}
            >
              Save Test
            </button>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}
