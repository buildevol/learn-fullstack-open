import { connect } from 'react-redux';
import { createNote } from '../reducers/noteReducer';

const NewNote = (props) => {
  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value; // We can get the content of the new note straight from the form field. Because, the field has a name, we can access the content via the event object event.target.note.value
    event.target.note.value = '';
    props.createNote(content);
  };

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
};

export default connect(null, { createNote })(NewNote);
