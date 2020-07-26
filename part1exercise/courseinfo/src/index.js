import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.parts[0]} {props.numOfExercises[0]}
      </p>
      <p>
        {props.parts[1]} {props.numOfExercises[1]}
      </p>
      <p>
        {props.parts[2]} {props.numOfExercises[2]}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        parts={[part1, part2, part3]}
        numOfExercises={[exercises1, exercises2, exercises3]}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
