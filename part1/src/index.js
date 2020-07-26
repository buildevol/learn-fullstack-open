import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>You are born in {bornYear()}</p>
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

const Display = ({ counter }) => {
  return <p>The counter: {counter}</p>;
};

const App = () => {
  const name = "Peter";
  const age = 10;
  const [counter, setCounter] = useState(0);

  const incrementCounterByOne = () => {
    setCounter(counter + 1);
  };
  const decrementCounterByOne = () => {
    setCounter(counter - 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Display counter={counter} />
      <Button handleClick={incrementCounterByOne} text="Increment counter" />
      <Button handleClick={decrementCounterByOne} text="decrement counter" />
      <Button handleClick={resetCounter} text="Reset counter" />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
