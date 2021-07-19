import CoursePart from "../types";
import { assertNever } from "./utils";

interface ContentProps {
    courseParts: Array<CoursePart>;
}

const Content = (props: ContentProps) => {
    return (
        <>
            {props.courseParts.map((coursePart, index) => {
                switch (coursePart.type) {
                    case "normal":
                        return <p key={index}>{coursePart.name} {coursePart.exerciseCount}</p>
                    case "groupProject":
                        return <p key={index}>{coursePart.name} {coursePart.exerciseCount}</p>
                    case "submission":
                        return <p key={index}>{coursePart.name} {coursePart.exerciseCount}</p>
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