import { CoursePart } from "../types";

interface ContentProps {
    courseParts: Array<CoursePart>;
}

const Content = (props: ContentProps) => {
    return (
        <>
            {props.courseParts.map((coursePart, index) => {
                return <p key={index}>{coursePart.name} {coursePart.exerciseCount}</p>
            })}
        </>
    )
}

export default Content;