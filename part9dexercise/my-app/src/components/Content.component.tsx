import { CoursePart } from "../types";
import { assertNever } from "./utils";

interface ContentProps {
    courseParts: Array<CoursePart>;
}

const Content = (props: ContentProps) => {
    return (
        <>
            {props.courseParts.map((coursePart, index) => {
                switch (coursePart.name) {
                    case "Fundamentals":
                        return <p key={index}>{coursePart.name} {coursePart.exerciseCount} {coursePart.description}</p>
                    case "Using props to pass data":
                        return <p key={index}>{coursePart.name} {coursePart.exerciseCount} {coursePart.groupProjectCount}</p>
                    case "Deeper type usage":
                        return <p key={index}>{coursePart.name} {coursePart.exerciseCount} {coursePart.description} {coursePart.exerciseSubmissionLink}</p>
                    default:
                        return assertNever(coursePart);
                }
            })}
            {props.courseParts.map((coursePart, index) => {
                return <p key={index}>{coursePart.name} {coursePart.exerciseCount}</p>
            })}
        </>
    )
}

export default Content;