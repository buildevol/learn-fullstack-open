import CoursePart from "../types";
import Part from "./Part.component";

interface ContentProps {
    courseParts: Array<CoursePart>;
}

const Content = (props: ContentProps) => {
    return (
        <>
            {props.courseParts.map((coursePart, index) => {
                return (
                    <>
                        <Part key={index} coursePart={coursePart} />
                        <br />
                    </>)
            })}
        </>)
}

export default Content;