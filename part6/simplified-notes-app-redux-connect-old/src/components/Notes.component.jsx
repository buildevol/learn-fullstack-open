import { useDispatch, useSelector } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteReducer';
import Note from './Note.component';

const Notes = () => {
  // The useDispatch hook provides any React component access to the dispatch functon of the redux store. This allows all components to make changes to the state of the redux store.
  const dispatch = useDispatch();
  // The useSelector hook accepts function as parameter. The function either searches for or selects data from the redux-store. In this case, we use the whole state.
  const notes = useSelector(({ filter, notes }) => {
    if (filter === 'ALL') {
      return notes;
    }
    return filter === 'IMPORTANT'
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important);
  });

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
        />
      ))}
    </ul>
  );
};

export default Notes;
