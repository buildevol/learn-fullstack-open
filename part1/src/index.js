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

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <>
        <p>No history</p>
      </>
    );
  }

  return (
    <>
      <p>All clicks history: {allClicks.join(" ")}</p>
    </>
  );
};

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

const Display = ({ counter, clicks, allClicks }) => {
  return (
    <>
      <p>The counter: {counter}</p>
      <p>Left clicks: {clicks.left}</p>
      <p>Right clicks: {clicks.right}</p>
      <History allClicks={allClicks} />
    </>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;
  const [counter, setCounter] = useState(0);
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setClicks({
      ...clicks,
      left: clicks.left + 1,
    });
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setClicks({
      ...clicks,
      right: clicks.right + 1,
    });
  };

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
      <Display counter={counter} clicks={clicks} allClicks={allClicks} />
      <Button handleClick={incrementCounterByOne} text="Increment counter" />
      <Button handleClick={decrementCounterByOne} text="decrement counter" />
      <Button handleClick={resetCounter} text="Reset counter" />
      <Button
        handleClick={handleLeftClick}
        text="Increment Left click counter"
      />
      <Button
        handleClick={handleRightClick}
        text="Increment Right click counter"
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
