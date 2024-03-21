import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CourseLessonsAndStudents from "./CourseLessonsAndStudents";
import Stars from "./Stars";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function CourseListView({ course, from }) {
  return (
    <>
      <div
        className={`${from === "list" ? "w-[85%]" : "w-[70%]"} flex  items-center gap-x-10`}
      >
        <img
          src={course.cover}
          className="w-[45%] rounded-lg border-[14px] border-white shadow-md"
        />
        <div className="flex flex-col gap-y-5">
          <h2
            className={`text-4xl font-bold capitalize hover:cursor-pointer hover:text-blue-600`}
          >
            {course.name}
          </h2>
          <div className="flex items-center justify-between gap-x-10">
            <Stars ratings={course.ratings} reviews={course.reviews} />
            {from === "list" && (
              <p className="w-fit text-nowrap rounded-lg bg-blue-900 px-4 py-1 text-sm font-semibold text-white">
                {`${Math.round(course?.runtime)} hours`}
              </p>
            )}
          </div>
          <CourseLessonsAndStudents
            lessons={course.lessons}
            students={course.students}
          />
          <div className="flex h-14 items-center rounded-lg py-1">
            <img
              src="../../../public/teacher.jpg"
              className=" h-11 w-11 rounded-full "
            />
            <p className="ms-5 text-nowrap text-lg font-medium">
              <span className="font-normal">By</span> Ridvan Aliu
            </p>
            {from === "list" && (
              <p className="unselectable ms-auto hover:text-blue-600 hover:underline hover:underline-offset-4">
                Learn More{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseListView;
