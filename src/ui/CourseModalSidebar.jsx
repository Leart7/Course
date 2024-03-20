import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GradientButton from "./GradientButton";
import {
  faArrowRotateLeft,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import CourseSidebarProperty from "./CourseSidebarProperty";

function CourseModalSidebar({ course }) {
  const certificate = course.certificate ? "Yes" : "No";

  return (
    <div className="fixed bottom-10 right-10 top-10 w-1/4 rounded-lg border-4 border-indigo-500 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold text-stone-600">€{course?.price}</p>
        <p className="rounded-md bg-red-100 px-5 py-1 text-sm text-red-500">
          <FontAwesomeIcon icon={faClock} /> 3 days left!
        </p>
      </div>
      <GradientButton
        text="Add to Cart"
        yPosition="mt-5"
        xPosition="mx-auto"
        width="w-full"
      />
      <button className="mx-auto mt-5 w-full transform rounded-md border-2 border-gray-200 bg-white py-3 text-xl font-bold hover:-translate-y-1 hover:border-0 hover:bg-blue-600 hover:text-white">
        Buy Now
      </button>
      <p className="mt-2 text-center text-sm text-stone-500">
        <FontAwesomeIcon icon={faArrowRotateLeft} />
        30-Day Money-Back Guarantee{" "}
      </p>
      <div className="mt-10 flex flex-col gap-y-3">
        <CourseSidebarProperty property="Category" value={course.category} />

        <CourseSidebarProperty property="Enrolled" value={course.students} />
        <CourseSidebarProperty
          property="Length"
          value={`${Math.round(course.runtime)} hours`}
        />

        <CourseSidebarProperty property="Lectures" value={course.lessons} />
        <CourseSidebarProperty
          property="Skill Level"
          value={course.skillLevel}
        />
        <CourseSidebarProperty property="Language" value={course.language} />
        <CourseSidebarProperty property="Certificate" value={certificate} />
        <button className="w-full rounded-full border bg-blue-200 py-3">
          <FontAwesomeIcon icon={faPhone} className="me-2" />
          Call Us:{" "}
          <span className="font-semibold text-blue-600">+383 (45) 359 900</span>
        </button>
      </div>
    </div>
  );
}

export default CourseModalSidebar;
