// new types
interface CoursePartBase {
    name: string;
    exerciseCount: number;
    type: string;
}

interface CourseNormalPart extends CoursePartBase {
    type: "normal";
    description: string;
}
interface CourseProjectPart extends CoursePartBase {
    type: "groupProject";
    groupProjectCount: number;
}

interface CourseSubmissionPart extends CoursePartBase {
    type: "submission";
    description: string;
    exerciseSubmissionLink: string;
}

type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart;

export default CoursePart;