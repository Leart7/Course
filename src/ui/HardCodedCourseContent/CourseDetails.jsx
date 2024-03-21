import CourseBulletPoints from "./CourseBulletPoints";
import CourseModalBody from "./CourseModalBody";

function CourseDetails() {
  return (
    <CourseModalBody title="Requirements" secondTitle="Description">
      <CourseBulletPoints />
    </CourseModalBody>
  );
}

export default CourseDetails;
