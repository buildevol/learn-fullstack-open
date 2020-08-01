import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import axios from "axios";

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("A new note");
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
    axios.get("http://localhost:3001/notes").then((response) => {
      setNotes(response.data);
    });
  };

  useEffect(hook, []); // The second paramter is an empty array which means the effect is only run along the firt render of the component

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => {
        return note.important;
      });
  const handleShowAll = (event) => {
    setShowAll(!showAll);
  };
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={handleShowAll}>
          Show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default App;
