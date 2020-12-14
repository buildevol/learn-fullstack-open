import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import NewNote from './components/NewNote.component';
import Notes from './components/Notes.component';
import VisibilityFilter from './components/VisibilityFilter.component';
import { initializeNotes } from './reducers/noteReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
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
