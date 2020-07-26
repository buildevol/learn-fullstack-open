import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function getRandomIntExclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive
}

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

const anecdotes = [
  {
    anecdote: "If it hurts, do it more often",
    vote: 0,
  },
  {
    anecdote: "Adding manpower to a late software project makes it later!",
    vote: 0,
  },
  {
    anecdote:
      "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    vote: 0,
  },
  {
    anecdote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    vote: 0,
  },
  {
    anecdote: "Premature optimization is the root of all evil.",
    vote: 0,
  },
  {
    anecdote:
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    vote: 0,
  },
];

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [anecdotes, setAnecdotes] = useState([...props.anecdotes]);
  const handleRandomSelection = () => {
    setSelected(getRandomIntExclusive(0, anecdotes.length));
  };
  const handleVote = () => {
    const copy = [...anecdotes];
    copy[selected] = {
      anecdote: anecdotes[selected].anecdote,
      vote: anecdotes[selected].vote + 1,
    };
    setAnecdotes(copy);
  };
  return (
    <div>
      <p>{anecdotes[selected].anecdote}</p>
      <p>has {anecdotes[selected].vote} votes</p>
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleRandomSelection} text="next anecdote" />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById("root")
);
