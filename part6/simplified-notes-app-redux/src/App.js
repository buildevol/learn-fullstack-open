import './App.css';
import NewNote from './components/NewNote.component';
import Notes from './components/Notes.component';
import VisibilityFilter from './components/VisibilityFilter.component';

function App() {

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
}

export default App;
