import { useDispatch } from 'react-redux';
import { createNote } from '../reducers/noteReducer';

const NewNote = () => {
  const dispatch = useDispatch();

  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value; // We can get the content of the new note straight from the form field. Because, the field has a name, we can access the content via the event object event.target.note.value
    event.target.note.value = '';
    dispatch(createNote(content));
  };

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
};

export default NewNote;
