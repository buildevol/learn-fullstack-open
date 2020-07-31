import React from "react";

const Header = (props) => {
  return (
    <>
      <h2>{props.course}</h2>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Total = (props) => {
  // Already coded with reduce method in 2.2 which is also part of 2.3 solution
  return (
    <>
      <h3>
        {`total of
        ${props.parts.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.exercises;
        }, 0)} exercises`}
      </h3>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
