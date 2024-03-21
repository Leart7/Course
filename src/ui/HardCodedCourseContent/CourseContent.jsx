import CourseModalBody from "./CourseModalBody";

import CourseContentSection from "./CourseContentSection";

function CourseContent() {
  return (
    <CourseModalBody title="Course Content">
      <div className="flex flex-col gap-y-5">
        <CourseContentSection section="Intro to Course" />
        <CourseContentSection section="Fundamentals" />
        <CourseContentSection section="Bonus!" />
      </div>
    </CourseModalBody>
  );
}

export default CourseContent;
