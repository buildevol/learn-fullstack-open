import logo from './logo.svg';
import './App.css';

const generateId = () => {
  return Number((Math.random() * 1000000).toFixed(0));
};

// Action creators
const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    data: {
      content,
      important: false,
      id: generateId(),
    },
  };
};

const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: {
      id,
    },
  };
};

function App({ store }) {
  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value; // We can get the content of the new note straight from the form field. Because, the field has a name, we can access the content via the event object event.target.note.value
    event.target.note.value = '';
    store.dispatch(createNote(content));
  };

  const toggleImportance = (id) => {
    store.dispatch(toggleImportanceOf(id));
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      <ul>
        {store.getState().map((note) => (
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
