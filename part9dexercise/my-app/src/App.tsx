import Content from "./components/Content.component";
import Header from "./components/Header.component";
import Total from "./components/Total.component";
import { CoursePart } from "./types";

function App() {
  const courseName = 'Half Stack application development';
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    },
  ];
  return (
    <div>
      <Header name={courseName} />
      <Content courseParts={courseParts as Array<CoursePart>} />
      <Total courseParts={courseParts as Array<CoursePart>} />
    </div>
  );
}

export default App;
