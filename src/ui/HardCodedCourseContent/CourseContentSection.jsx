import {
  faFile,
  faMinus,
  faPlus,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CourseLesson from "./CourseLesson";

function CourseContentSection({ section }) {
  const [isOpen, setIsOpen] = useState(false);

  const [hours, setHours] = useState(Math.floor(Math.random() * 6));
  const [minutes, setMinutes] = useState(Math.floor(Math.random() * 60));

  const [lessonLengthHours, setLessonLengthHours] = useState(
    Math.floor(Math.random() * 1),
  );
  const [lessonLengthMinutes, setLessonLengthMinutes] = useState(
    Math.floor(Math.random() * 60),
  );

  const formattedTime = `${hours > 0 ? `${hours}hr` : ""} ${minutes}min`;
  const formattedLessonLength = `${lessonLengthHours > 0 ? `${lessonLengthMinutes}hr` : ""} ${lessonLengthMinutes}min`;

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" unselectable flex items-center justify-between border-b border-stone-200 pb-5 hover:cursor-pointer"
      >
        <p className="text-lg font-bold">
          {section}
          <span className="ms-3 rounded-md bg-stone-100 p-1  text-xs font-medium text-stone-500">
            {formattedTime}
          </span>
        </p>
        {!isOpen ? (
          <FontAwesomeIcon icon={faPlus} />
        ) : (
          <FontAwesomeIcon icon={faMinus} />
        )}
      </div>
      {isOpen && (
        <div className=" flex flex-col gap-y-4 border-b pb-5">
          <CourseLesson title="Course Intro" length={formattedLessonLength}>
            <FontAwesomeIcon icon={faVideo} />
          </CourseLesson>
          <CourseLesson
            title="Read before you start"
            length={formattedLessonLength}
          >
            <FontAwesomeIcon icon={faFile} />
          </CourseLesson>
          <CourseLesson title="Lesson1" length={formattedLessonLength}>
            <FontAwesomeIcon icon={faVideo} />
          </CourseLesson>{" "}
          <CourseLesson title="Lesson2" length={formattedLessonLength}>
            <FontAwesomeIcon icon={faVideo} />
          </CourseLesson>
        </div>
      )}
    </>
  );
}

export default CourseContentSection;
