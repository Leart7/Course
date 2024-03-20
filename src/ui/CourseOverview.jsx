import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faBook,
  faPencil,
  faTrash,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Stars from "./Stars";
import { useModalCloser } from "../hooks/useModalCloser";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import Overlay from "./Overlay";
import { useDeleteCourse } from "../reactQuery/useDeleteCourse";
import CourseModal from "../features/Courses/CourseModal";
import CourseStatusBadge from "./CourseStatusBadge";

function CourseOverview({ course, from }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdminHovered, setIsAdminHovered] = useState(false);
  const [clickedModal, setClickedModal] = useModalCloser();
  const [clickedDetailedModal, setClickedDetailedModal] = useModalCloser();
  const { deleteCourse } = useDeleteCourse();

  const courseName =
    course?.name?.length > 60 ? course.name.slice(0, 60) + "..." : course.name;

  function removeCourse(courseId) {
    deleteCourse(courseId);
  }

  return (
    <>
      <div
        onClick={() => setClickedDetailedModal(true)}
        onMouseEnter={() => {
          if (from === "admin") {
            setIsAdminHovered(true);
          } else {
            setIsHovered(true);
          }
        }}
        onMouseLeave={() => {
          if (from === "admin") {
            setIsAdminHovered(false);
          } else {
            setIsHovered(false);
          }
        }}
        className={`${from === "admin" && "relative hover:translate-y-0 hover:cursor-auto"} relative mx-auto h-[33rem]  w-full max-w-md  rounded-lg bg-white shadow-sm hover:cursor-pointer md:mx-0 md:w-[48%] lg:w-[31%]`}
      >
        <CourseStatusBadge status={course.status} />
        {from !== "admin" && (
          <div
            role="button"
            onClick={(e) => e.stopPropagation()}
            className="absolute left-6 top-6 z-10 h-11 w-11 rounded-full bg-orange-500 text-xl text-white hover:cursor-pointer hover:bg-blue-600"
          >
            <FontAwesomeIcon icon={faHeart} className="ms-3 mt-3" />
          </div>
        )}
        <div
          className={`${isHovered ? "bg-blue-600" : "bg-orange-500"} courseImage relative pb-2`}
        >
          <img src={course.cover} className="courseImage w-full " />
        </div>
        <div className="-mt-8 flex flex-col gap-y-4 p-5">
          <div className="flex items-center justify-between">
            <Stars ratings={course.ratings} reviews={course.reviews} />
            <p className="w-fit text-nowrap rounded-lg bg-blue-900 px-4 py-1 text-sm font-semibold text-white">
              {`${Math.round(course?.runtime)} hours`}
            </p>
          </div>
          <h2
            className={`${isHovered && "underline underline-offset-8"}  text-2xl font-bold capitalize hover:cursor-pointer hover:text-blue-600`}
          >
            {courseName}
          </h2>
          <div className="flex items-center gap-x-5">
            <p className="flex items-center gap-x-2 text-nowrap text-sm text-stone-500">
              <FontAwesomeIcon icon={faBook} />
              {course.lessons} Lessons
            </p>
            <p className="flex items-center gap-x-2 text-nowrap text-sm text-stone-500">
              <FontAwesomeIcon icon={faUsers} />
              {course.students} Students
            </p>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex h-14 items-center rounded-lg py-1">
            <img
              src="../../../public/teacher.jpg"
              className=" h-11 w-11 rounded-full "
            />
            <div className="ms-5 flex flex-col lg:ms-2">
              <p className="text-nowrap text-lg font-medium">Ridvan Aliu</p>
              <p className="-mt-1 text-sm uppercase text-stone-500 ">
                Instructor
              </p>
            </div>
            <p className="ms-auto hover:text-blue-600 hover:underline hover:underline-offset-4">
              Learn More{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </p>
          </div>
        </div>
        {isAdminHovered && (
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center gap-x-1 rounded-lg border bg-white p-1 text-3xl">
            <div
              onClick={() => setClickedUpdateModal(true)}
              className="rounded-lg p-2 text-green-700 hover:cursor-pointer hover:bg-blue-200"
            >
              <FontAwesomeIcon icon={faPencil} />
            </div>
            <div
              onClick={() => setClickedModal(true)}
              className="rounded-lg p-2 text-red-700 hover:cursor-pointer hover:bg-blue-200"
            >
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        )}
      </div>
      {clickedModal && (
        <>
          <ConfirmDeleteModal
            setClickedModal={setClickedModal}
            title="Course"
            item={course}
            deleteFunction={removeCourse}
          />
          <Overlay />
        </>
      )}
      {clickedDetailedModal && (
        <>
          <CourseModal
            course={course}
            setClickedModal={setClickedDetailedModal}
          />
          <Overlay />
        </>
      )}
    </>
  );
}

export default CourseOverview;
