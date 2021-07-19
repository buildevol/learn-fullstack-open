import CoursePart from "../types";
import { assertNever } from "./utils";

interface PartProps {
    coursePart: CoursePart;
}

const Part = (props: PartProps) => {
    switch (props.coursePart.type) {
        case "normal":
            return (
                <div>
                    <strong>{props.coursePart.name} {props.coursePart.exerciseCount}</strong>
                    <br />
                    <em>{props.coursePart.description}</em>
                </div>
            )
        case "groupProject":
            return (
                <div>
                    <strong>{props.coursePart.name} {props.coursePart.exerciseCount}</strong>
                    <br />
                    <em>{`project exercises ${props.coursePart.groupProjectCount}`}</em>
                </div>
            )
        case "submission":
            return (
                <div>
                    <strong>{props.coursePart.name} {props.coursePart.exerciseCount}</strong>
                    <br />
                    <em>{props.coursePart.description}</em>
                    <br />
                    {`submit to ${props.coursePart.exerciseSubmissionLink}`}
                </div>
            )
        case "special":
            return (
                <div>
                    <strong>{props.coursePart.name} {props.coursePart.exerciseCount}</strong>
                    <br />
                    <em>{props.coursePart.description}</em>
                    <br />
                    {`required skills: ${props.coursePart.requirements.join(',')}`}
                </div>
            )
        default:
            return assertNever(props.coursePart)
    }

}

export default Part;