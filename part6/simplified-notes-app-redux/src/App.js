import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import NewNote from './components/NewNote.component';
import Notes from './components/Notes.component';
import VisibilityFilter from './components/VisibilityFilter.component';
import { initializeNotes } from './reducers/noteReducer';
import noteService from './services/notes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    noteService.getAll().then((notes) => dispatch(initializeNotes(notes)));
  }, [dispatch]);

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
}

export default App;
