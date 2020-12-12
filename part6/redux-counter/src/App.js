import logo from './logo.svg';
import './App.css';

function App({ store }) {
  return (
    <div>
      <div>{store.getState()}</div>
      <button onClick={(event) => store.dispatch({ type: 'INCREMENT' })}>
        plus
      </button>
      <button onClick={(event) => store.dispatch({ type: 'DECREMENT' })}>
        minus
      </button>
      <button onClick={(event) => store.dispatch({ type: 'ZERO' })}>
        zero
      </button>
    </div>
  );
}

export default App;
