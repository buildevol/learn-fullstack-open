import Content from "./components/Content.component";
import Header from "./components/Header.component";
import Total from "./components/Total.component";
import CoursePart from "./types";

function App() {
  const courseName = 'Half Stack application development';
  // this is the new coursePart variable
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is the leisured course part",
      type: "normal"
    },
    {
      name: "Advanced",
      exerciseCount: 7,
      description: "This is the harded course part",
      type: "normal"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      type: "groupProject"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
      type: "submission"
    }
  ]
  return (
    <div>
      <Header name={courseName} />
      <Content courseParts={courseParts as Array<CoursePart>} />
      <Total courseParts={courseParts as Array<CoursePart>} />
    </div>
  );
}

export default App;
