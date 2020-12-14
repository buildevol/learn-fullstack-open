import { connect } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteReducer';
import Note from './Note.component';

const Notes = (props) => {

  return (
    <ul>
      {props.notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => props.toggleImportanceOf(note.id)}
        />
      ))}
    </ul>
  );
};

// The mapStateToProps function is used for defining the props of the connected component based on the state of the redux store
const mapStateToProps = (state) => {
  if (state.filter === 'ALL') {
    return {
      notes: state.notes,
    };
  }
  return {
    notes:
      state.filter === 'IMPORTANT'
        ? state.notes.filter((note) => note.important)
        : state.notes.filter((note) => !note.important),
  };
};

const mapDispatchToProps = {
  toggleImportanceOf,
}

const ConnectedNotes = connect(mapStateToProps, mapDispatchToProps)(Notes);
export default ConnectedNotes;
