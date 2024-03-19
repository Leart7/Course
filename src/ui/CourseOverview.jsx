import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faBook,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Stars from "./Stars";

function CourseOverview({ course }) {
  const [isHovered, setIsHovered] = useState(false);

  const courseName =
    course?.name?.length > 60 ? course.name.slice(0, 60) + "..." : course.name;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative mx-auto h-[33rem]  w-full max-w-md overflow-hidden rounded-lg bg-white shadow-sm hover:cursor-pointer md:mx-0 md:w-[48%] lg:w-[31%]"
    >
      <div className="absolute left-6 top-6 z-10 h-11 w-11 rounded-full bg-orange-500 text-xl text-white hover:cursor-pointer hover:bg-blue-600">
        <FontAwesomeIcon icon={faHeart} className="ms-3 mt-3" />
      </div>
      <div
        className={`${isHovered ? "bg-blue-600" : "bg-orange-500"} courseImage relative pb-2`}
      >
        <img src="./studentsRectangle.jpg" className="courseImage w-full " />
      </div>
      <div className="-mt-8 flex flex-col gap-y-4 p-5">
        <div className="flex items-center justify-between">
          ` `
          <Stars ratings={course.ratings} reviews={course.reviews} />
          <p className="w-fit rounded-lg bg-blue-900 px-4 py-1 text-sm font-semibold text-white">
            {`${Math.round(course?.runtTime)} hours`}
          </p>
        </div>
        <h2
          className={`${isHovered && "underline underline-offset-8"}  text-2xl font-bold capitalize hover:cursor-pointer hover:text-blue-600`}
        >
          {courseName}
        </h2>
        <div className="flex items-center gap-x-5">
          <p className="flex items-center gap-x-2 text-sm text-stone-500">
            <FontAwesomeIcon icon={faBook} />
            {course.lessons} Lessons
          </p>
          <p className="flex items-center gap-x-2 text-sm text-stone-500">
            <FontAwesomeIcon icon={faUsers} />
            {course.students} Students
          </p>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex h-14 items-center rounded-lg py-1">
          <img src="./teacher.jpg" className=" h-11 w-11 rounded-full " />
          <div className="ms-5 flex flex-col">
            <p className="text-lg font-medium">Ridvan Aliu</p>
            <p className="-mt-1 text-sm uppercase text-stone-500">Instructor</p>
          </div>
          <p className="ms-auto hover:text-blue-600 hover:underline hover:underline-offset-4">
            Learn More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseOverview;
