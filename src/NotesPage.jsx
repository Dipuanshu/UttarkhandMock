/** @format */

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FileOperURL, HTTPURL } from "./Matcher";
import { useNavigate, useLocation } from "react-router-dom";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNote, setSelectedNote] = useState(null); // Fullscreen modal

  const navigate = useNavigate();
  const location = useLocation();

  // Check URL param on page load (if user directly opens ?note=id)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const noteId = params.get("note");

    if (noteId && notes.length > 0) {
      const found = notes.find((n) => n._id === noteId);
      if (found) setSelectedNote(found);
    }
  }, [location.search, notes]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch(`${HTTPURL}notes/getNotes`);
        const data = await res.json();
        setNotes(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  // Open modal + update URL
  const openModal = (note) => {
    navigate(`?note=${note._id}`, { replace: false });
    setSelectedNote(note);
  };

  // Close modal + remove ?note from URL
  const closeModal = () => {
    navigate("/notes");
    setSelectedNote(null);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const noteParam = params.get("note");

    if (!noteParam) {
      setSelectedNote(null); // Force close modal
    }
  }, [location.search]);

  // Prevent iframe click from closing modal
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-6xl mx-auto mt-16 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">All Notes</h1>

        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : notes.length === 0 ? (
          <div className="text-center text-gray-500">No notes available</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <div
                key={note._id}
                className="bg-white rounded-2xl shadow-lg p-4 flex flex-col cursor-pointer hover:shadow-2xl transition"
                onClick={() => openModal(note)}
              >
                <h2 className="font-semibold text-lg mb-2">{note.title}</h2>

                {/* PDF Preview Image */}
                <img
                  src="\download chapter-1 logo.jpg"
                  className="w-full h-40 object-contain rounded-xl border"
                  alt="PDF preview"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen PDF Modal */}
      {selectedNote && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 bg-white text-black px-4 py-2 rounded-full shadow text-xl"
          >
            ✕
          </button>

          <iframe
            onClick={stopPropagation}
            src={`${FileOperURL}${selectedNote.fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full"
            title={selectedNote.title}
          ></iframe>
        </div>
      )}

      <Footer />
    </div>
  );
}
