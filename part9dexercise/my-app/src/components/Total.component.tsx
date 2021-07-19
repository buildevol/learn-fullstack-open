import { CoursePart } from "../types";

interface TotalProps {
    courseParts: Array<CoursePart>
}

const Total = (props: TotalProps) => {
    return <p>
        Number of exercises{" "}
        {props.courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
}

export default Total;